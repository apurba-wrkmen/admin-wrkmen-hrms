export function accessLevelCheck(role: string) {
    let access = false
    const roles = ["super admin", "admin", "hr"]
    access = roles.includes(role ?? "")
    return access
}