import React from 'react';
import "./Mylayout.css";
import Mynavbar from './navsection/Mynavbar';
import Formsection from './Formsection/Formsection';
import Aboutpage from './Aboutsection/Aboutpage';
// import CardSlider from './CardsliderSection/CardSlider';
// import Carouselpage from './Carouselpage/Carousel';
import Counterpage from './CounterSectionpage/Counterpage';
import Footer from './Footersection/Footer';



const Mylayout = () => {
  return (
    <div>
        <Mynavbar />
        <Formsection />
        <Aboutpage />
        {/* <CardSlider /> */}
        {/* <Carouselpage /> */}
        <Counterpage />
        <Footer />
        
    </div>
  )
}

export default Mylayout