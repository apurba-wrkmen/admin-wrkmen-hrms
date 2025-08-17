import Restriction from "@/components/Restriction";
import Sidebar from "@/components/Sidebar";
import { useCurrentProfile, useUser } from "@/hooks/useUser";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  const { user, isPending } = useUser();

  const userId: string = user?.user?.id || null;
  console.log(userId);
  const { access, isPending: profilePending } = useCurrentProfile(userId);
  if (profilePending) return <>Loading...</>;
  if (!access) return <Restriction />;
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
}
