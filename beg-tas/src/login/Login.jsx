import "./Login.css"

export function Login() {
    return (
        <div className="Login">
            <div className="form-wrapper">
                <form action="/home">
                    <h1>Login</h1>
                    <input type="email" name="email" placeholder="Enter your email" />
                    <input type="password" name="password" placeholder="Enter your password" />
                    <button type="submit">Sign In</button>
                    <a href="/register">Don't have an account?</a>
                </form>
            </div>
        </div>
    );
}