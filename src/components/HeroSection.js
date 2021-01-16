import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
      <h1>HUT MEALS</h1>
      <p>Order from your favorite local restaurants</p>
      <br></br>
      <br></br>
      <br></br>
      <p>Enter Your Location</p>

      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Enter Your Location <i className='far fa-play-circle' />
        </Button> */}
          <div class="container h-100">
            
            <div class="d-flex justify-content-center h-100">
              <div class="searchbar">
                <input class="search_input" type="text" name="" placeholder="Enter Your Address"></input>
                <a href="#" class="search_icon"><i class="fas fa-paper-plane"></i></a>
              </div>
            </div>
          </div>
       

        
      </div>
    </div>
  );
}

export default HeroSection;
