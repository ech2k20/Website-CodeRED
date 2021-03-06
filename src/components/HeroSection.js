import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>AVERAGE JOES</h1>
      <p>We are Joes.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'>
        </Button>

      </div>
    </div>

/*<Button
className='btns'
buttonStyle='btn--primary'
buttonSize='btn--large'
onClick={console.log('hey')}
>
WATCH TRAILER <i className='far fa-play-circle' />
</Button>*/
  );
}

export default HeroSection;
