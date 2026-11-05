import { useState } from "react";
import books from "../data/books.json";
import BookCard from "./BookCard";

export default function BookList() {

  const [favorite, setFavorite] = useState(false)

  function handleClick(id: number, checked: boolean) {
   books.map((book) => {
      if (book.id === id) setFavorite(checked)}
    )
  }

  return(
    <section className="book-container">
    {
      books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          checked={favorite}
          onChange={(checked) => handleClick(book.id, checked)}
        />
      ))
    }
    </section>
  )
}
