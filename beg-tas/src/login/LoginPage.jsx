import { Login } from "./Login";
import { Logo } from "./Logo";

export const LoginPage = () => {
    return (
        <div style={{ display: "flex" }} className="LoginPage">
            <Logo />
            <Login />
        </div>
    );
};
