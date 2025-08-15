
import { getAllEmployees } from "@/services/apis/employees.api";
import { useQuery } from "@tanstack/react-query";

export function useEmployees() {
    const { data: allEmployees, isPending } = useQuery({
        queryKey: ['employees'],
        queryFn: getAllEmployees,
    })
    return { allEmployees, isPending }
}