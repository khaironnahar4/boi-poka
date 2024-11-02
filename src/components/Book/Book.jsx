import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {bookId, bookName, author, image, tags, category, rating, totalPages, yearOfPublishing } = book;

  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 shadow-xl border cursor-pointer">
        <figure className="h-[230px] bg-gray-400 m-6 mb-0 flex items-center justify-center rounded-xl">
          <img
            src={image}
            alt="book image"
            className="rounded-xl p-6 object-cover h-full object-center"
          />
        </figure>
        <div className="card-body">
          <div>
            {tags?.map((tag, idx) => (
              <div key={idx} className="badge bg-gray-100 text-green-500 badge-outline p-3 me-4">
                {tag}
              </div>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p>By : {author}</p>
          <p>Publish Year: {yearOfPublishing}</p>
          <div className="divider"></div>
          <div className="flex justify-between items-center">
            <p>{category}</p>
            <p>Page: {totalPages}</p>
            <div className="rating flex items-center justify-center gap-2">
              <p>{rating}</p>
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
