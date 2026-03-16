import { useEffect, useState } from "react";

function BookList({ addToCart }) {

const [books,setBooks] = useState([]);

useEffect(()=>{
loadBooks();
},[]);

const loadBooks = () => {
fetch("http://localhost:8080/books")
.then(res => res.json())
.then(data => setBooks(data));
};

const deleteBook = (id) => {

fetch("http://localhost:8080/books/"+id,{
method:"DELETE"
})
.then(()=>loadBooks());

};

return(

<div>

<h2>Available Books</h2>

<div className="bookGrid">

{books.map(book => (

<div className="bookCard" key={book.id}>

<img src={book.imageUrl} alt="book"/>

<h3>{book.title}</h3>

<p>Author: {book.author}</p>

<p>Price: ${book.price}</p>

<button onClick={()=>addToCart(book)}>
Add to Cart
</button>

<button
style={{background:"red",marginLeft:"10px"}}
onClick={()=>deleteBook(book.id)}
>
Delete
</button>

</div>

))}

</div>

</div>

);

}

export default BookList;