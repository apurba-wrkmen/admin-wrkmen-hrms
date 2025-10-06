import { navigation } from "@/utils/navigations";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import wrkmen_hrms from "@/assets/wrkmen_hrms.svg";
import { BiLogOut } from "react-icons/bi";
import { useLogout } from "@/hooks/useAuth";

export default function Sidebar() {
  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
  };
  return (
    <div className=" flex flex-col w-44 px-8 py-5 justify-between  bg-violet-100 rounded-2xl h-[98vh]">
      <div className="flex flex-col gap-5 ">
      <img src={wrkmen_hrms} alt="" className="h-[80px]" />

        {navigation.map((el, index) => {
          return (
            <div>
              <NavLink
                key={index}
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
      <Button className="cursor-pointer" onClick={handleLogout}>
        {" "}
        <BiLogOut /> <span>Logout</span>
      </Button>
    </div>
  );
}
