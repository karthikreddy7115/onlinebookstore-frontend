import axios from "axios"

const API = "http://localhost:8080/books"

export const getBooks = () => axios.get(API)

export const addBook = (book) => axios.post(API, book)

export const deleteBook = (id) => axios.delete(`${API}/${id}`)