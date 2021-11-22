import React from 'react';
import user from '../images/user.png'
import {Link} from "react-router-dom"

const ContactCard = (props) =>{
    const {id,name,email}=props.contact
      // this.props.deleteContactHandler(id);

      const editContact=()=>{
        props.updateContactHandler()
      }
    
    return(
        <div className="item" style={{padding:"8px"}} >
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link to={{pathname:`/contact`,state:{contact:props.contact}}} >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", float:"right",cursor:"pointer" }}
        onClick={() =>   props.clickHandler(id)}
      ></i>
      
      <Link to={{pathname:`/edit`,state:{contact:props.contact}}} >
      <i
        className="edit alternate outline icon"
        style={{  color:"blue",marginTop: "7px", float:"right",marginRight:"8px",cursor:"pointer" }}
        // onClick={editContact}
      ></i>
      </Link>
    </div>
    )
}

export default ContactCard;