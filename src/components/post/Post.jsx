import { useState } from 'react';
import './Post.css';
import { MoreVert } from "@mui/icons-material"
import { Users } from '../../Dammy';


export default function Post({post}) {
const [like, setLike] = useState(post.like)
const [isLiked, setIsLiked] = useState(false)

const likeHandler = () =>{
    setLike((prevLike) => (isLiked ? prevLike + 1 : prevLike + 1));
    setIsLiked(!isLiked);
}
const dislikeHandler = ()=>{
    setLike((prevLike) => (isLiked ? prevLike - 1 : prevLike - 1));
    setIsLiked(!isLiked);
}


    return (
    <div>
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                        <span className="postUserName">{Users.filter((u) => u.id === post.userId)[0].username}</span>
                        <span className="postDate"> {post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="postImge" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={process.env.PUBLIC_URL + "/assets/like.png"} onClick={likeHandler} alt="" className="likeIcon" />
                        <img src={process.env.PUBLIC_URL + "/assets/dislike.png"} onClick={dislikeHandler} alt="" className="likeIcon" />
                        <span className="postLikeCounter">{like} people likes it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
