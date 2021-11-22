import React from 'react'

class AddContact extends React.Component{

    state={
        name:"",
        email:"",
        nameError:"",
        emailError:""
    }
    submitForm=(e)=>{
        e.preventDefault();
        if(this.state.name===""){
            this.setState({nameError:"Please enter Name."})
            return;
        }
        this.setState({nameError:""})
        if(this.state.email===""){
            this.setState({emailError:"Please enter enter."})
            return;
        }
        this.setState({emailError:""})
        console.log(this.state);
        this.props.addContactHandler(this.state);
        this.props.history.push("/")
        this.setState({name:"",email:""})
    }
    
    render(){
        return (
            <div className="ui main" >
                <br/>
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.submitForm} >
                    <div className="field" >
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
                    {this.state.nameError && <span style={{color:"red"}} > {this.state.nameError}</span>}
                    </div>
                    <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email"  value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} />
                    {this.state.emailError && <span style={{color:"red"}} > {this.state.emailError}</span>}
                    </div>
                    <button className="ui button blue" >Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;