import supabase from "../supabase";

export async function getAllEmployees() {

    const { data: allEmployees, error } = await supabase
        .from('employees')
        .select('*')
        .order('firstName')

    if (error || !allEmployees) throw new Error(error?.message || "Failed to get User")


    return allEmployees
}

export async function getEmployee() {

}