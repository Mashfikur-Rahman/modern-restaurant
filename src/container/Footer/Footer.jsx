import React from 'react';
import './Footer.css';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';



const Footer = () => {
  return (
    <div className='app__footer section__padding'>
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className='app__footer-headtext'>Contact Us</h1>
          <p className='p__opensans'>230, Moghbazar, wireless, Dhaka!</p>
          <p className='p__opensans'>Phone: +8801711-100033</p>
          <p className='p__opensans'>Phone: +8801711-100044</p>
        </div>
        
        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer_logo"/>
          <p className='p__opensans'> "The best way to find yourself is to lose yourself in the service of others"</p>
          <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop: '50px'}} />
          <div className='app__footer-links_icons'>
            <FiFacebook />
            <FiInstagram />
            <FiTwitter />
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className='p__opensans'>Monday-Firday</p>
          <p className='p__opensans'>08:00 Am - 12:00 Am</p>
          <p className='p__opensans'>Saturday-Sunday:</p>
          <p className='p__opensans'>07:00 Am - 11:00 Pm</p>
        </div>

      </div>
      
      <div className="footer__copyright">
        <p className='p__opensans'>2022 Gericht Restaurant. All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer;