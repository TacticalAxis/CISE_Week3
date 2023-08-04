import Link from 'next/link';
import Image from 'next/image';

type Book = {
  _id: string;
  title: string;
  author: string;
  description: string;
};

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = (props) => {
  const book = props.book;

  return (
    <div className='card-container'>
      <Image
        src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
        alt='Books'
        height={200}
        width={300}
      />
      <div className='desc'>
        <h2>
          <Link href={`/show-book/${book._id}`}>
            <p>{book.title}</p>
          </Link>
        </h2>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default BookCard;
