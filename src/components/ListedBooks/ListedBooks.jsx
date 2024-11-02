import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredList } from "../../Utilities/handleLocalStorage";
import Book from "../Book/Book";

const ListedBooks = () => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishBooks, setWishBooks] = useState([]);
  const [sort, setSort] = useState('');
  const [tab, setTab] = useState(true);
  const allBooks = useLoaderData();
  useEffect(() => {
    const readBooksId = getStoredList("read-books-list");
    const readBooksIdInt = readBooksId.map((books) => parseInt(books));

    const readBooksList = allBooks.filter((books) =>
      readBooksIdInt.includes(books.bookId)
    );
    // console.log(allBooks, readBooksIdInt, readBooksList);
    setReadBooks(readBooksList);

    // wish books list
    const wishBooksId = getStoredList("wish-List");
    const wishBooksIdInt = wishBooksId.map((book) => parseInt(book));
    const wishBooksList = allBooks.filter((book) =>
      wishBooksIdInt.includes(book.bookId)
    );
    setWishBooks(wishBooksList);
  }, []);

  // tab functionality
  const handleTab = (t)=>{
    setTab(t);
  }

  // sort functionality
  const handleSort = (sortName) => {
    setSort(sortName);
    if(tab){
      if(sortName === 'Ratings'){
        const sortByRating = [...readBooks].sort((a,b)=> b.rating - a.rating);
        setReadBooks(sortByRating);
      }
      if(sortName === 'Number of Pages'){
        const sortByPages = [...readBooks].sort((a,b) => b.totalPages - a.totalPages);
        setReadBooks(sortByPages);
      }
      if(sortName === 'Publisher Year'){
        const sortByYear = [...readBooks].sort((a,b)=> b.yearOfPublishing - a.yearOfPublishing);
        setReadBooks(sortByYear);
      }
    }else{
      if(sortName === 'Ratings'){
        const sortByRating = [...wishBooks].sort((a,b)=> b.rating - a.rating);
        setWishBooks(sortByRating);
      }
      if(sortName === 'Number of Pages'){
        const sortByPages = [...wishBooks].sort((a,b) => b.totalPages - a.totalPages);
        setWishBooks(sortByPages);
      }
      if(sortName === 'Publisher Year'){
        const sortByYear = [...wishBooks].sort((a,b)=> b.yearOfPublishing - a.yearOfPublishing);
        setWishBooks(sortByYear);
      }
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-20 my-6 border ">
        Books
      </h1>
      {/* sort by dropdown */}
      <details className="dropdown my-4">
        <summary className="btn m-1">Sort By {
            sort
          }</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li>
            <a onClick={()=> handleSort('Ratings')}>Ratings</a>
          </li>
          <li>
            <a onClick={()=> handleSort('Number of Pages')}>Number of Pages</a>
          </li>
          <li>
            <a onClick={()=> handleSort('Publisher Year')}>Publisher Year</a>
          </li>
        </ul>
      </details>

      <Tabs>
        <TabList>
          <Tab onClick={()=> handleTab(true)}>Read Books</Tab>
          <Tab onClick={()=> handleTab(false)}>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div className="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {readBooks.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishBooks.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
