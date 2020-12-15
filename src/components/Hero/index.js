import React, { useState } from 'react';
import Navbar from '../Navbar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <HeroContainer >
      <Navbar toggle={toggle} {...props}/>
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
         <a href="#Pizza"> <HeroBtn>Place Order</HeroBtn></a>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;