import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Sign Up For 30% Off Your First Order
        </p>
        {/* <p className='footer-subscription-text'> */}
          {/* You can unsubscribe at any time. */}
        {/* </p> */}
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <a href="/sign-up" class="btn btn-light" role="button">Sign Up</a>
            {/* <Button buttonStyle='btn--outline--primary'>Sign Up</Button> */}
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Get to Know Us</h2>
            <Link to='/sign-up'>About Us</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Add Your Business</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Customer Service</h2>
            <Link to='/'>Contact Us</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Log In</Link>
            <Link to='/'>Sign Up</Link>
            <Link to='/'>My Account</Link>
            <Link to='/'>Discounts</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Legal</h2>
            <Link to='/'>Privacy</Link>
            <Link to='/'>Cookies</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <i class='fas fa-igloo' />
            &nbsp; HutMeals
            </Link>
          </div>
          <small class='website-rights'>HutMeals © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
