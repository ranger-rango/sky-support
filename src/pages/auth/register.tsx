import Button from "../../components/btn";
import NavigationLink from "../../components/nav-link";
import HandleRegistration from "../../components/handle-resigtration";
import { useForm } from "react-hook-form"

interface FormValues
{
    email : string
    password : string
    confirm_password : string
    user_type : string
}

export default function RegisterPage()
{
    const { register, handleSubmit, formState : { errors } } = useForm<FormValues>(
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
        HandleRegistration(formData)
    }
    return (
        <>
            <div className="auth-container">
                <div className="login-container auth-form-container">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit(onValid)} id="register-form" className="auth-form">
                        <div>
                            <label htmlFor="email">Email Address: </label>
                            <input type="email" id="email" {...register("email", {required : "Email is required !!!"})} />
                            { errors.email && <p className="form-errors">{ errors.email.message }</p> }
                        </div>

                        <div>
                            <label htmlFor="password">Passowrd: </label>
                            <input type="password" id="password" {...register("password", {required : "Password is required !!!"})} />
                            { errors.password && <p className="form-errors">{ errors.password.message }</p> }
                        </div>

                        <div>
                            <label htmlFor="confirm_password">Confirm Passowrd: </label>
                            <input type="confirm_password" id="confirm_password" {...register("confirm_password", {required : "Confirm Password is required !!!"})} />
                            { errors.confirm_password && <p className="form-errors">{ errors.confirm_password.message }</p> }
                        </div>

                       <div>
                            <label htmlFor="user_type">User Type:</label>
                            <select id="user_type" {...register("user_type", {required : "User Type is required !!!"})}>
                                <option value="">User Type</option>
                                <option value="vendor">Vendor</option>
                                <option value="client">Client</option>
                            </select>
                            { errors.user_type && <p className="form-errors">{ errors.user_type.message }</p> }
                        </div>

                        <div className="btns-container">
                            <NavigationLink label="Login" href="/auth/login" className="to-login gen-btn sec-btn" />
                            <Button id="register-btn" className="register-btn auth-btns gen-btn pri-btn" type="submit" label="Register" form="register-form" />
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}