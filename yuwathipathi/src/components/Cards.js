import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our successful marriages!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img8.jpg'
              text='Come and register in our company'
              label='services'
              path='/services'
            />
            <CardItem
              src='images/img2.jpg'
              text='You can receive best facilities'
              label='Luxury-facilities'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img3.jpg'
              text='Find your best matching partners'
              label='Happy'
              path='/services'
            />
            <CardItem
              src='images/img4.jpg'
              text='This is best platform for your life journey'
              label='Matching'
              path='/products'
            />
            <CardItem
              src='images/img5.jpg'
              text='Best wedding plans
              '
              label='Life partners'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;