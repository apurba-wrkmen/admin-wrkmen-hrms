
import { allpayrollDetails } from "@/services/payrollApi/api.payrollDetails"
import { useQuery } from "@tanstack/react-query"

export function useGetAllPayroll(){
    const { data: payrollDetails, isPending } = useQuery({
        queryKey: ['payrollEmployees'],
        queryFn: allpayrollDetails
    })

    return { payrollDetails, isPending }
}