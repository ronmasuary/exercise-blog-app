import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

export default function Blog({ posts, post,addPost, welcomeUser, addComment, comments ,users}) {


    const [writeCom, setWriteCom] = useState(false)



    const [comment, setComment] = useState({
        from: '',
        postName: '',
        commDetail: ''
    });

    const handleComBtn = pst => {
        if (!writeCom) {
            setWriteCom(true)
            setComment({
                from: welcomeUser,
                postName: pst.postName,
                commDetail: ''
            })
            return;
        }
        setWriteCom(false)
    }

    const handlewriting = e => {
        let nc = e.target.value;
        setComment({
            from: comment.from,
            postName: comment.postName,
            commDetail: nc
        })
    }

    const handleAddComment = event => {
        if (comment.commDetail.length < 5) {
            alert(`Dear ${welcomeUser} \n your comment is too short`);
            event.preventDefault();
            return;
        }
        addComment(comment);
        alert(`Dear ${welcomeUser} \n your comment posted succussfuly`);
        setWriteCom(false);
    }

    const newComm = () => {
        if (writeCom) {
            return (
                <div>
                    <form>
                        <label>
                            write your comment...
                            <textarea type='text' onChange={handlewriting}></textarea>
                        </label>
                        <br />
                        <div>
                            <button onClick={handleAddComment}>post your comment</button>
                        </div>
                    </form>
                </div>
            );
        }
    }
//--------------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------



    const [addPostWin,setAddPostWin]=useState(false);

    const [newPost, setNewPost] = useState({
        userName: welcomeUser,
        blogName: '',
        postName: '',
        details: '',
        isPublished: false
    })

    const addNewPBtn=()=>{
        debugger;
        if (welcomeUser==='guest'){
            alert ('you have to log in to add post');
            return;
        }
        if (!addPostWin){
            setAddPostWin(true);
        
            let bN=users.find(u=>u.userName===newPost.userName)
            setNewPost({
                userName:newPost.userName,
                blogName: bN.blogName,
                postName: newPost.postName,
                details: newPost.details,
                isPublished: newPost.isPublished
            }) ;
            addNewPost()
        }
    }

    const handleNewPostName = pn => {
        let n = pn.target.value;
        setNewPost({
            userName: newPost.userName,
            blogName: newPost.blogName,
            postName: n,
            details: newPost.details,
            isPublished: newPost.isPublished
        })
    }
    const handleNewPostDet = pd => {
        let d = pd.target.value;
        setNewPost({
            userName: newPost.userName,
            blogName: newPost.blogName,
            postName: newPost.postName,
            details: d,
            isPublished: newPost.isPublished
        })
    }

    const handleNewPostPublished=pp=>{
        debugger;
let p=pp.target.checked;
setNewPost({
    userName:newPost.userName,
    blogName: newPost.blogName,
    postName: newPost.postName,
    details: newPost.details,
    isPublished: p
})
    }

    const handleAddPostBtn=()=>{
        if (newPost.details.length<5||newPost.postName.length<5){
            alert ('Error');
            return;
        }
addPost(newPost);
setAddPostWin(false);
    }


    const addNewPost = () => {
if (addPostWin)
        return (
            <div>
                <form>
                    <label>
                        post name:
                    <input type='text' onChange={handleNewPostName} value={newPost.postName} />
                    </label>
                    <br />
                    <label>
                        details:
                    <textarea type='text' onChange={handleNewPostDet} value={newPost.details} />
                    </label>
                    <br />

                    do you want to publish?
<label>
yes
                        <input type='checkBox' name='publish' onChange={handleNewPostPublished} value={newPost.isPublished} check={true} />
                    </label>
<br/>
<button onClick={handleAddPostBtn} >add</button>
                </form>
            </div>
        )
    }


    return (
        <div>
            <div>
                <button onClick={addNewPBtn} className='btn-primary'>add new post</button>
                {addNewPost()}
            </div>
            {[posts.map(p => {
                if (p.isPublished === true && p.userName === post.userName) {
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
                                <button onClick={() => handleComBtn(p)}>comment</button>
                            </div >
                            {[comments.map(c => {
                                if (c.postName === post.postName) {
                                    return (
                                        <div style={{ border: '1px blue solid' }}>
                                            <div>
                                                from:{c.from}
                                            </div>
                                            <div>
                                                {c.commDetail}
                                            </div>
                                        </div>
                                    )
                                }
                            })]}
                            {newComm()}
                        </div>
                    )
                }
            })]}
        </div>
    )
}
