import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

export default function Draft({posts,welcomeUser,updatePost}) {





    return (
        <div>
              {[posts.map(p => {
                if (p.isPublished === false && p.userName === welcomeUser) {
                    return (
                        <div style={{ padding: '50px', width: '350px' }}>
                            <div style={{ backgroundColor: 'grey' }}>
                                <span>{p.userName}</span>
                                <span style={{ paddingLeft: '40px' }}>{p.blogName}</span>
                            </div>
                            <div>
                                <h6>{p.postName}</h6>
                            </div>
                            <div>
                                {p.details}
                            </div>
                            <div>
                                <button onClick={() => updatePost(p)}>Publish</button>
                            </div >
                        </div>
                    )
                }
            })]}
            
        </div>
    )
}
