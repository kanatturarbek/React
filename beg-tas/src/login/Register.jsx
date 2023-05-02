import "./Register.css";
import { useState } from "react";
import { Navigate, redirect } from "react-router-dom";

export function Register() {
    const [email, setEmail] = useState();
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return (
        <div className="Register">
            <div className="form-wrapper">
                <form action="/login">
                    <h1>Register</h1>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <input
                        type="text"
                        name="firstname"
                        placeholder="Enter your firstname"
                        onChange={(e) => {
                            setFirstname(e.target.value);
                        }}
                    />
                    <input
                        type="text"
                        name="lastname"
                        placeholder="Enter your lastname"
                        onChange={(e) => {
                            setLastname(e.target.value);
                        }}
                    />
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}
