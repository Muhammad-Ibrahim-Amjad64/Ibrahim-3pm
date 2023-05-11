// we can return conditionlly
import React, { useState } from 'react';

import "./Lists.css";
import Card from "../UI/Card";

import ListofUsers from './ListofUsers';


const UsersList = (props) => {
   
 


  return (
    <div>
      <Card className="expenses">
      
        <ListofUsers items={props.data}/>
       
      </Card>
    </div>
  );
};

export default UsersList;
