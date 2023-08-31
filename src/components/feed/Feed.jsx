import React from 'react'
import './Feed.css';
import Share from '../share/Share';
import Post from '../post/Post';
import { Posts } from '../../Dammy';
export default function Feed() {
  return (
    <div className="feed" >
        <div className="feedwrapper">
            <Share/>
            {Posts.map((p) => (
              <Post key={p.id} post={p}/>
            ))}
        </div>
    </div>
  );
}
