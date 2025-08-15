import type { ReactElement } from "react";
import { TableCell, TableRow } from "./ui/table";
// import { Card } from "@/components/ui/card";

import wrkmen_hrms from "@/assets/wrkmen_hrms.svg";

export default function ProfileCard({ details }): ReactElement {
  const { firstName, lastName, designation, employeeCode, employeeType } =
    details;

  const fullName = firstName + " " + lastName;
  return (
    <TableRow>
      <TableCell>
        <div className="flex gap-3 items-center">
          {/* Profile image container */}
          <div className="relative h-20 w-20 overflow-hidden  rounded-md items-center ">
            {/* Replace with actual image later */}
            <img
              src={wrkmen_hrms}
              alt={fullName}
              className="h-full w-full object-cover"
            />
            {/* <div className="h-20 w-20 aspect-auto bg-red-200 rounded-xl relative"></div> */}
            {/* Small circle badge */}
            <div className="h-3 w-3 bg-green-400 rounded-full absolute bottom-0 right-0 border-2 border-white z-10"></div>
          </div>

          {/* Name and designation */}
          <div>
            <h3 className="font-bold text-l text-background3">{fullName}</h3>
            <h4>
              {designation} <span className="bg-background2 px-2 pb-0.5 rounded-sm ml-3 text-white">{employeeType}</span>
            </h4>
            <h4 className="font-bold text-background2 mt-2">{employeeCode}</h4>
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
}
