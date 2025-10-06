import Restriction from "@/components/Restriction";
import Sidebar from "@/components/Sidebar";
import { useCurrentProfile, useUser } from "@/hooks/useUser";
import { Outlet } from "react-router-dom";
import type { ReactElement } from "react";

export default function Dashboard(): ReactElement {
  const { user, isPending } = useUser();

  // userId can be string or null
  const userId: string | null = user?.user?.id ?? null;

  // Step 1: Handle loading of user itself
  if (isPending) return <>Loading user...</>;

  // Step 2: If userId is null, bail early (fixes TS2345 + logic)
  if (!userId) return <Restriction />;

  // Step 3: Fetch profile only when userId is available
  const { access, isPending: profilePending } = useCurrentProfile(userId);

  if (profilePending) return <>Loading profile...</>;
  if (!access) return <Restriction />;

  // Step 4: Render dashboard
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
}
