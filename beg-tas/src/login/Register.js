import "./Register.css"

export default function Register() {
    return (
        <div className="Register">
            <div className="form-wrapper">
                <form>
                    <h1>Register</h1>
                    <input type="email" name="email" placeholder="Enter your email" />
                    <input type="text" name="name" placeholder="Enter your name" />
                    <input type="text" name="username" placeholder="Enter your username" />
                    <input type="password" name="password" placeholder="Enter your password" />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}