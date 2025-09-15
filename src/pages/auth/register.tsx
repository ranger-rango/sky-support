import Button from "../../components/btn";
import NavigationLink from "../../components/nav-link";
import HandleRegistration from "../../components/handle-resigtration";

export default function RegisterPage()
{
    return (
        <>
            <div className="auth-container">
                <div className="login-container auth-form-container">
                    <h2>Register</h2>
                    <form action={HandleRegistration} id="register-form" className="auth-form">
                        <div>
                            <label htmlFor="email">Email Address: </label>
                            <input type="email" id="email" name="email" />
                        </div>

                        <div>
                            <label htmlFor="password">Passowrd: </label>
                            <input type="password" name="password" id="password" />
                        </div>

                        <div>
                            <label htmlFor="confirm_password">Confirm Passowrd: </label>
                            <input type="confirm_password" name="confirm_password" id="confirm_password" />
                        </div>

                       <div>
                            <label htmlFor="user_type">User Type:</label>
                            <select name="user_type" id="user_type">
                                <option value="">User Type</option>
                                <option value="vendor">Vendor</option>
                                <option value="client">Client</option>
                            </select>
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