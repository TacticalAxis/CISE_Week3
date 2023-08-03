import Link from "next/link";
import { getBook } from "@/app/util";

// async function getBookData(id: string) {
// 	const res = await fetch("http://localhost:8082/api/books/" + id);

// 	if (!res.ok) {
// 		throw new Error("Failed to fetch data");
// 	}

// 	return res.json();
// }

export default async function Page({ params }: { params: { id: string } }) {
	const book = await getBook(params.id);

	const BookItem = (
		<div>
			<table className="table table-hover table-dark">
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Title</td>
						<td>{book.title}</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Author</td>
						<td>{book.author}</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>ISBN</td>
						<td>{book.isbn}</td>
					</tr>
					<tr>
						<th scope="row">4</th>
						<td>Publisher</td>
						<td>{book.publisher}</td>
					</tr>
					<tr>
						<th scope="row">5</th>
						<td>Published Date</td>
						<td>{book.published_date}</td>
					</tr>
					<tr>
						<th scope="row">6</th>
						<td>Description</td>
						<td>{book.description}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);

	const onDeleteClick = (id: string) => {
		//     fetch("http://localhost:8082/api/books/" + id, {
		//       method: "delete",
		//     })
		//       .then((res) => res.json())
		//       .then((res) => {
		//         if (res.success) {
		//           alert("Book deleted!");
		//         } else {
		//           alert("Delete failed.");
		//         }
		//       });
	};

	return (
		<div className="ShowBookDetails">
			<div className="container">
				<div className="row">
					<div className="col-md-10 m-auto">
						<br /> <br />
						<Link href="/" className="btn btn-outline-warning float-left">
							Show Book List
						</Link>
					</div>
					<br />
					<div className="col-md-8 m-auto">
						<h1 className="display-4 text-center">Book&rsquo;s Record</h1>
						<p className="lead text-center">View Book&rsquo;s Info</p>
						<hr /> <br />
					</div>
					<div className="col-md-10 m-auto">{BookItem}</div>
					<div className="col-md-6 m-auto">
						<button
							type="button"
							className="btn btn-outline-danger btn-lg btn-block"
							// onClick={() => {
							// 	onDeleteClick(book._id);
							// }}
						>
							Delete Book
						</button>
					</div>
					<div className="col-md-6 m-auto">
						<Link
							href={`/edit-book/${book._id}`}
							className="btn btn-outline-info btn-lg btn-block"
						>
							Edit Book
						</Link>
					</div>
				</div>
			</div>
		</div>
	);

	// console.log(data);

	//   return (
	//     <div>
	//       <h1>Book Details</h1>
	//         <p>{data.title}</p>
	//         <p>{data.author}</p>
	//         <p>{data.description}</p>
	//     </div>
	//   );

	// return (
	//     <main className="flex min-h-screen flex-col items-center p-24">
	//         <h1 className="text-3xl font-bold">{data.title}</h1>
	//         <br />
	//         {/* <ul> */}
	//             {/* <div className='card-container'>
	//                 <li key={data._id}>
	//                     <img
	//                         src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
	//                         alt='Books'
	//                         height={200}
	//                     />
	//                     <div className='desc'>
	//                         <h2>
	//                             <Link href={`/show-book/${data._id}`}>{data.title}</Link>
	//                         </h2>
	//                         <h3>{data.author}</h3>
	//                         <p>{data.description}</p>
	//                     </div>

	//                 </li>
	//             </div> */}
	//         {/* </ul> */}
	//     </main>
	// );
}
