function Cart({cart,removeFromCart,setCheckout}){

const total = cart.reduce((sum,book)=>sum+book.price,0);

return(

<div style={{border:"1px solid black",padding:"20px",width:"300px"}}>

<h2>🛒 Cart</h2>

{cart.length===0 && <p>No books in cart</p>}

{cart.map(book=>(
<div key={book.id} style={{marginBottom:"10px"}}>

<p>{book.title}</p>
<p>₹{book.price}</p>

<button onClick={()=>removeFromCart(book.id)}>
Remove
</button>

</div>
))}

<h3>Total: ${total}</h3>

<button className="buyBtn" onClick={()=>setCheckout(true)}>
Buy Books
</button>

</div>

)

}

export default Cart;