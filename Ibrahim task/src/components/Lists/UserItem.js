
import "./ListItem.css";

import Card from "../UI/Card";

const UserItem = (props) => {
  


  return (
      <li>
    <Card className="expense-item">

              <div style={{display:"flex",flexDirection:"column"}}>
                  
      <div className="expense-item__description">
    <div style={{width:"40px"}} className="expense-item__price">ID {props.id}</div>  
                  </div>
                  <br/>
        <h4> Name :{props.name}</h4>
        <h4>UserName:{props.username}</h4>
                  
    <h5  style={{flex:1}}>Email</h5>  
    <div  style={{flex:1}}>{ props.email}</div>  
     </div>
              
    </Card>
      </li>
  );
};

export default UserItem;
