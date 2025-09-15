import { router } from "./router";
import toast from "react-hot-toast";

export default function HandleLogin(formData : FormData)
{
    let users : any[] =  JSON.parse(localStorage.getItem("users") || "[]");
    const currUserEmail = formData.get("email")!.toString();
    let currUser = users.find(user => user.email === currUserEmail)
    let isLoggedIn : boolean = false
    if (currUser)
    {
        const currUserPassword = formData.get("password")!.toString();
        if (currUserPassword === currUser.password)
        {
            const currUserType = currUser.user_type
            isLoggedIn = true
            localStorage.setItem("auth", JSON.stringify(
                {
                    email : currUserEmail,
                    user_type : currUserType
                }
            ))

            toast.success("Login Successful")
            router.navigate({to : "/"})
        }
    }

    if (!isLoggedIn)
    {
        alert("Invalid EmailAddress or Password !!!")
    }

}