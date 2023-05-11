

import React from "react"
import UserItem from "./UserItem"
import "./StylesofList.css"

const ListofUsers = props =>{
    
 

  const ListOfPosts = props.items.map((item) => 
  (
  
    
   <UserItem
          id={item.id}
          name={item.name}
          username={item.username}
          email={item.email}
          key={item.id}
   />
 )
)


    return(
     
        <ul className="expenses-list">
      {ListOfPosts}
    </ul>
    
    )
}

export default ListofUsers