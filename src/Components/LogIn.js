import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect,Link } from 'react-router-dom';

export default function ({users, setWelcomeUser}) {

let name='';
let password=''


const handleChangeName=e=>{
    name=e.target.value;
}

const handleChangePass=p=>{
    
    password=Number(p.target.value);
}

const check=(event)=>{
    let uI=users.findIndex(u=>u.userName===name);
        
    debugger
    if (uI===-1){
        alert('Error! \n check your name!')
        event.preventDefault();
        return;
    }
    if (uI!==-1){
        if (users[uI].password!==password){
            alert('Error! \n check your password!')
            event.preventDefault();
            return
        }
        
    }
    setWelcomeUser(name)
    alert(`welcome back ${name}`)
}

    return (
            <div style={{padding:'50px'}}>

<h3>log in</h3>
<p></p>
<form>
<label>
    insert your name:
    <input  type='text' onChange={handleChangeName}/>
</label>
<p></p>
<label>
    insert your password:
    <input  type='password' onChange={handleChangePass}/>
</label>
<p></p>

<Link to="/" onClick={check}><button>log in</button></Link>




</form>


        </div>
    )
}
