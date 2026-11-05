import { Link } from "react-router";
import type { Book } from "../types/book"
import './BookCard.css'

export interface BookCardProps {
  book: Book;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function BookCard({book, checked, onChange}: BookCardProps) {
  return (
    
      <article className="book-card">
        <Link to={`/books/${book.id}`}>
        <img
          src={book.coverImage}
          alt={book.description}
        />
        <h2>{book.title}</h2>
        <h3>Author: {book.author}</h3>
        </Link>
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
        />
        <p>{checked ? "favorite" : ""}</p> 
      </article>
    
  )
}