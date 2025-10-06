import {
  currentProfile,
  getUser,
  updateProfilePicture,
} from "@/services/apis/user.api";
import { accessLevelCheck } from "@/utils/accessLevelCheck";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// -------------------- USER FETCH --------------------
export function useUser() {
  const { data: user, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return {
    user,
    isPending,
    isAuthenticated: user?.role === "authenticated",
  };
}

// -------------------- CURRENT PROFILE --------------------
export function useCurrentProfile(id: string) {
  const { data: profile, isPending, isError } = useQuery({
    queryKey: ["profile", id],
    queryFn: () => currentProfile(id),
    enabled: Boolean(id),
  });

  if (isError) {
    console.error("Failed to load details!");
  }

  return {
    profile,
    isPending,
    isError,
    access: accessLevelCheck(profile?.[0]?.accountStandard),
  };
}

// -------------------- UPDATE PROFILE PICTURE --------------------
interface UpdateProfilePictureParams {
  file: File;
  id: string;
}

export function useUpdateProfilePicture() {
  const queryClient = useQueryClient();

  const { mutate: updatePhoto, isPending } = useMutation({
    mutationFn: ({ file, id }: UpdateProfilePictureParams) =>
      updateProfilePicture({ file, id }),

    onSuccess: (data) => {
      console.log("✅ File uploaded successfully");
      console.log("=========", data);

      queryClient.invalidateQueries({ queryKey: ["employees"] });

      // You could also patch cache data here:
      // queryClient.setQueryData(["user"], (old: any) => ({
      //   ...old,
      //   profilePhoto: data.profilePhoto,
      // }));
    },

    onError: (err: unknown) => {
      if (err instanceof Error) console.error("❌ Upload failed:", err.message);
      else console.error("❌ Unknown upload error", err);
    },

    onSettled: () => {
      // Optional cache sync
    },
  });

  return { updatePhoto, isPending };
}
