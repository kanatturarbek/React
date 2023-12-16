import logo from "../logo.svg"
import "./Info.css"

export default function Info() {
    return (
        <div className="Info">
            
            <div className="Info-image">
                <img src={logo} alt="logo" />
            </div>
            <div className="Info-stat">
                <div className="Info-stat-top">
                    <div className="Info-username">
                        <h1>Username</h1>
                    </div>
                    <div className="Info-edit">
                        <a href="">Edit profile</a>
                    </div>
                </div>
                <div className="Info-stat-bottom">
                    <div className="Info-posts">
                        <span className="posts">0</span>
                        <p>Posts</p>
                    </div>
                    <div className="Info-followers">
                        <span className="followers">0</span>
                        <p>Followers</p>
                    </div>
                    <div className="Info-following">
                        <span className="following">0</span>
                        <p>Following</p>
                    </div>
                </div>
            </div>
        </div>
    );
}