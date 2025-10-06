import supabase from "../supabase";

export const allpayrollDetails = async () => {

    const { data: payroll, error } = await supabase
        .from('payroll')
        .select('*')

    if (error) throw new Error("Error to get Payroll Details")
    return payroll
}
