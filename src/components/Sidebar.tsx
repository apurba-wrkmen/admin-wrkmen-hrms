import { navigation } from "@/utils/navigations";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import wrkmen_hrms from "@/assets/wrkmen_hrms.svg";

export default function Sidebar() {
  return (
    <div className=" flex flex-col w-44 px-8 py-5 h-dvh justify-between">
      <div className="flex flex-col gap-5">
        <img src={wrkmen_hrms} alt="" srcset="" className="h-[80px]" />

        {navigation.map((el) => {
          return (
            <div>
              {" "}
              <NavLink
                key={el.id}
                to={el.to}
                end={el.to === "/dashboard"}
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-background3 px-3 py-2 rounded-lg font-semibold"
                    : "text-gray hover:bg-background2 px-3 py-2 rounded-lg hover:text-white"
                }
              >
                {el.name}
              </NavLink>
            </div>
          );
        })}
      </div>
      <Button>Logout</Button>
    </div>
  );
}
