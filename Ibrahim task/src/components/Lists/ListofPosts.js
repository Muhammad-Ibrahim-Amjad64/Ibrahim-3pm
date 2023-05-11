

import React from "react"
import PostItem from "./PostItem"
import "./StylesofList.css"

const ListofPosts = props =>{
    
 

  const ListOfPosts = props.items.map((item) => 
  (
  
   <PostItem
          userId={item.userId}
          id={item.id}
          title={item.title}
          body={item.body}
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

export default ListofPosts