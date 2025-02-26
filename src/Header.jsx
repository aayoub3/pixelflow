import { useState, useEffect } from 'react';
import logo from './assets/logo-img.png';
import './Header.css';


function Header() {

  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
    }, 500);

    return () => clearInterval(interval); // Cleanup the interval
  }, []);



  return (
    <header>
      <nav>
      <img id='home-logo' src={logo} alt="Pixel Flow logo" />
      <h1 id='welcome-message'>COMMING SOON</h1>
      <h1 id="welcome-message2">Stay Tuned<span>{dots}</span></h1>
      <p id='main-message'>Until further notice, for bookings or inquiries contact us via our social media inbox on Facebook/Instagram or by email.</p>
      <hr />
        <ul>
          <li> <a href="https://g.co/kgs/mnF5AzD" target="_blank"> Google </a> </li>
          <li> <a href="https://www.facebook.com/pixelflowcreation" target="_blank"> Facebook </a> </li>
          <li> <a href="https://www.instagram.com/pixelflowcreation" target="_blank"> Instagram </a> </li>
          <li><a href="mailto:support@pixelflowcreation.com">Email Us</a></li>
        </ul>
      </nav>

      {/* <hr /> */}

    </header>
  );
}
export default Header
