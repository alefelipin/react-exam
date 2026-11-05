import books from '../data/books.json'
import { useParams } from 'react-router';
import { Link } from 'react-router';

export default function BookDetail() {

  const {id} = useParams();

  const book = books.find((book) => book.id === Number(id));

  if(!book) {
   return (
     <div>
       <h2>Book not found</h2>
       <Link to="/">Back to books</Link>
     </div>
   )
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <img
          src={book.coverImage}
          alt={book.description}
        />
      <h2>Author: {book.author}</h2>
      <h3>Description: {book.description}</h3> 
      <p>Genre:{book.genre}</p>  
      <p>Publication date:{book.publishedYear}</p>  
      <p>ISBN:{book.isbn}</p> 
      <Link to="/">Back to books</Link>
    </div>  
  )
}