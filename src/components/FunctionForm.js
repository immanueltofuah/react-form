import "../App.css";
import React, { useState} from "react";

function App () {
    const [Name, setName] = useState("")

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    function handleName(e) {
        setName(e.target.value)
    }
   
    function handleEmail(e) {
        setEmail(e.target.value)
    }
    function handlePassword(e) {
        setPassword(e.target.value)
    }
    function handleSubmit(e) {
        e. preventDefault()
        setName("")
        setEmail("")
        setPassword("")
    }
    

    

return (
    <div>

        <form className="fields" onSubmit={(e) => handleSubmit (e)}>
        <h1>Function Form</h1>
            <input placeholder="Name" name="name" type="text" value={Name}
            onChange={(e) => handleName(e)} />
           <input  placeholder="Email" name="email" type="email" value={email}
           onChange={(e) => handleEmail(e)} />
           <input  placeholder="Password" name="password" type="password" value={password}
           onChange={(e) => handlePassword(e)} />
           <input className="but" type="submit" />

        </form>
    </div>
    );
}

export default App;