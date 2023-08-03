// get book data from the server
export async function getBook(id: string) {
    const res = await fetch("http://localhost:8082/api/books/" + id);
    const book = await res.json();
    return book;
}