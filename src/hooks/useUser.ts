import { currentProfile, getUser } from "@/services/apis/user.api";
import { accessLevelCheck } from "@/utils/accessLevelCheck";
import { useQuery } from "@tanstack/react-query";


export function useUser() {

    const { data: user, isPending } = useQuery({
        queryKey: ["user"],
        queryFn: getUser,
        staleTime: Infinity,
        // cacheTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    })

    return {
        user, isPending, isAuthenticated: user?.role === "authenticated"
    }

}


export function useCurrentProfile(id: string) {

    const { data: profile, isPending, isError } = useQuery({
        queryKey: ["profile", id],
        queryFn: () => currentProfile(id),
        enabled: Boolean(id)
    })
    if (isError) {
        console.log("Failed to load details !")
    }


    return {
        profile, isPending, isError, access: accessLevelCheck(profile?.[0]?.accountStandard)
    }
}

