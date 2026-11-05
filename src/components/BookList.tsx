import books from "../data/books.json";
import BookCard from "./BookCard";


export default function BookList() {
  return(
    <section>
    {
      books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
        />

      ))
    }
    </section>
  )
}