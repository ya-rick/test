import React, {useEffect, useState} from 'react';
import {IPost, IUser} from "./types/types";
import axios from "axios";
import PostList from "./components/PostList";
import Header from "./components/Header";
import './styles/index.scss';
import Profile from "./components/Profile";
const Routes = require('react-router-dom').Routes;
const Route = require('react-router-dom').Route;

function App() {

  const [posts, setPosts] = useState<IPost[]>([]);
  const [user, setUser] = useState<IUser>({
    "address": {street: "", suite: "", city:""},
    company: {name: ""},
    email: "",
    name: "",
    phone: "",
    username: "",
    website: ""
  })

  useEffect(()=>{
    fetchPosts();
    fetchUser();
  }, [])

  async function fetchPosts() {
    try{
      await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts').then((data)=>{
        setPosts(data.data)
      })
    } catch (e) {
      alert(e)
    }
  }

  async function fetchUser(){
    try{
      await axios.get('https://jsonplaceholder.typicode.com/users/1').then((data)=>{
        setUser(data.data)
        console.log(user)
      })
    } catch (e){
      alert(e)
    }
  }

  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Header/>}>
          <Route index element={<PostList posts={posts}/>}/>
          <Route path={'/profile'} element={<Profile user={user}/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
