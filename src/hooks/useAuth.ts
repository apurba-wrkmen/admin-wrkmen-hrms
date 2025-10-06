import type { ILogin } from "@/interfaces/ILogin.interface";
import { userlogin as loginApi, userlogout } from "@/services/apis/auth.api";
import { createUser } from "@/services/apis/createUser.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// -------------------- LOGIN --------------------
export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: (data: ILogin) => loginApi(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      setTimeout(() => navigate("/dashboard", { replace: true }), 2000);
    },
    onError: (err: Error) => {
      toast.error(err.message || "Login failed!");
    },
  });

  return { login, isPending };
}

// -------------------- LOGOUT --------------------
export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: userlogout,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["user"] });
      navigate("/", { replace: true });
      toast.success("Logged out!");
    },
    onError: (err: Error) => {
      toast.error(err.message || "Logout failed!");
    },
  });

  return { logout, isPending };
}

// -------------------- CREATE USER --------------------
interface INewUser {
  name: string;
  email: string;
  password: string;
  [key: string]: any; // if your backend allows dynamic fields
}

export function useCreateUser() {
  const queryClient = useQueryClient();

  const { mutate: createNewUser, isPending } = useMutation({
    mutationFn: (data: INewUser) => createUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("User created successfully!");
    },
    onError: (error: Error) => {
      console.error("Error creating user:", error);
      toast.error(error.message || "Failed to create user!");
    },
  });

  return { createNewUser, isPending };
}
