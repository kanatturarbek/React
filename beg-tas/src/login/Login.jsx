import "./Login.css";
import { useState, useContext } from "react";
export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    
    <div className="Login">
      <div className="form-wrapper">
        <form action="/home">
          <h1>Login</h1>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Sign In</button>
          <a href="/register">Don't have an account?</a>
        </form>
      </div>
    </div>
  );
}
