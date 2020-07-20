import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect,Link } from 'react-router-dom';

export default function Home({posts}) {
    return (
        <div >
            {[posts.map(post=>{
                if (post.isPublished){
                    return (
                        <div style={{padding:'50px',width:'350px'}}>
                            <div style={{backgroundColor:'grey'}}>
                    <span>{post.userName}</span>
                    <span style={{paddingLeft:'40px'}}>{post.blogName}</span>
                            </div>
                            <div>
                            <h6>{post.postName}</h6>
                            </div>
                            <div>
                                {post.details}
                            </div>
                            <div>
                                <Link to={`/blog/${post.blogName}`}><button>see his blog</button></Link>
                            </div>
                            </div>
                    )
                }
            })]}
        </div>
    )
}
