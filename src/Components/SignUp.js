import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';


export default function SignUp({addUser}) {

    const [user,setUser]=useState({
        userName:'',
        password:'',
        blogName:''
    });
    
    
    const handleName=e=>{
        let n=e.target.value;
        setUser({
            userName:n,
        password:user.password,
        blogName:user.blogName
        })
    }
    
    const handlePass=e=>{
        let p=Number(e.target.value);
        setUser({
            userName:user.userName,
        password:p,
        blogName:user.blogName
        })
    }
    
    const handleBlogName=e=>{
        let b=e.target.value;
        setUser({
            userName:user.userName,
        password:user.password,
        blogName:b
        })
    }
    
    
    const checkUser=event=>{
        if (user.userName.length<2){
            event.preventDefault();
            alert('user name must contain at least 2 char ');
            return;
        }
        if (user.password.length<4){
            event.preventDefault();
            alert('password must contain at least 4 char ');
            return;
        }
        if (user.blogName===''){
            event.preventDefault();
            alert('blog name must contain at least 1 char ');
            return;
        }
        
        addUser(user,event);
    }

    return (
        <div style={{padding:'50px'}}>

            <h3>sign up</h3>
            <p></p>
            <form>
            <label>
                insert your name:
                <input value={user.userName} type='text' onChange={handleName}/>
            </label>
<p></p>
            <label>
                insert your password:
                <input value={user.password} type='password' onChange={handlePass}/>
            </label>
            <p></p>
            <label>
                choose name for your blog:
                <input value={user.blogName} type='text' onChange={handleBlogName}/>
            </label>
            <p></p>
            <Link to="/login" onClick={checkUser}><button>sign up</button></Link>




            </form>
            
            
        </div>
    )
}
