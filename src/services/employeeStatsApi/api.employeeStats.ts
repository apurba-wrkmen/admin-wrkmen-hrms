import supabase from "../supabase";

const today = new Date().toISOString().split('T')[0]; // gives '2025-10-05'
// console.log(today)
export async function getworkLogs() {
// console.log(id)
    const { data: work_logs, error } = await supabase
        .from('work_logs')
        .select("user_id, checked_in, checked_out, work_duration,email")
        .eq('date', today);

    if (error) throw new Error("Problem with fetching worklogs")

    return work_logs
}
