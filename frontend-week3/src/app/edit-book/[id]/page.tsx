"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Book {
  title: string;
  isbn: string;
  author: string;
  description: string;
  published_date: string;
  publisher: string;
}

interface IProps {
  params: {
    id: string;
  };
  searchParams: {};
}

const UpdateBookInfo = ({ params }: IProps) => {
  const [book, setBook] = useState<Book>({
    title: "",
    isbn: "",
    author: "",
    description: "",
    published_date: "",
    publisher: "",
  });

  const router = useRouter();
  const id = params.id;

  useEffect(() => {
    if (typeof id === "string") {
      axios
        // .get(`http://localhost:8082/api/books/${id}`)
        .get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/books/${id}`)
        .then((res) => {
          setBook(res.data);
        })
        .catch((err) => {
          console.log("Error from UpdateBookInfo");
        });
    }
  }, [id]);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (typeof id === "string") {
      axios
        // .put(`http://localhost:8082/api/books/${id}`, book)
        .put(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/books/${id}`, book)
        .then((res) => {
          router.push(`/show-book/${id}`);
        })
        .catch((err) => {
          console.log("Error in UpdateBookInfo!");
        });
    }
  };

  return (
    <div className="UpdateBookInfo">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link href="/" className="btn btn-outline-warning float-left">
              Show Book List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Edit Book</h1>
            <p className="lead text-center">Update Book&rsquo;s Info</p>
          </div>
        </div>

        <div className="col-md-8 m-auto">
          <form noValidate onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Title of the Book"
                name="title"
                className="form-control"
                value={book.title}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="isbn">ISBN</label>
              <input
                type="text"
                placeholder="ISBN"
                name="isbn"
                className="form-control"
                value={book.isbn}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                placeholder="Author"
                name="author"
                className="form-control"
                value={book.author}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                placeholder="Description of the Book"
                name="description"
                className="form-control"
                value={book.description}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="published_date">Published Date</label>
              <input
                type="text"
                placeholder="Published Date"
                name="published_date"
                className="form-control"
                value={book.published_date}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="publisher">Publisher</label>
              <input
                type="text"
                placeholder="Publisher of the Book"
                name="publisher"
                className="form-control"
                value={book.publisher}
                onChange={onChange}
              />
            </div>
            <br />

            <button
              type="submit"
              className="btn btn-outline-info btn-lg btn-block"
            >
              Update Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBookInfo;
