import { useEffect, useState } from "react"
import Book from "../Book/Book";

const AllBooks = () => {
 const [books, setBooks] = useState([]);

 useEffect(()=>{
    fetch("booksData.json")
    .then(res => res.json())
    .then(data => setBooks(data) )
 } ,[])


  return (
    <div className="mt-24">
        <h1 className="text-6xl font-bold text-center">Books</h1>
        <div className="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                books.map(book => <Book key={book.bookId} book={book}></Book>)
            }
        </div>
    </div>
  )
}

export default AllBooks