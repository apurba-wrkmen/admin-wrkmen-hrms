import Attendence from "@/features/Attendance/Attendence";
import Dashboard from "@/features/dashboard/Dashboard";
import Users from "@/features/Employees/Users";
import LoginPage from "@/features/LoginPage.tsx/LoginPage";
import Payroll from "@/features/Payroll/Payroll";
import Settings from "@/features/settings/Settings";
import Employees from "@/features/Users/Employees";

import { useRoutes, type RouteObject } from "react-router-dom";

export const AppRouter = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
      children: [
        {
          // path: "employees",
          index: true,
          element: <Users/>,
        },

        {
          path: "payroll",
          element: <Payroll />,
        },
        {
          path: "attendance",
          element: <Attendence />,
        },
        {
          path: "Employees",
          element: <Employees />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
  ];
  return useRoutes(routes);
};
