import type { ILogin } from "@/interfaces/ILogin.interface";
import supabase from "../supabase";

export const userlogin = async (data: ILogin) => {
    const { data: res, error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password
    })

    if (error) throw new Error(error.message)
    return res
}


export const userlogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.error("Logout error:", error.message);
    } else {
        console.log("User logged out");
    }
}

