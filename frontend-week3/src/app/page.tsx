"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import BookCard from './components/BookItem';

type Book = {
  _id: string;
  title: string;
  author: string;
  description: string;
};

function ShowBookList() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/books')
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBookList');
      });
  }, []);

  const bookList =
    books.length === 0
      ? 'there is no book record!'
      : books.map((book, k) => <BookCard book={book} key={k} />);

  return (
    <div className='ShowBookList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Books List</h2>
          </div>

          <div className='col-md-11'>
            <Link href='/create-book'>
              <div className='btn btn-outline-warning float-right'>+ Add New Book</div>
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{bookList}</div>
      </div>
    </div>
  );
}

export default ShowBookList;


// import Link from "next/link";

// async function getData() {
//   const res = await fetch("http://localhost:8082/api/books");

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// export default async function Home() {
//   const data = await getData();

//   return (
//     <main className="flex min-h-screen flex-col items-center p-24">
//       <h1 className="text-3xl font-bold">Books List</h1>
//       {/* <br /> */}
//       <ul>
//         {data.map((book: any) => (
//           <div className='card-container'>
//             <li key={book._id}>
//             <img
//               src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
//               alt='Books'
//               height={200}
//             />
//             <div className='desc'>
//               <h2>
//                 <Link href={`/show-book/${book._id}`}>{book.title}</Link>
//               </h2>
//               <h3>{book.author}</h3>
//               <p>{book.description}</p>
//             </div>
         
//             </li>
//           </div>
//         ))}
//       </ul>
//     </main>
//   );
// }
