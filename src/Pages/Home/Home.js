import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Arrival from '../../Components/Arrival/Arrival';
import Payday from '../../Components/Payday/Payday';
import Favourite from '../../Components/Favourite/Favourite';
import Mobile from '../../Components/Mobile/Mobile';
import Footer from '../../Components/Footer/Footer';

function Home() {
  return (
    <div>
        <Hero/>
        <Arrival/>
        <Payday/>
        <Favourite/>
        <Mobile/>
        <Footer/>
    </div>
  )
}

export default Home