import Button from "../../components/btn";
import NavigationLink from "../../components/nav-link";
import HandleLogin from "../../components/handle-login";
import { useForm } from "react-hook-form"

interface FormValues
{
    email : string
    password : string
}

export default function LoginPage()
{
    const {register, handleSubmit, formState : { errors }} = useForm<FormValues>(
        {
            mode : "all"
        }
    )
    const onValid = (data: FormValues) =>
    {
        const formData = new FormData()
        Object.entries(data).forEach(([key, value]) =>
        {
            formData.append(key, value as string)
        })
        HandleLogin(formData)
    }

    return (
        <>
            <div className="auth-container">
                <div className="login-container auth-form-container">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit(onValid)} id="login-form" className="auth-form">
                        <div>
                            <label htmlFor="email">Email Address: </label>
                            <input type="email" id="email" {...register("email", {required : "Email is required"})} />
                            {errors.email && <p className="form-errors"> { errors.email.message } </p>}
                        </div>

                        <div>
                            <label htmlFor="password">Passowrd: </label>
                            <input type="password" id="password" {...register("password", {required : "Password is required"})} />
                            {errors.password && <p className="form-errors"> { errors.password.message } </p>}
                        </div>

                        <div className="btns-container">
                            <NavigationLink label="Register" href="/auth/register" className="to-register gen-btn sec-btn" />
                            <Button id="login-btn" className="login-btn auth-btns gen-btn pri-btn" type="submit" label="Login" form="login-form" />
                        </div>

                        <div className="forgot-container">
                            <NavigationLink label="Forgot Password ?" href="/auth/forgot-password" className="forgot-link" />
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}