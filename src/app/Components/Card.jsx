import Image from "next/image";

const Card = ({ book }) => {
  return (
    <div className="card card-side bg-base-100 shadow-sm">
      <figure>
        <Image
          src={book.image_url}
          width={200}
          height={300}
          alt="book"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{book.title}</h2>
        <p>{`Author: ${book.author}`}</p>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;