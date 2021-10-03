import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <section class="cards" id="Cards">
    <div className='cards'>
      <h1>Find out more about the dangers of work</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/mentalwellness.jpg'
              text='The wellness of emotional, intellect, social, economical, spiritual and other areas of life.'
              label='Personal'
              path='/personal'
            />
            <CardItem
              src='images/oilandgas.jpg'
              text='Recognizing and controlling hazards is critical to preventing injuries and deaths.'
              label='Work'
              path='/work'
            />
          </ul>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Cards;
