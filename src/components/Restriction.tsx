import type { ReactElement } from "react";
import wrkmen_hrms from "@/assets/wrkmen_hrms.svg";
import { Button } from "./ui/button";
import { useLogout } from "@/hooks/useAuth";
export default function Restriction(): ReactElement {
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="flex h-dvh justify-center items-center flex-col ">
      <img src={wrkmen_hrms} alt="" className="h-40" />
      <h1 className="text-3xl text-red-800">
        You don't have permission to visit this page!
      </h1>
      <div className="mt-5">
        <Button onClick={handleLogout} className="cursor-pointer">
          Log Out
        </Button>
      </div>
    </div>
  );
}
