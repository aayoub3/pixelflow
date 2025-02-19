import { useState, useEffect } from 'react';
import logo from './assets/logo-img.png';
import './Header.css';


function Header() {

  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {    //setInterval() is a built-in JavaScript function that repeatedly runs a block of code at a fixed time interval
      setDots((prev) => (prev.length < 3 ? prev + '.' : ''));   //Note: prev is not a keyword but u can think about it as a varible represents the previous state/value of dots before it get's updated
    }, 500);

    return () => clearInterval(interval); // Cleanup the interval
  }, []);



  return (
    <header>
      <nav>
      <img id='home-logo' src={logo} alt="Pixel Flow logo" />
      <h1 id='welcome-message'>COMMING SOON</h1>
      <h1 id="welcome-message2">Stay Tuned<span>{dots}</span></h1>
      <hr />
        <ul>
          <li> <a href=""> Home </a> </li>
          <li> <a href=""> About </a> </li>
          <li> <a href=""> Services </a> </li>
          <li> <a href=""> Contact </a> </li>
        </ul>
      </nav>

      {/* <hr /> */}

    </header>
  );
}
export default Header
