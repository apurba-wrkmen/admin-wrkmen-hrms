import ProfileCard from "@/components/ProfileCard";
import ProfileView from "@/components/ProfileView";
import { Table, TableRow } from "@/components/ui/table";
import { useEmployees } from "@/hooks/useEmployees";
import { useState } from "react";

export default function Employees() {
  const { allEmployees, isPending } = useEmployees();
  const [seletedEmployee, setSeletedEmployee] = useState();

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
    <div className="max-h-7">
      <h1 className="pb-4 text-3xl font-bold ">Employees</h1>
      <section className="grid grid-cols-2 bg-blue-500 max-[100vh] overflow-hidden" onClick={handleSelect}>
        <div className=" bg-amber-100">
          {allEmployees?.map((details) => {
            return (
              <Table
                key={details.id}
                data-id={details.id} // used to detect click target
                className="cursor-pointer"
                data-name={details.firstName}
              >
                <ProfileCard details={details} />
              </Table>
            );
          })}
        </div>
        <ProfileView seletedEmployee={seletedEmployee} />
      </section>
    </div>
  );
}
