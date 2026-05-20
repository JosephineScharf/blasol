import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import  Personality from './assets/personality.png'

function App() {
   return (
    <div className="mx-auto min-h-screen max-w-[430px] bg-[#E8F0F3]">
      <Header />
      <Personality className='mx-auto mt-10' /> 
      <Footer />
    </div>
  )
}


export default App