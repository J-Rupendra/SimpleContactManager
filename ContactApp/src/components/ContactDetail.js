import React from 'react';
import user from '../images/user.png'
import {Link} from "react-router-dom"

const ContactDetails = (props) =>{
    // console.log(props.location.state.contact);
    const {name,email,id}=props.location.state.contact
    return(
        <div className="main" >
            <br/>
            <br/>
            <div className="ui card centered" >
                <div className="image" >
                    <img src={user} alt="user" />
                </div>
                <div className="content" >
                    <div className="header" >{name}</div>
                    <div className="description" >{email}</div>
                </div>
            </div>
            <div className="center-div" >
                {/* <button className="ui button blue center" onClick={()=>props.history.push("/")} ></button> */}
                <button class="ui left labeled icon button" onClick={()=>props.history.push("/")}><i class="left arrow icon"></i>Contact List</button>
            </div>
        </div>
    )
}

export default ContactDetails;