import { useState } from 'react'
import './App.css'

import Movies from "./movies.jsx";
import {Route, Routes} from "react-router-dom";
import Rentals from "./components/rentals.jsx";
import Customers from "./components/customers.jsx";
import NavBar from "./components/navBar.jsx";
import NotFound from "./components/notFound.jsx";
import MovieForm from "./components/movieForm.jsx";
import LoginForm from "./components/loginForm.jsx";
import RegisterForm from "./components/registerForm.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <NavBar></NavBar>
        <main role="main" className="container">
            <h1>Welcome to Vidly app</h1>
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/movies/:id" element={<MovieForm />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/rentals" element={<Rentals />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/" element={<Movies />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <br />
        </main>
    </>
  )
}

export default App
