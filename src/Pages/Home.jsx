import React from 'react'
import Header from '../Components/Header/Header'
import Banner from '../Components/Banner/Banner'
import Cards from '../Components/Cards/Cards'
import Footer from '../Components/Footer/Footer'
import SocialMedia from '../Components/SocialMedia/SocialMedia'
function Home() {
  return (
    <div className='grid'>
         <Header />
         <Banner />
         <Cards />
         <Footer />
         <SocialMedia />
    </div>
  )
}

export default Home
