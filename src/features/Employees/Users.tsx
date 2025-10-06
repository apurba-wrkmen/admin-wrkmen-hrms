import ProfileCard from "@/components/ProfileCard";
import ProfileView from "@/components/ProfileView";
import { Table } from "@/components/ui/table";
import UsersHeader from "@/components/UsersHeader";
import { useEmployees } from "@/hooks/useEmployees";
import { useState, type ReactElement, type MouseEvent } from "react";

// 👇 Define a shared type for employees
interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  designation: string;
  personalEmail: string;
  employeeCode: string;
  gender: string;
  Status: string;
  phoneNumber: string;
  addresssLine1: string;
  addresssLine2: string;
  dateOfBirth: string;
  departmentCode: string;
  joinedDate: string;
  accountStandard: string;
  employeeType: string;
  qualification: string;
  Salary: string;
  city: string;
  BankName: string;
  IFSCCode: string;
  AadhaarCard: string;
  PANcard: string;
  AccountNumber: string;
  UPIId: string;
  BranchName: string;
  ReleasedDate: string;
  ReleasedReason: string;
  OfficeEmail: string;
  ProfilePhoto: string;
}

export default function Users(): ReactElement {
  const { allEmployees, isPending } = useEmployees();

  // ✅ Strongly type selected employee
  const [seletedEmployee, setSeletedEmployee] = useState<Employee | null>(null);

  const handleSelect = (e: MouseEvent<HTMLDivElement>): void => {
    const clickedCard = (e.target as HTMLElement).closest("[data-id]");
    if (clickedCard) {
      const employeeId = clickedCard.getAttribute("data-id");
      const employee = allEmployees?.find((emp: Employee) => emp.id === employeeId);

      if (employee) {
        setSeletedEmployee(employee);
      }
    }
  };

  if (isPending) return <>Loading employees...</>;

  return (
    <div>
      <UsersHeader />
      <section
        className={seletedEmployee ? "grid grid-cols-2" : ""}
        onClick={handleSelect}
      >
        {/* Left column - employee list */}
        <div className="max-h-[90vh] overflow-y-auto">
          {allEmployees?.map((details: Employee) => (
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
        {seletedEmployee && (
          <div className="max-h-[90vh] overflow-y-auto bg-violet-50">
            <ProfileView seletedEmployee={seletedEmployee} />
          </div>
        )}
      </section>
    </div>
  );
}
