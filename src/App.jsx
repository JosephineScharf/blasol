import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Quiz from './components/Quiz'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Banner() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">THIS IS GONNA BE A BANNER</h1>
    </div>
  );
}

function Quiz() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Quiz</h1>
      <p className="mt-2 text-gray-600">This is the quiz section.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Contact Page</h1>
      <p className="mt-2 text-gray-600">Get in touch with us.</p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100">
          <nav className="flex gap-4 p-4 bg-white shadow">
            <Link className="text-blue-600 hover:underline" to="/">
              Home
          </Link>
          <Link className="text-blue-600 hover:underline" to="/quiz">
            Quiz
          </Link>
          <Link className="text-blue-600 hover:underline" to="/contact">
            Contact
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>

    <Footer />
    </>

    
  );
}