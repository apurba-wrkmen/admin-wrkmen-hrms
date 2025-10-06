import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllPayroll } from "@/hooks/usePayrollDetails";
import { advButton } from "@/components/store/modalStore";
import { Button } from "@/components/ui/button";
import { useState, type ReactElement } from "react";

// 👇 Define a type for payroll items (should match your API)
interface PayrollItem {
  id: string;
  employee_name: string;
  paid_days: number;
  MonthYear: string;
  net_pay: number;
  paymentDate?: string;
  payment_status: string;
}

export default function PayrollTable(): ReactElement {
  const [curData, setCurData] = useState(0);
  const { payrollDetails, isPending } = useGetAllPayroll();

  // ✅ Pull from Zustand (but only what you need)
  const { filteredList } = advButton();

  // ✅ Filter & Paginate
  // const totalDFilter = payrollDetails?.length ?? 0;

  // Optional: apply filter from Zustand store
  const filtered = filteredList
    ? payrollDetails?.filter(
        (p: PayrollItem) =>
          p.payment_status.toLowerCase() === filteredList.toLowerCase()
      ) ?? []
    : payrollDetails ?? [];

  const start = curData;
  const end = start + 10;
  const visibleData: PayrollItem[] = filtered.slice(start, end);

  if (isPending) return <div>Loading payrolls...</div>;

  return (
    <div className="space-y-4">
      <Table>
        <TableCaption>A list of your recent payrolls</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">PAYROLL ID</TableHead>
            <TableHead>EMPLOYEE NAME</TableHead>
            <TableHead>PAID DAYS</TableHead>
            <TableHead>MONTH/YEAR</TableHead>
            <TableHead>NET PAY</TableHead>
            <TableHead>PAYMENT DATE</TableHead>
            <TableHead className="text-right">PAYMENT STATUS</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {visibleData.length > 0 ? (
            visibleData.map((el) => (
              <TableRow key={el.id}>
                <TableCell className="font-medium">{el.id}</TableCell>
                <TableCell>{el.employee_name || "-"}</TableCell>
                <TableCell>{el.paid_days}</TableCell>
                <TableCell>{el.MonthYear}</TableCell>
                <TableCell>{Math.round(el.net_pay)}.00 ₹</TableCell>
                <TableCell>{el.paymentDate || "Pending"}</TableCell>
                <TableCell className="text-right capitalize">
                  {el.payment_status}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-4">
                No payroll records found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* ✅ Pagination Section (moved outside Table for valid markup) */}
      <div className="flex justify-between items-center px-2">
        <h1>
          Total Results: <span>{filtered.length}</span>
        </h1>
        <div className="flex gap-2">
          <Button
            disabled={curData <= 0}
            onClick={() => setCurData((prev) => Math.max(prev - 10, 0))}
          >
            Prev
          </Button>
          <Button
            disabled={curData + 10 >= filtered.length}
            onClick={() => setCurData((prev) => prev + 10)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
