import "./Login.css";
import { useState, useContext } from "react";
import { AuxContext } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

export function Login() {
    const { aux_token, setAuxToken, setMainToken } = useContext(AuxContext);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (username === "" || password === "") {
            alert("Invalid input!");
            setUsername("");
            setPassword("");
        } else {
            const requestOptionsAux = {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    username: `${username}`,
                    password: `${password}`,
                }),
            };
            await fetch("http://134.209.147.177/aux/login", requestOptionsAux)
                .then((response) => response.json())
                .then((data) => {
                    setAuxToken(data.access_token);
                    localStorage.setItem("aux_token", data.access_token);
                })
                .catch((error) => {
                    console.error("There was an error!", error);
                });
            const requestOptionsMain = {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    aux_token: localStorage.getItem("aux_token"),
                }),
            };
            await fetch(
                "http://134.209.147.177/main/login/",
                requestOptionsMain
            )
                .then((response) => response.json())
                .then((data) => {
                    setMainToken(data.access_token);
                    localStorage.setItem("main_token", data.access);
                })
                .catch((error) => {
                    console.error("There was an error!", error);
                })
        }
    };

    if (aux_token) {
        return <Navigate to="/home" replace />
    }

    return (
        <div className="Login">
            <div className="form-wrapper">
                <form onSubmit={handleLogin}>
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
