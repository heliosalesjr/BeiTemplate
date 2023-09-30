import React from 'react'
import NavbarDark from './components/Nav'
import Hero from './components/Hero'
import FAQ from './components/FAQ'
import ChatBubble from './components/ChatBubble'
import Collapse from './components/Collapse'
import Carousel from './components/Carousel'
import Cardy from './components/Cardy'
import Footer from './components/Footer'
//THIS ONE!
import { Fade } from "react-awesome-reveal";


function App() {

  return (
    <>
      <NavbarDark />
      <Hero />
      <Fade>
        <FAQ />
        <ChatBubble />
        <Collapse />
        <Carousel /> {/* Renderize o componente Carousel aqui */}
        <div className="flex flex-col items-center px-20 md:flex-row md:justify-center md:space-x-5 space-y-5">
          <Cardy /><Cardy /><Cardy />
        </div>
      </Fade>
        
      
      <Footer />
    </>
  )
}

export default App;
