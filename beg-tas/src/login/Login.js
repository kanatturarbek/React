import "./Login.css"

export default function Login() {
    return (
        <div className="Login">
            <div className="form-wrapper">
                <form>
                    <h1>Login</h1>
                    <input type="email" name="email" placeholder="Enter your email" />
                    <input type="password" name="password" placeholder="Enter your password" />
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
}