import React from 'react'
import logo from './images/logo.png'
import insta from './images/Instagram.png'
import fb from './images/Facebook.png'
import TikTok from './images/tikTok.png'
import Linkedin from './images/LinkedIn.png'
import girl from './images/girl.png'

function Home() {
  return (
    <div className="Home">
        <header className="navbar">
          <img src={logo} className="App-logo" alt="logo" />
          <div className='textNavbar'>
            
              <a className='about' href="About"> About us</a>
            
            <a className='login'> Login</a>
            <a className='signup'> Sign up</a>
          </div>
        </header>
        <div className='columns'>
          <div className='column1'>
            <div className='textpres'>
                <h1 className='titlepres'>Size As </h1>
                <h1 className='titlepres'>You Can Decide</h1>
                <h3 className='descriptionpres'>SizeYouUp is a web platform that allows you to measure your dimensions in real time, and returns the ideal size according to your preferred brands.</h3>
            </div>
            <button className="start-button">Let's start</button>
            <div>
              <img src={insta} className="instalogo" alt="logo"/>
              <img src={fb} className="fblogo" alt="logo"/>
              <img src={TikTok} className="fblogo" alt="logo"/>
              <img src={Linkedin} className="fblogo" alt="logo"/>
            </div>
          </div>
          <div>
          <img src={girl} className="girl" alt="logo"/>
        </div>
        </div>
      </div>
  )
}

export default Home