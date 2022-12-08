import "./Nav.css";
import logo from "../logo.png";
import logo1 from "../logo512.png";
import { AuxContext } from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const Nav = (props) => {
    const { setAuxToken, setMainToken } = useContext(AuxContext);
    const navigate = useNavigate();

    if (props.width < 900) {
        props.setNavWidth("75px");
    } else {
        props.setNavWidth("380px");
    }

    const handleLogout = () => {
        localStorage.removeItem("aux_token");
        localStorage.removeItem("main_token");
        setAuxToken(null);
        setMainToken(null)
    };

    return (
        <div className="Nav">
            <div className="NavLogo">
                <a href="/home" className="NavLogoImg">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <div className="NavWrapper">
                <div className="navBar">
                    <div className="a" onClick={() => {navigate("/home")}}>
                        <div className="navBarLinkWrapper">
                            <svg className="svg-icon" viewBox="0 0 20 20">
                                <path
                                    fill="none"
                                    d="M15.971,7.708l-4.763-4.712c-0.644-0.644-1.769-0.642-2.41-0.002L3.99,7.755C3.98,7.764,3.972,7.773,3.962,7.783C3.511,8.179,3.253,8.74,3.253,9.338v6.07c0,1.146,0.932,2.078,2.078,2.078h9.338c1.146,0,2.078-0.932,2.078-2.078v-6.07c0-0.529-0.205-1.037-0.57-1.421C16.129,7.83,16.058,7.758,15.971,7.708z M15.68,15.408c0,0.559-0.453,1.012-1.011,1.012h-4.318c0.04-0.076,0.096-0.143,0.096-0.232v-3.311c0-0.295-0.239-0.533-0.533-0.533c-0.295,0-0.534,0.238-0.534,0.533v3.311c0,0.09,0.057,0.156,0.096,0.232H5.331c-0.557,0-1.01-0.453-1.01-1.012v-6.07c0-0.305,0.141-0.591,0.386-0.787c0.039-0.03,0.073-0.066,0.1-0.104L9.55,3.75c0.242-0.239,0.665-0.24,0.906,0.002l4.786,4.735c0.024,0.033,0.053,0.063,0.084,0.09c0.228,0.196,0.354,0.466,0.354,0.76V15.408z"
                                ></path>
                            </svg>
                            Home
                        </div>
                    </div>
                    <div className="a" onClick={() => {navigate("/bookmark")}}>
                        <div className="navBarLinkWrapper">
                            <svg className="svg-icon" viewBox="0 0 20 20">
                                <path d="M14.467,1.771H5.533c-0.258,0-0.47,0.211-0.47,0.47v15.516c0,0.414,0.504,0.634,0.802,0.331L10,13.955l4.136,4.133c0.241,0.241,0.802,0.169,0.802-0.331V2.241C14.938,1.982,14.726,1.771,14.467,1.771 M13.997,16.621l-3.665-3.662c-0.186-0.186-0.479-0.186-0.664,0l-3.666,3.662V2.711h7.994V16.621z"></path>
                            </svg>
                            Bookmarks
                        </div>
                    </div>
                    <div className="a" href="/" onClick={handleLogout}>
                        <div className="navBarLinkWrapper">
                            <svg className="svg-icon" viewBox="0 0 20 20">
                                <path
                                    fill="none"
                                    d="M10,10.9c2.373,0,4.303-1.932,4.303-4.306c0-2.372-1.93-4.302-4.303-4.302S5.696,4.223,5.696,6.594C5.696,8.969,7.627,10.9,10,10.9z M10,3.331c1.801,0,3.266,1.463,3.266,3.263c0,1.802-1.465,3.267-3.266,3.267c-1.8,0-3.265-1.465-3.265-3.267C6.735,4.794,8.2,3.331,10,3.331z"
                                ></path>
                                <path
                                    fill="none"
                                    d="M10,12.503c-4.418,0-7.878,2.058-7.878,4.685c0,0.288,0.231,0.52,0.52,0.52c0.287,0,0.519-0.231,0.519-0.52c0-1.976,3.132-3.646,6.84-3.646c3.707,0,6.838,1.671,6.838,3.646c0,0.288,0.234,0.52,0.521,0.52s0.52-0.231,0.52-0.52C17.879,14.561,14.418,12.503,10,12.503z"
                                ></path>
                            </svg>
                            Log Out
                        </div>
                    </div>
                    <button className="button postButton">
                        <svg className="svg-icon" viewBox="0 0 20 20">
                            <path
                                fill="none"
                                d="M19.404,6.65l-5.998-5.996c-0.292-0.292-0.765-0.292-1.056,0l-2.22,2.22l-8.311,8.313l-0.003,0.001v0.003l-0.161,0.161c-0.114,0.112-0.187,0.258-0.21,0.417l-1.059,7.051c-0.035,0.233,0.044,0.47,0.21,0.639c0.143,0.14,0.333,0.219,0.528,0.219c0.038,0,0.073-0.003,0.111-0.009l7.054-1.055c0.158-0.025,0.306-0.098,0.417-0.211l8.478-8.476l2.22-2.22C19.695,7.414,19.695,6.941,19.404,6.65z M8.341,16.656l-0.989-0.99l7.258-7.258l0.989,0.99L8.341,16.656z M2.332,15.919l0.411-2.748l4.143,4.143l-2.748,0.41L2.332,15.919z M13.554,7.351L6.296,14.61l-0.849-0.848l7.259-7.258l0.423,0.424L13.554,7.351zM10.658,4.457l0.992,0.99l-7.259,7.258L3.4,11.715L10.658,4.457z M16.656,8.342l-1.517-1.517V6.823h-0.003l-0.951-0.951l-2.471-2.471l1.164-1.164l4.942,4.94L16.656,8.342z"
                            ></path>
                        </svg>
                        Post
                    </button>
                </div>
                <div className="profileBar">
                    <button className="button profileButton">
                        <img className="userPfp" src={logo1} alt="logo" />
                        <span className="userData">
                            <span className="userName">Username</span>
                            <span className="userId">@userID</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};
