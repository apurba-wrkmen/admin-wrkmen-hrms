import supabase from "../supabase";

// -------------------- TYPES --------------------
interface Employee {
  userId: string;
  firstName: string;
  lastName: string;
  payroll?: string;
}

interface WorkLog {
  id: string;
  user_id: string;
  checked_in: string;
  checked_out: string | null;
  work_duration: number;
  created_at: string;
}

// -------------------- FETCH ACTIVE PAYROLL EMPLOYEES --------------------
export const payrollEmployees = async (): Promise<Employee[]> => {
  const { data, error } = await supabase
    .from("employees")
    .select("firstName,lastName,userId,payroll")
    .eq("payroll", "Active");

  if (error) throw new Error(`Failed to fetch employees: ${error.message}`);

  // Default to an empty array to avoid undefined issues
  return data ?? [];
};

// -------------------- FETCH WORK LOGS --------------------
export const getWorkLogs = async (empId: string): Promise<WorkLog[]> => {
  console.log("Fetching work logs for:", empId);

  const { data, error } = await supabase
    .from("work_logs")
    .select("*")
    .eq("user_id", empId);

  if (error) throw new Error(`Failed to load work logs: ${error.message}`);

  console.log("Work logs:", data);
  return data ?? [];
};
