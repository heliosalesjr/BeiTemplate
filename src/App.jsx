import React from 'react'
import NavbarDark from './components/Nav'
import Hero from './components/Hero'
import Accordion from './components/Accordion'
import ChatBubble from './components/ChatBubble'
import Collapse from './components/Collapse'
import Carousel from './components/Carousel'
import Cardy from './components/Cardy'
import Footer from './components/Footer'
//THIS ONE!
import books from './assets/books.png'
import doguin from './assets/doguin.png'
import howmuch from './assets/howmuch.png'
import postit from './assets/postit.png'
import teachs from './assets/teachs.png'

function App() {

  const images = [books, doguin, howmuch, postit, teachs];

  return (


    <>
        <NavbarDark />
        <Hero />
        <Accordion />
        <ChatBubble />
        
        <Collapse />
        <Carousel images={images}/>
        <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-5 space-y-5">
        <Cardy /><Cardy /> <Cardy />
        </div>
        <Footer />
    </>
  )
}

export default App
