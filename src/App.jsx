import { useState } from "react";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import "./App.css";

function App(){

const [loggedIn,setLoggedIn] = useState(false);
const [cart,setCart] = useState([]);
const [checkout,setCheckout] = useState(false);

if(!loggedIn){
return <Login setLoggedIn={setLoggedIn}/>
}

const addToCart = (book)=>{
setCart([...cart,book]);
}

const removeFromCart = (id)=>{
setCart(cart.filter(book=>book.id !== id));
}

if(checkout){
return <Checkout cart={cart} setCheckout={setCheckout}/>
}

return(

<div>

<nav className="navbar">

<h1 className="logo">📚 Online Book Store</h1>

<button onClick={()=>setLoggedIn(false)}>
Logout
</button>

</nav>

<div className="mainContainer">

<div className="leftSection">

<AddBook/>

<BookList addToCart={addToCart}/>

</div>

<Cart
cart={cart}
removeFromCart={removeFromCart}
setCheckout={setCheckout}
/>

</div>

</div>

)

}

export default App;