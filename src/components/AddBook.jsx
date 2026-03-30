import { useState } from "react";

function AddBook(){

const [title,setTitle] = useState("");
const [author,setAuthor] = useState("");
const [price,setPrice] = useState("");
const [imageUrl,setImageUrl] = useState("");

const addBook = ()=>{

const book = {
title:title,
author:author,
price:price,
imageUrl:imageUrl
};

fetch(`${import.meta.env.VITE_API_URL}/books`,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(book)

})
.then(()=>{

alert("Book Added Successfully");

setTitle("");
setAuthor("");
setPrice("");
setImageUrl("");

window.location.reload();

});

};

return(

<div className="addBook">

<h2>Add Book</h2>

<input
type="text"
placeholder="Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<input
type="text"
placeholder="Author"
value={author}
onChange={(e)=>setAuthor(e.target.value)}
/>

<input
type="number"
placeholder="Price"
value={price}
onChange={(e)=>setPrice(e.target.value)}
/>

<input
type="text"
placeholder="Image URL"
value={imageUrl}
onChange={(e)=>setImageUrl(e.target.value)}
/>

<button onClick={addBook}>
Add Book
</button>

</div>

);

}

export default AddBook;