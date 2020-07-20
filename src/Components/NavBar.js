import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect,Link } from 'react-router-dom';


export default function NavBar({welcomeUser,setWelcomeUser}) {

    const logOut=()=>{
    setWelcomeUser('guest');
    }

    const blockLoggedInUsers=event=>{
        if (welcomeUser!=='guest'){
            event.preventDefault();
            alert('yoy already logged in')
            return;
        }
    }

    const blockGuests=event=>{
        if (welcomeUser==='guest'){
            event.preventDefault();
            alert('yoy have to log in')
            return;
        }
    }

    return (
        <div>
            <Link to='/'><button>Home</button></Link>
            <Link to='/signup' onClick={blockLoggedInUsers}><button>sign up</button></Link>
            <Link to='/login' onClick={blockLoggedInUsers}><button>log in</button></Link>
            <Link to='/drafts' onClick={blockGuests}><button>drafts</button></Link>
            <button onClick={logOut}>log out</button>
        </div>
    )
}
