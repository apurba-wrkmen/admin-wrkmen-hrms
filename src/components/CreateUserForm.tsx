import type { ReactElement } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { useForm, type SubmitHandler } from "react-hook-form";
import type { ILogin } from "@/interfaces/ILogin.interface";
import { useCreateUser, useLogin } from "@/hooks/useAuth";

export default function CreateUserForm(): ReactElement {
  const { createNewUser } = useCreateUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();

  // const { login } = useLogin();

  const onSubmit = (data) => {
    // login(data);
    // console.log(data)
    createNewUser(data);
  };

  return (
    <Card className="w-full px-6 py-4 border-none shadow-none bg-amber-700">
      <CardHeader>
        <CardTitle className="text-center">
          <h1>Add new User</h1>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          {/* Email */}
          <div className="grid gap-2">
            <Label htmlFor="first name">First Name</Label>
            <Input
              id="firstName"
              type="text"
              placeholder="first name"
              {...register("firstName", {
                required: "Email is required!",
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-500 italic">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="Last name">Last Name</Label>
            <Input
              id="firstName"
              type="text"
              placeholder="last name"
              {...register("lastName", {
                required: "lastName is required!",
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-500 italic">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="email@sample.com"
              {...register("email", {
                required: "Email is required!",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-500 italic">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••"
              {...register("password", {
                required: "Password is required!",
              })}
            />
            {errors.password && (
              <p className="text-sm text-red-500 italic">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-[100px] self-center mt-2 cursor-pointer"
          >
            Create
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
