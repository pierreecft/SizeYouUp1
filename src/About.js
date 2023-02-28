import React from 'react'
import './About.css';
import SmLogo from './images/logosmall.png'

function About() {
  return (
    <div>
      <header className='headerAbout'>
        <div className='divImg'>
          <a href='/'>
          <img src={SmLogo} className="smallLogo" alt="logo" />
          </a>
        </div>
        <div className='textTitle'>
          <h1 className='titleAbout'>Who are we ?</h1>
        </div>
      </header>
      <div className='DivtextABout'>
      <h3 className='textABout'>
      At SizeYouUp, we believe that shopping for clothes should be a seamless and enjoyable experience. That's why we've created a solution that allows customers to know the perfect size for each brand before making a purchase. Our goal is to provide a convenient and accurate way to shop for clothing, eliminating the need for physical fittings and reducing the hassle of returns.
      </h3>
      <h3 className='textABout'>Our platform integrates with retailers' websites, using just a few simple measurements, customers can see how a piece of clothing will fit, move and look on them in real-time. This helps shoppers make more informed buying decisions and reduces the likelihood of returns.</h3>
      <h3 className='textABout'>We're a team of tech enthusiasts, fashion lovers and problem-solvers who are dedicated to making the online shopping experience more enjoyable for everyone. Our virtual fitting room is not only more convenient, it's also more sustainable. By reducing the number of returns, we're helping to minimize the waste associated with the traditional shopping process.</h3>
      <h3 className='textABout'>We're always looking for new and innovative ways to improve our virtual fitting room solution, and we're committed to providing the best possible experience to our customers. Whether you're shopping for a special event or just looking to update your wardrobe, we're here to help.</h3>
      </div>
      
      <a href='/'>
      <button className='backButton' >Back </button>
      </a>
      
      
      
    </div>
  )
}

export default About