import ProfileCard from "@/components/ProfileCard";
import ProfileView from "@/components/ProfileView";
import { Button } from "@/components/ui/button";
import { Table, TableRow } from "@/components/ui/table";
import { useEmployees } from "@/hooks/useEmployees";
import { useState } from "react";
import { IoPersonAddSharp } from "react-icons/io5";

export default function Users() {
  const { allEmployees, isPending } = useEmployees();
  const [seletedEmployee, setSeletedEmployee] = useState({});

  const handleSelect = (e: React.MouseEvent) => {
    const clickedCard = (e.target as HTMLElement).closest("[data-id]");
    if (clickedCard) {
      const employeeId = clickedCard.getAttribute("data-id");

      const employee = allEmployees?.find((emp) => emp.id === employeeId);
      if (employee) {
        setSeletedEmployee(employee);
        console.log(seletedEmployee);
      }
      // const employeeName = clickedCard.getAttribute("data-name");

      // console.log("Clicked Employee ID:", employeeId, employeeName);
    }
  };
  return (
    <div>
      <div className="flex">
        <h1 className="pb-4 text-3xl font-bold">All Users</h1>
        <Button className="ml-10">
          {" "}
          <IoPersonAddSharp /> <span> Add User</span>
        </Button>
      </div>

      <section
        className={seletedEmployee?.firstName ? `grid grid-cols-2` : ``}
        onClick={handleSelect}
      >
        {/* Left column - employee list */}
        <div className=" max-h-[90vh] overflow-y-auto">
          {allEmployees?.map((details) => (
            <Table
              key={details.id}
              data-id={details.id}
              className="cursor-pointer"
              data-name={details.firstName}
            >
              <ProfileCard details={details} />
            </Table>
          ))}
        </div>

        {/* Right column - profile view */}
        {seletedEmployee?.firstName ? (
          <div className="max-h-[90vh] overflow-y-auto bg-violet-50">
            <ProfileView seletedEmployee={seletedEmployee} />
          </div>
        ) : null}
      </section>
    </div>
  );
}
