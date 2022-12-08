import "./Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Register() {
    const [email, setEmail] = useState();
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                first_name: firstname,
                last_name: lastname,
                avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png",
                gender: "Male",
                bio: "",
                date_of_birth: "2022-12-08",
                followers: [],
                following: [],
                blockers: [],
                blocking: [],
                favorite_posts_ids: [],
                username: username,
                password: password,
            }),
        };
        await fetch("http://134.209.147.177/aux/user_profile/", requestOptions)
            .then((response) => response.json())
            .catch((error) => {
                console.error("There was an error!", error);
            })
            .finally(() => {navigate("/login")});
    };

    return (
        <div className="Register">
            <div className="form-wrapper">
                <form onSubmit={handleRegister}>
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
