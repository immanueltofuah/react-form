import React, { useState } from "react";
import '../App.css'
class App extends React.Component {

    constructor(){
        super();
        this.state = {name:"", email:"", password:""};  
    }

handleName(e) {
    this.setState({name: e.target.value})
}

handleEmail(e) {
    this.setState({email: e.target.value})
}

handlePassword(e) {
    this.setState({password: e.target.value})
}

handleSubmit(e) {
    e.preventDefault()
    this.setState({name: "", email: "", password: ""})
}

render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
   <h1>Class Form</h1>
          <input placeholder="Name" name="name" type="text" value={this.state.name} onChange={(e) => this.handleName(e)} />
          <input placeholder="Email" name="email" type="email" value={this.state.email} onChange={(e) => this.handleEmail(e)} />
          <input placeholder="Password" name="password" type="password" value={this.state.password} onChange={(e) => this.handlePassword(e)} />
          <input className="but" type="submit" />
        </form>
      </div>
    );
  }
}
export default App;