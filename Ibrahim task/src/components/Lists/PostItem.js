
import "./ListItem.css";

import Card from "../UI/Card";

const PostItem = (props) => {
  


  return (
      <li>
    <Card className="expense-item">

              <div style={{display:"flex",flexDirection:"column"}}>
                  
      <div className="expense-item__description">
        <h4> TITLE :{props.title}</h4>
    <div className="expense-item__price">ID {props.id}</div>  
                  </div>
                  
    <h5  style={{flex:1}}>Body</h5>  
    <div  style={{flex:1}}>{ props.body}</div>  
     </div>
              
    </Card>
      </li>
  );
};

export default PostItem;
