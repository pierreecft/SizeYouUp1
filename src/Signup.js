import React from 'react'
import SmLogo from './images/logosmall.png'
import './Signup.css'

function Signup() {
  return (
    <div>
        <header className='headerAbout'>
        <div className='divImg'>
          <a href='/'>
          <img src={SmLogo} className="smallLogo" alt="logo" />
          </a>
        </div>
        <div className='textTitle'>
          <h1 className='titleAbout'>Join the movement !</h1>
        </div>
      </header>
      <div>
        <form className='formLog1'>
            <div>
            <label className='textForm' htmlFor="email"> First and last name :   </label>
            <input type="text" id="email1" className="email1" required />
            </div>
            <div>
            <label className='textForm' htmlFor="email"> Email :   </label>
            <input type="text" id="email1" className="email1" required />
            </div>
            <div>
            <label className='textForm' htmlFor="password">Password :   </label>
            <input type="password1" id="password1" className="password1" required />
            </div>
            <div>
            <label className='textForm' htmlFor="password">Confirm the password :   </label>
            <input type="password1" id="password1" className="password1" required />
            </div>
            <div>
            <input className='buttonForm1' type="submit" value="Sign up" />
            </div>
            
        </form>
    </div>  
    <a href='/'>
    <button className='backButton' >Back</button>
    </a>
    </div>
  )
}

export default Signup