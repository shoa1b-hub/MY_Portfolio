import React, { useEffect, useState } from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.jpeg';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const textToType = "an Aspiring Software developer.";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < textToType.length) {
      const interval = setInterval(() => {
        setTypedText(prevText => prevText + textToType[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, 100); // Adjust the typing speed here

      // Clear interval when all characters have been typed
      return () => {
        clearInterval(interval);
      };
    }
  }, [index, textToType]);

  return (
    <div id='home' className='hero'>
      <div className="hero-main">
        <img src={profile_img} alt="Profile Picture" />
        <h1>
          <span>I'm Mohammed Shoaib Shaik,</span> {typedText}
        </h1>
      </div>
      <p>Welcome to my portfolio! Explore my portfolio to discover the projects I've worked on, my areas of expertise, and the value I bring to the table. Let's connect and embark on transformative journeys together. </p>
      <div className="hero-action">
        <div className="hero-connect"><a href='https://www.linkedin.com/in/mohammed-shoaib-shaik-77761617a/' target="_blank" rel="noopener noreferrer">My Linkedin</a></div>
        <div className="hero-resume"><a href='/resume.pdf' download>My resume</a></div>
      </div>
    </div>
  );
}

export default Hero;
