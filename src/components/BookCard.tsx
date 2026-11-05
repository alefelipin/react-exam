import type { Book } from "../types/book"


export interface BookCardProps {
  book: Book;
}

export default function BookCard({book}: BookCardProps) {
  return (
    <article>
      <img
        src={book.coverImage}
        alt={book.description}
      />
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>   
    </article>
  )
}