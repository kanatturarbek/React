import logo from "../logo.png";
import "./Logo.css"

export function Logo() {
    return (
        <div className="Logo">
            <img src={logo} alt="BegTas logo"/>
        </div>
    );
}