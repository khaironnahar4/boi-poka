import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredList } from "../../Utilities/handleLocalStorage";

const BookDetails = () => {
  const { bookId } = useParams();
  // console.log(bookId);
  const data = useLoaderData();
  const id = parseInt(bookId);

  const book = data.find((book) => book.bookId === id);
  // console.log(book);
  const { bookName, author, image, category, tags, review, totalPages, yearOfPublishing, publisher, rating } = book;

    // handle read button
    const handleReadButton = (id)=>{
        addToStoredList(id, "read-books-list")
    }

    // handle wishlist button
    const handdleWishList = (id)=>{
        addToStoredList(id, "wish-List")
    }

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-8">
       <div className="w-1/2 bg-gray-300 rounded-xl">
       <img
          src={image}
          className="rounded-lg shadow-2xl p-8"
        />
       </div>
        <div className="w-1/2 bg-white">
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p className="pt-4">By: {author}</p>
          <div className="divider"></div>
          <p className="">{category}</p>
          <div className="divider"></div>
          <p className="pb-4"><span className="font-bold">Review: </span>{review}</p>
          <div> <span className="font-bold">Tag: </span>
            {tags?.map((tag, idx) => (
              <div key={idx} className="badge bg-gray-100 text-green-500 badge-outline p-3 me-4">
                {tag}
              </div>
            ))}
            <div className="divider"></div>
            <p>Number of Pages: <span className="font-bold">{totalPages}</span></p>
            <p>Publisher: <span className="font-bold">{publisher}</span></p>
            <p>Year of Publishing: <span className="font-bold">{yearOfPublishing}</span></p>
            <p>Rating: <span className="font-bold">{rating}</span></p>
          </div>

          <button onClick={()=> handleReadButton(id)} className="btn border px-6 me-4 mt-4 py-3 bg-transparent border-black hover:bg-green-500">Read</button>
          <button onClick={()=> handdleWishList(id)} className="btn bg-green-400 hover:bg-green-500">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
