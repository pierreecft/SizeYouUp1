import React from 'react'
import './Login.css'
import SmLogo from './images/logosmall.png'

function Login() {
  return (
    <div>
        <header className='headerAbout'>
        <div className='divImg'>
          <a href='/'>
          <img src={SmLogo} className="smallLogo" alt="logo" />
          </a>
        </div>
        <div className='textTitle'>
          <h1 className='titleAbout'>Welcome Back !</h1>
        </div>
      </header>
      <div>
        <form className='formLog'>
            <div>
            <label className='textForm' htmlFor="email"> Email :   </label>
            <input type="text" id="email" className="email" required />
            </div>
            <div>
            <label className='textForm' htmlFor="password">Password :   </label>
            <input type="password" id="password" className="password" required />
            </div>
            <div>
            <input className='buttonForm' type="submit" value="Log in" />
            </div>
            
            <div className='textNew'>
              <h5 className='textNew1'>New on Size You Up ?   </h5>
              <a className='newAccount' href='Signup'><h5>   Create an account</h5></a>
            </div>

            <a className='forgot' >Forgot password ? </a>
            
        </form>
    </div>  
    <a href='/'>
    <button className='backButton1' >Back</button>
    </a>
    
    </div>
  )
}

export default Login;