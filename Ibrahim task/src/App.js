import React, { useState,useEffect } from 'react';
import "./App.css";
// import ExpensesChart from './components/Expenses/ExpensesChart';

import { fetchExpenses } from './http/http';

import PostsList from './components/Lists/PostsList';
import UsersList from './components/Lists/UsersList';

import { fetchPosts } from './http/http';




function App() {

  const [users, setUsers] = useState([1,2,3])
  const [isFetching, setIsFetching] = useState(true);  // Axios CRUD step 3 get 
  const [error, setError] = useState(); 
  const [posts,setPosts]= useState([1,2,3])

    useEffect(() => {
    async function getExpenses() {
      // Managing Loading
      setIsFetching(true);
      try {
        const users = await fetchExpenses();   
        setUsers(users)
      } catch (error) {
        setError('Could not fetch');
      }
      setIsFetching(false);
    }
      
    async function getPosts() {
      // Managing Loading 
      setIsFetching(true);
      try {
        const posts = await fetchPosts();
        setPosts(posts)
      } catch (error) {
        console.log(error.message)
        // handling errors
        setError('Could not fetch');
      }
      setIsFetching(false);
    }
  
      getExpenses();
      getPosts();
  
  }, []);



  // filtering 
const user1Posts = posts.filter(post => post.userId === 1);
const user2Posts = posts.filter(post => post.userId === 2);

  
  
  

  

  if (error && !isFetching) {
    return <p>failed to fetch</p> ;
  }
  return (
    <div className="App">

      <h1>USERS</h1>
      <UsersList data={users}></UsersList>
      <h1>USER 1 POSTS</h1>
      <PostsList data={user1Posts}></PostsList>
      <h1>USER 2 POSTS</h1>
      <PostsList data={user2Posts}></PostsList>
      <h1>ALL USERS POSTS </h1>
      <PostsList data={posts}></PostsList>
  
     


  
  
    </div>
  );
}

export default App;
