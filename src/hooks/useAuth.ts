import type { ILogin } from "@/interfaces/ILogin.interface";
import { userlogin as loginApi, userlogout } from "@/services/apis/auth.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const { mutate: login, isPending } = useMutation({
        mutationFn: (data: ILogin) => loginApi(data),
        onSuccess: (data) => {
            console.log(data)
            queryClient.invalidateQueries({ queryKey: ['user'] })
            setTimeout(() => navigate("/dashboard", { replace: true }), 2000)

        },
        onError: (err: Error) => {
            toast.error(err.message || "Login Failed !")
            console.log(err)
        }
    })
    return { login, isPending }



}

export function useLogout() {
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const { mutate: logout, isPending } = useMutation({
        mutationFn: userlogout,
        onSuccess: (data) => {
            console.log(data)
            queryClient.removeQueries({ queryKey: ['user'] })
            // setTimeout(() => navigate("/", { replace: true }), 2000)
            navigate("/", { replace: true })

        },
        onError: (err: Error) => {
            toast.error(err.message || "Login Failed !")
            console.log(err)
        }
    })
    return { logout, isPending }




}