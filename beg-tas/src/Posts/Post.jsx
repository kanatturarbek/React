import "./Post.css";
import logo from "../logo.svg";
import { useState } from "react";

export const Post = () => {
    
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLiked] = useState(10);

    function onClickLike() {
        isLiked ? setLiked(likes - 1) : setLiked(likes + 1);
        setIsLiked(!isLiked);
    }

    return (
        <div className="Post">
            <a href="/sadsad">
                <div className="postBody">
                    <div className="userPfp">
                        <a href="/profile">
                            <img className="userPfpImg" src={logo} alt="" />
                        </a>
                    </div>
                    <div className="post">
                        <div className="postHeaderWrapper">
                            <a className="userProf" href="/profile">
                                <span className="userName">Username</span>
                                <span className="userId">@userID</span>
                            </a>
                        </div>
                        <div className="postTextWrapper">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ipsa esse provident veniam tempora qui
                            adipisci, sint cumque, cupiditate, necessitatibus
                            incidunt neque quaerat at in! Mollitia in quidem
                            assumenda repudiandae recusandae.
                        </div>
                        <div className="postImageWrapper">
                            <img
                                className="postImage"
                                src="https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </a>
            <div className="postFooterWrapper">
                <div className="postFooter postShare">
                    <svg className="svg-icon share" viewBox="0 0 24 24">
                        <path d="M5 9c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.762 0-5 2.239-5 5s2.238 5 5 5 5-2.239 5-5-2.238-5-5-5zm15 9c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.944 1.764l5.488 2.927c-.072.301-.121.611-.121.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-22c-2.209 0-4 1.791-4 4 0 .324.049.634.121.935l-5.488 2.927c.395.536.713 1.128.944 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4s-1.791-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
                    </svg>
                    Share
                </div>
                <div className="postFooter postComment">
                    <svg className="svg-icon comment" viewBox="0 0 24 24">
                        <path d="M12 3c5.514 0 10 3.592 10 8.007 0 4.917-5.144 7.961-9.91 7.961-1.937 0-3.384-.397-4.394-.644-1 .613-1.594 1.037-4.272 1.82.535-1.373.722-2.748.601-4.265-.837-1-2.025-2.4-2.025-4.872 0-4.415 4.486-8.007 10-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.417.345 2.774.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006z" />
                    </svg>
                    10
                </div>
                <div onClick={onClickLike} className="postFooter postLike">
                    {isLiked ? (
                        <svg
                            className="svg-icon filled-heart"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
                        </svg>
                    ) : (
                        <svg className="svg-icon heart" viewBox="0 0 24 24">
                            <path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z" />
                        </svg>
                    )}
                    {likes}
                </div>
            </div>
        </div>
    );
};
