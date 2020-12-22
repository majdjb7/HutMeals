import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some of these restaurants</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/food-1.jpg'
              text='Restaurant Info ......................................................................'
              label='Breakfast'
              path='/business'
            />
            <CardItem
              src='images/food-2.jpg'
              text='Restaurant Info ......................................................................'
              label='Dinner'
              path='/business'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/food-3.jpg'
              text='Restaurant Info'
              label='Dessert'
              path='/business'
            />
            <CardItem
              src='images/food-4.jpg'
              text='Restaurant Info'
              label='Burgers'
              path='/business'
            />
            <CardItem
              src='images/food-7.jpg'
              text='Restaurant Info'
              label='Eastern Style'
              path='/business'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
