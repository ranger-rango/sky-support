import Button from "../../components/btn";
import NavigationLink from "../../components/nav-link";

export default function ForgotPasswordPage()
{
    return (
        <>
            <div className="auth-container">
                <div className="login-container auth-form-container">
                    <h2>Reset Password</h2>
                    <form action="" id="login-form" className="auth-form">
                        <div>
                            <label htmlFor="email">Email Address: </label>
                            <input type="email" id="email" name="email" />
                        </div>

                        <div className="btns-container">
                            <NavigationLink label="Login" href="/auth/login" className="to-login gen-btn sec-btn" />
                            <Button id="register-btn" className="register-btn auth-btns gen-btn pri-btn" type="submit" label="Reset Passord" form="login-form" />
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}