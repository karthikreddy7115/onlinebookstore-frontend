import { useState } from "react";

function Checkout({cart,setCheckout}){

const [address,setAddress] = useState("");
const [payment,setPayment] = useState("");

const placeOrder = ()=>{

if(!address || !payment){
alert("Please enter address and payment method");
return;
}

alert("Order Placed Successfully!");

setCheckout(false);

}

return(

<div style={{padding:"30px"}}>

<h2>Checkout</h2>

<h3>Delivery Address</h3>

<textarea
placeholder="Enter address"
value={address}
onChange={(e)=>setAddress(e.target.value)}
/>

<h3>Select Payment</h3>

<select
value={payment}
onChange={(e)=>setPayment(e.target.value)}
>

<option value="">Choose Payment</option>
<option>UPI</option>
<option>Credit Card</option>
<option>Debit Card</option>
<option>Cash on Delivery</option>

</select>

<br/><br/>

<button onClick={placeOrder}>
Place Order
</button>

</div>

)

}

export default Checkout;