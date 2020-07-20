import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Blog from './Components/Blog';
import NavBar from './Components/NavBar';
import Draft from './Components/Draft';



function App() {

  
  const [welcomeUser,setWelcomeUser]=useState('guest')

  const [users,setUsers]=useState([
    {userName:'Ron',password:123456,blogName:'my friend Tal'},
    {userName:'Tal',password:654321,blogName:'my friend Ron'}
]);

  const [uI,setUI]=useState()

const [posts,setPosts]=useState([
  {userName:'Ron',blogName:'my friend Tal',postName:'what i like about Tal' ,details:'Tal is very nice guy!', isPublished:true},
  {userName:'Tal',blogName:'my friend Ron',postName:'what i like about Ron' , details:'Ron is very nice guy!', isPublished:true},
  {userName:'Ron',blogName:'my friend Tal',postName:'what can i say about Tal' , details:'Tal is my girlfriend\'s brother', isPublished:false},
  {userName:'Ron',blogName:'my friend Tal', postName:'what can i say about Ron' ,details:'Ron is my sister\'s boyfriend', isPublished:false},
]);

const [comments,setComments]=useState([
  {from:'stav',postName:'what i like about Tal', commDetail:'agree!!'},
  {from:'avi',postName:'what i like about Ron', commDetail:'well, let\'s agree to disagree'},
  {from:'nisim',postName:'what i like about Tal', commDetail:'he is so good friend'},
]);


const addUser=(newUser,ev)=>{
  users.find(u=>{
    if (u.userName===newUser.userName){
      alert('this user is already exist');
      ev.preventDefault();
      return;
    }
    let temp=[...users];
    temp.push(newUser);
    setUsers([...temp])
  })
}

const addComment=c=>{
  let comArr=[...comments];
  comArr.unshift(c);
  setComments([...comArr])
}

const addPost=p=>{
  debugger;
  let pArr=[...posts];
  pArr.unshift(p);
  setPosts([...pArr])
}

const updatePost=unPubP=>{
  let pI=posts.findIndex(post=>post.postName===unPubP.postName);
  posts[pI].isPublished=true;
  setPosts([...posts])
}



  return (
    <div className="App">
      <Router>
        <h1>Bloron</h1>
        <p></p>
        <NavBar welcomeUser={welcomeUser} setWelcomeUser={setWelcomeUser}/>
  <h4>welcome {welcomeUser}</h4>
<Switch>

<Route exact
            path="/"
            component={() => (
              <Home posts={posts} />
            )} />


<Route exact
            path="/login"
            component={() => (
              <LogIn users={users} setWelcomeUser={setWelcomeUser} />
            )} />


<Route exact
            path="/signUp"
            component={() => (
              <SignUp addUser={addUser} setWelcomeUser={setWelcomeUser} />
            )} />

{posts.map((post, i) => {
                  return (
                    <Route exact path={`/blog/${post.blogName}`} component={() => {
                      return (
                        <div >
                          <Blog  posts={posts} post={post} welcomeUser={welcomeUser} users={users} comments={comments} addPost={addPost} addComment={addComment} index={i} />
                        </div>
                      )
                    }} />
                  )
                })}

<Route exact
            path="/drafts"
            component={() => (
              <Draft welcomeUser={welcomeUser} posts={posts} updatePost={updatePost}  />
            )} />

</Switch>
      </Router>
      
    </div>
  );
}

export default App;
