import supabase from "../supabase";

export async function getAllEmployees() {

    const { data: allEmployees, error } = await supabase
        .from('employees')
        .select('*')
        .order('firstName')

    if (error || !allEmployees) throw new Error(error?.message || "Failed to get User")


    return allEmployees

}

export async function getAllActiveEmployees() {

    const { data: allEmployees, error } = await supabase
        .from('employees')
        .select('*')
        .eq('Status','Active')

    if (error || !allEmployees) throw new Error(error?.message || "Failed to get User")


    return allEmployees
}


