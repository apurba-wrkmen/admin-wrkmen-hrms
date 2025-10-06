import supabase from "../supabase";


export const userOtherUpdateDetailsAPI = async () => {
    const { data: res, error } = await supabase
        .from('employees')
        .update({ userId: 'otherValue' })
        .eq('some_column', 'someValue')
        .select()

    if (error) throw new Error(error.message)
    return res
}

