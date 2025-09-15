import { router } from "./router"
import toast from "react-hot-toast"
interface UserData
{
    email : string
    password : string
    user_type : string
}

export default function HandleRegistration(formData : FormData)
{
    let users : any[] =  JSON.parse(localStorage.getItem("users") || "[]");
    const emailParam = formData.get("email")
    const passwordParam = formData.get("password")
    const confirmPassword = formData.get("confirm_password")

    const userData : UserData | null = passwordParam?.toString() === confirmPassword?.toString() && emailParam
    ? {email : emailParam!.toString(), password : passwordParam!.toString(), user_type : formData.get("user_type")!.toString()}
    : null
    users.push(userData)
    localStorage.setItem("users", JSON.stringify(users))

    toast.success("Registration Successful")
    router.navigate({to : "/auth/login"})
        
}