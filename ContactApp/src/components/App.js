import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import React,{useState,useEffect, useReducer} from 'react'
import {uuid} from 'uuidv4';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import ContactDetail from './ContactDetail'
import api from '../api/contacts'
import EditContact from './EditContact';

function App() {
  const [contacts, setContacts]=useState([])

  // retrive contacts
  const retriveContacts=async ()=>{
    const response=await api.get("/contacts")
    return response.data;
  }

const addContactHandler=async (contact)=>{
  const response=await api.post("/contacts",{id:uuid(),...contact})
  setContacts([...contacts,response.data])
  console.log(contact);
}

const updateContactHandler = async(contact)=>{
  const resp = await api.put('/contacts/'+contact.id,contact);
  setContacts(contacts.map(con=>{return con.id==resp.data.id ? {...resp.data} : con}));
}

const deleteContactHandler=async (id)=>{
  await api.delete('/contacts/'+id)
  const response = await retriveContacts()
  // const copyContactList=response.filter(_=>_.id!==id)
  setContacts(response)
}

const searchHandler=async (data)=>{
  const response = await retriveContacts();
  const filteredContacts=response.filter(_=>_.name.indexOf(data)>=0 || _.email.indexOf(data)>=0)
  setContacts(filteredContacts)
}
useEffect(()=>{
  //for storing in local storage
  // const retriveContacts=JSON.parse(localStorage.getItem("contacts"));
  // if(retriveContacts) setContacts(retriveContacts)

  //from api
  const getAllContacts=async ()=>{
    const allContacts=await retriveContacts();
    if(allContacts) setContacts(allContacts)
  }

  getAllContacts()

},[])
useEffect(()=>{
  //to set in local storage
  // localStorage.setItem("contacts",JSON.stringify(contacts))

  



},[contacts])
  return (
  <div className="ui container" >
    <Router>
    <Header/>
    <Switch>
    <Route path="/" exact render={(props)=><ContactList {...props} contacts={contacts} searchKeyword={searchHandler} deleteContactHandler={deleteContactHandler} />} />
    <Route path="/add" render={(props)=><AddContact {...props} addContactHandler={addContactHandler} />} />
    <Route path="/edit" render={(props)=><EditContact {...props} updateContactHandler={updateContactHandler} />} />
    <Route path="/contact" component={ContactDetail} />
    </Switch>
    </Router>
  </div>
  );
}

export default App;
