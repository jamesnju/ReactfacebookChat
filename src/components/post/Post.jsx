import React from 'react';
import './Post.css';
import { MoreVert } from "@mui/icons-material"
export default function Post() {
  return (
    <div>
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/man2.jpg" alt="" className="postProfileImg" />
                        <span className="postUserName">Shine Wambui</span>
                        <span className="postDate"> 5 days ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hi! How is the day taking you ?</span>
                    <img src="/assets/iphone.jpg" alt="postImge" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="likeIcon" />
                        <img src="/assets/dislike.png" alt="" className="likeIcon" />
                        <span className="postLikeCounter">20 people likes it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">10 comments</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
