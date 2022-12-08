import "./User.css";
import logo1 from "../logo512.png";

export const User = () => {
    return (
        <div className="User">
            <a href="/123" className="link profile-link">
                <img className="userPfp" src={logo1} alt="logo" />
                <span className="userData">
                    <span className="userName">Username</span>
                    <span className="userId">@userID</span>
                </span>
                <a href="/21" className="userFollow">
                    <button className="userFollowButton">
                        <span>Follow</span>
                    </button>
                </a>
            </a>
        </div>
    );
};
