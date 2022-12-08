import { Logo } from "./Logo";
import { Register } from "./Register";

export const RegisterPage = () => {
    return (
        <div style={{ display: "flex" }} className="RegisterPage">
            <Logo />
            <Register />
        </div>
    );
};
