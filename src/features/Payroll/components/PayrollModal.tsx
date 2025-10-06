import { useModalStore } from "@/components/store/modalStore";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/Modal";
import {
  useCalculatePayrollDetails,
  usePayrollEmployees,
} from "@/hooks/usePayroll";
import { useState, type ReactElement, type FormEvent } from "react";

export default function PayrollModal(): ReactElement {
  const { closeModal } = useModalStore();
  const { allpayrollEmployees } = usePayrollEmployees();

  const [selectedEmployee, setSelectedEmployee] = useState<string>("");

  // ✅ The hook can internally handle “enabled: !!selectedEmployee”
  const { workLogs, isPending } = useCalculatePayrollDetails(selectedEmployee);

  const generatePayroll = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedEmployee) {
      console.warn("No employee selected");
      return;
    }

    if (isPending) {
      console.warn("Payroll details still loading");
      return;
    }

    console.log("Selected Employee ID:", selectedEmployee);
    console.log("Work logs:", workLogs);

    // TODO: calculate totals or trigger mutation to generate payroll
  };

  return (
    <Modal title="Create Payroll">
      <form onSubmit={generatePayroll} className="flex flex-col gap-4">
        <select
          name="employee"
          value={selectedEmployee}
          onChange={(e) => setSelectedEmployee(e.target.value)}
          required
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="">-- Select Employee --</option>
          {allpayrollEmployees?.map((el) => (
            <option key={el.userId} value={el.userId}>
              {el.firstName} {el.lastName}
            </option>
          ))}
        </select>

        <Button type="submit" className="cursor-pointer">
          Create Payroll
        </Button>
      </form>

      <Button
        type="button"
        variant="secondary"
        className="cursor-pointer mt-2"
        onClick={closeModal} // ✅ no argument needed now
      >
        Close
      </Button>
    </Modal>
  );
}
