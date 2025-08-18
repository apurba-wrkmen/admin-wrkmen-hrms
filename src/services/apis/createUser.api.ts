import supabase from "../supabase"

export const createUser = async (data) => {


    const { data: newAuthEmployee, error: usercreationError } = await supabase.auth.admin.createUser({
        email: data.email,
        password: data.password,
        email_confirm: true,
    })


    if (usercreationError) throw new Error(usercreationError.message)

    const { data: employeeAlldata, error } = await supabase
        .from('employees')
        .insert([
            {
                'userId': newAuthEmployee.user?.id,
                'OfficeEmail': newAuthEmployee.user?.email,
                'firstName': data.firstName,
                'lastName': data.lastName
            },
        ])
        .select()

    if (error) {

        throw new Error("user Creation unsuceessful")

    }

    return { newAuthEmployee, employeeAlldata }
}