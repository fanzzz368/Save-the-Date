import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Events happening near you</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Fun fall events near you'
              label='Seasonal'
              path='/comingsoon'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Cultural Experiences'
              label='Culture'
              path='/comingsoon'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.png'
              text='Explore the outdoors'
              label='Get outside'
              path='/comingsoon'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Local cuisine'
              label='Food'
              path='/comingsoon'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
