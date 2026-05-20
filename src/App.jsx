import './App.css'
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Tutorial from './components/Tutorial'
import Lineup from './components/Lineup'
import Solspot from './components/Solspot'
import Quiz from './components/Quiz'
import Personality from './components/Personality'
import Menu from './components/Menu'


const navItems = [
  { to: '/', label: 'Home' },
  { to: '/tutorial', label: 'Tutorial' },
  { to: '/lineup', label: 'Lineup' },
  { to: '/solspot', label: 'Solspot' },
  { to: '/quiz', label: 'Quiz' },
  { to: '/personality', label: 'Personality' },
  { to: '/menu', label: 'Menu' },
]

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen page-background pb-[260px]">
        <Header />

        <nav className="mx-auto mt-4 flex w-full max-w-[430px] flex-wrap justify-center gap-2 px-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              className="rounded-full bg-white px-3 py-2 text-sm font-semibold text-[#2F4195] shadow-sm transition hover:bg-[#e8f2ff]"
              to={item.to}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mx-auto w-full max-w-[430px] px-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/lineup" element={<Lineup />} />
            <Route path="/solspot" element={<Solspot />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/personality" element={<Personality />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}