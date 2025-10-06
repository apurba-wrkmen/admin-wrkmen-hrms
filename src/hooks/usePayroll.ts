import { getWorkLogs, payrollEmployees } from "@/services/apis/api.payroll";
import { useQuery } from "@tanstack/react-query";

export function usePayrollEmployees() {
  const { data: allpayrollEmployees, isPending } = useQuery({
    queryKey: ['payrollEmployees'],
    queryFn: payrollEmployees
  })

  return { allpayrollEmployees, isPending }
}


// Custom hook must start with "use"
export function useCalculatePayrollDetails(id: string) {
  const { data: workLogs, isPending } = useQuery({
    queryKey: ["singlePayroll", id], // include id in key for caching
    queryFn: () => getWorkLogs(id),
    enabled: !!id,                   // only run if id is truthy
  });
  console.log(workLogs)

  return { workLogs, isPending };




}
