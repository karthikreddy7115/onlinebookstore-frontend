import { useState } from "react";
import "./Login.css";

function Login({ setLoggedIn }) {

const [username,setUsername] = useState("");
const [password,setPassword] = useState("");

const handleLogin = () => {

if(username==="admin" && password==="1234"){
setLoggedIn(true);
}else{
alert("Invalid username or password");
}

};

return(

<div className="loginContainer">

<div className="loginBox">

<h1>📚 Online Book Store</h1>

<h2>Login</h2>

<input
type="text"
placeholder="Username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleLogin}>
Login
</button>

</div>

</div>

);

}

export default Login;