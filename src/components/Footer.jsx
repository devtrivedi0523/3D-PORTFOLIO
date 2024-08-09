import React from 'react';
import instagramIcon from '../assets/insta.png'; // adjust the path as necessary
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';
import twitterIcon from '../assets/twitter2.png';

const Footer = () => {


  return (
    <footer className="bg-primary py-4 text-center text-white">
      <p className='mb-4'>&copy; {new Date().getFullYear()} My Portfolio Website. All rights reserved.</p>
      <div className="flex justify-center space-x-6 mb-4 ">
          <a href="https://www.instagram.com/dev.trivedi0523/?igsh=MTJ0MXZjbzJmOGp3YQ%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
            <img src={instagramIcon} alt="Instagram" className="w-8 h-8 " />
          </a>
          <a href="https://github.com/devtrivedi0523" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
            <img src={githubIcon} alt="GitHub" className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/dev-trivedi-37592025a/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
            <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a href="https://x.com/__devtrivedi__" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
            <img src={twitterIcon} alt="Twitter" className="w-8 h-8" />
          </a>
        </div>
        <p className=''>Designed by Dev Trivedi.</p>
    </footer>
  );
}

export default Footer;
