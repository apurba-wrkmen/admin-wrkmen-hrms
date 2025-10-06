import { getworkLogs } from "@/services/employeeStatsApi/api.employeeStats"
import { useQuery } from "@tanstack/react-query";

export function useEmployeeStats() {
    const { data, isPending } = useQuery({
        queryKey: ['employeeStats'],
        queryFn: getworkLogs,
        // enabled: !!id
    })
    return { data, isPending }

}
