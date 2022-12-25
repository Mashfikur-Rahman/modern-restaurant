import React from 'react';
import { SubHeading } from '../../components';
import './Header.css';
import { images } from '../../constants';


const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className="app__wrapper_info">
        <SubHeading title='Chese the new flaover' />
        <h1 className='app__header-h1'>The Key to Fine Dining</h1>
        <p className='p__opensans' style={{margin: '2rem 0'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis tempora ratione consequatur odio qui libero ipsa quidem, id molestias cumque.</p>
        <button type='button' className='custom__button' style={{borderRadius: '5rem'}} >Explore Menu</button>
      </div>
      
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img"/>
      </div>
    </div>
  )
}

export default Header;