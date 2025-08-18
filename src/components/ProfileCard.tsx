import type { ReactElement } from "react";
import { TableCell, TableRow } from "./ui/table";
// import { Card } from "@/components/ui/card";

export default function ProfileCard({ details }): ReactElement {
  const {
    firstName,
    lastName,
    designation,
    employeeCode,
    accountStandard,
    Status,
    profilePicture
  } = details;

  const fullName = firstName + " " + lastName;
  return (
    <TableRow>
      <TableCell>
        <div className="flex gap-3 items-center">
          {/* Profile image container */}
          <div className="relative h-15 w-15 overflow-hidden  rounded-md items-center ">
            {/* Replace with actual image later */}
            <img
              src={profilePicture}
              alt={fullName}
              className="h-full w-full object-cover"
            />
            {/* <div className="h-20 w-20 aspect-auto bg-red-200 rounded-xl relative"></div> */}
            {/* Small circle badge */}
            {Status === "Active" ? (
              <div
                className={`h-4 w-4 bg-green-400 rounded-full absolute bottom-0 right-0 border-2 border-white z-10`}
              ></div>
            ) : (
              <div
                className={`h-4 w-4 bg-red-600 rounded-full absolute bottom-0 right-0 border-2 border-white z-10`}
              ></div>
            )}
          </div>

          {/* Name and designation */}
          <div>
            <h3 className="font-bold text-l text-background3">{fullName}</h3>

            <h4>
              {designation}{" "}
              {accountStandard !== "employee" ? (
                <span className="bg-background2 px-2 pb-0.5 rounded-sm ml-3 text-white">
                  {accountStandard}
                </span>
              ) : null}
            </h4>
            <h4 className="font-bold text-background2 mt-2">{employeeCode}</h4>
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
}
