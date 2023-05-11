// we can return conditionlly
import React, { useState } from 'react';

import "./Lists.css";
import Card from "../UI/Card";

import ListofPosts from './ListofPosts';


const PostList = (props) => {
   
 


  return (
    <div>
      <Card className="expenses">
      
        <ListofPosts items={props.data}/>
       
      </Card>
    </div>
  );
};

export default PostList;
