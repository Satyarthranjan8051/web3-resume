import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-black min-h-screen text-white">
        <Navbar />
        <main className='mt-10'></main>
        <Hero />
        <Features />
        <CTA />
        <Footer />
      </div>
    </>
  );
}

export default App
