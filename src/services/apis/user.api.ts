// services/user.api.ts
import supabase from "@/services/supabase"
import { v4 as uuidv4 } from 'uuid';
const supabaseUrl = "https://bpvymygwansrrfqcvckt.supabase.co"

export async function getUser() {
  const { data: sessionResponse } = await supabase.auth.getSession();
  if (!sessionResponse.session) return null;

  const { data: user, error } = await supabase.auth.getUser();
  if (error || !user) throw new Error(error?.message || "Failed to get user");

  return {
    ...user,
    role: "authenticated",
  };
}


export async function currentProfile(id: string) {
  const { data: res, error } = await supabase
    .from("employees")
    .select("*")
    .eq("userId", id);


  if (error) throw new Error(error.message)
  return res
}


export async function updateProfilePicture({ file, id }: { file: File; id: string }) {
  console.log("file:", file);
  console.log("id:", id);

  const profileUrl = `${supabaseUrl}/storage/v1/object/public/avatar/${id}-${uuidv4()}`;
  console.log(profileUrl)
  const { error: storageError } = await supabase
    .storage
    .from("avatar")
    .upload(`${id}`, file, { upsert: true });

  if (storageError) throw new Error(storageError.message);

  const { data: profilePhoto, error: error3 } = await supabase
    .from("employees")
    .update({ ProfilePhoto: profileUrl })
    .eq("id", id) // <-- now a valid string
    .select();

  console.log(profilePhoto, error3);
  return { profilePhoto, error3, storageError };
}





interface UpdateProfileDetailsParams {
  data: string; // assuming this is a URL or filename of the new profile photo
  id: string;   // employee ID in your Supabase table
}

export async function updateProfileDetails({
  data,
  id,
}: UpdateProfileDetailsParams): Promise<{
  updatedDetails: any[] | null;
  error4: Error | null;
}> {
  const { data: updatedDetails, error: error4 } = await supabase
    .from("employees")
    .update({ ProfilePhoto: data })
    .eq("id", id)
    .select();

  if (error4) {
    console.error("❌ Error updating profile details:", error4.message);
  }

  return { updatedDetails, error4 };
}
