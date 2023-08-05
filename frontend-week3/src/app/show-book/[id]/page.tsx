"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface IProps {
	params: {
	  id: string;
	};
	searchParams: {};
  }
  

const ShowBookDetails = ({ params }: IProps) => {
  const [book, setBook] = useState<{
    _id?: string;
    title?: string;
    author?: string;
    isbn?: string;
    publisher?: string;
    published_date?: string;
    description?: string;
  }>({});
  

  const router = useRouter();
  const id = params.id;

  useEffect(() => {
    if (id) {
      axios
        // .get(`http://localhost:8082/api/books/${id}`)
        .get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/books/${id}`)
        .then((res) => {
          setBook(res.data);
        })
        .catch((err) => {
          console.log('Error from ShowBookDetails');
        });
    }
  }, [id]);

  const onDeleteClick = (id: string) => {
    axios
      // .delete(`http://localhost:8082/api/books/${id}`)
      .delete(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/books/${id}`)
      .then((res) => {
        router.push('/');
      })
      .catch((err) => {
        console.log('Error form ShowBookDetails_deleteClick');
      });
  };

  const BookItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Title</td>
            <td>{book.title}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Author</td>
            <td>{book.author}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>ISBN</td>
            <td>{book.isbn}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Publisher</td>
            <td>{book.publisher}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Published Date</td>
            <td>{book.published_date}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>Description</td>
            <td>{book.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="ShowBookDetails">
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <br /> <br />
            <Link href="/">
              <div className="btn btn-outline-warning float-left">Show Book List</div>
            </Link>
          </div>
          <br />
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Book's Record</h1>
            <p className="lead text-center">View Book's Info</p>
            <hr /> <br />
          </div>
          <div className="col-md-10 m-auto">
            {BookItem}
			<br />
          </div>
          <div className="col-md-6 m-auto">
            <button
              type="button"
              className="btn btn-outline-danger btn-lg btn-block"
              onClick={() => {
                if (book._id) onDeleteClick(book._id);
              }}
            >
              Delete Book
            </button>
          </div>
          <div className="col-md-6 m-auto">
            <Link href={`/edit-book/${book._id}`}>
              <div className="btn btn-outline-info btn-lg btn-block">Edit Book</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBookDetails;
