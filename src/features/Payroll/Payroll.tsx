import Calender from "./components/Calender";
import PayrollHeader from "./components/PayrollHeader";
import PayrollTable from "./components/PayrollTable";

export default function Payroll() {
  return (
    <div className="px-2 py-2">
      <PayrollHeader />
      <div className="flex items-center gap-2">
        <Calender/>
        <div>220 Employees</div>
      </div>
      <PayrollTable/>
    </div>
  );
}
