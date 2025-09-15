import Button from "../../components/btn";
import NavigationLink from "../../components/nav-link";
import HandleLogin from "../../components/handle-login";
export default function LoginPage()
{

    return (
        <>
            <div className="auth-container">
                <div className="login-container auth-form-container">
                    <h2>Login</h2>
                    <form action={HandleLogin} id="login-form" className="auth-form">
                        <div>
                            <label htmlFor="email">Email Address: </label>
                            <input type="email" id="email" name="email" />
                        </div>

                        <div>
                            <label htmlFor="password">Passowrd: </label>
                            <input type="password" name="password" id="password" />
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