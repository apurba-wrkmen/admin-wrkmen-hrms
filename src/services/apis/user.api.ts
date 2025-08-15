// services/user.api.ts
import supabase from "@/services/supabase"

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



