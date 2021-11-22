import React, {useRef} from 'react'
import ContactCard from './ContactCard'
import { Link } from 'react-router-dom'

const ContactList = (props) => {
    // console.log(props);

    //instead of use ref we can get value using event.target.value also
    const inputE1=useRef("")
    const deleteContactHandler = (id) => {
        props.deleteContactHandler(id)
    }


    const getSearchTerm=()=>{
        // console.log(inputE1.current.value);
        props.searchKeyword(inputE1.current.value)
    }

    const renderContactList = props.contacts.map(a => <ContactCard contact={a} clickHandler={deleteContactHandler} updateHandler={props.updateHandler} key={a.id} />)
    return (
        <React.Fragment>
            <h2>Contact List
                <Link to="/add" >
                    {/* <button className="ui button blue" >Add Contact</button>  */}
                    <button className="ui basic blue button" style={{ float: "right" }}><i className="icon user"></i>Add Contact</button>
                </Link>
            </h2>
            <div className="ui search" >
                <div className="ui left icon input">
                    <input ref={inputE1} type="text" placeholder="Search Contacts..." value={props.term} onChange={getSearchTerm} />
                    <i className="users icon"></i>
                </div>
            </div>
            <div className="ui celled list" >{renderContactList}</div>
        </React.Fragment>
    );
}

export default ContactList;