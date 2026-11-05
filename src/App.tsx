import BookList from './components/BookList'
import BookDetail from './components/BookDetail'
import { Routes, Route } from 'react-router'
import './App.css'

function App() {

  return (
    <>
      <h1>Library React</h1>
      <Routes>
        <Route 
        path='/'
        element={<BookList />}                     
        />
        <Route
        path='/books/:id'
        element={<BookDetail />}                     
        />
      </Routes>
    </>
  )
}

export default App
