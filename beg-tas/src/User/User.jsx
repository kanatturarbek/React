import "./User.css";

export const User = () => {
    return (
        <div className="User">
            <a href="/123" className="link profile-link">
                <img className="userPfp" src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt="logo" />
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
