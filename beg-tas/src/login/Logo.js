import logo from "../logo.png";
import "./Logo.css"

export default function Logo() {
    return (
        <div className="Logo">
            <img src={logo} alt="BegTas logo"/>
        </div>
    );
}