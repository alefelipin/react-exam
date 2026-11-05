import { Link } from "react-router";
import type { Book } from "../types/book"

export interface BookCardProps {
  book: Book;
}

export default function BookCard({book}: BookCardProps) {
  return (
    <Link to={`/books/${book.id}`}>
      <article>
        <img
          src={book.coverImage}
          alt={book.description}
        />
        <h2>{book.title}</h2>
        <h3>Author: {book.author}</h3> 
      </article>
    </Link>
  )
}