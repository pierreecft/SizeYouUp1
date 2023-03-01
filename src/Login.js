import React, { useState } from 'react'
import './Login.css'
import SmLogo from './images/logosmall.png'
import { auth } from './firebase'
import { signInWithEmailAndPassword,  } from 'firebase/auth'

export  const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(email);
  // }

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
    })
    .catch((error) => {
      console.log(error)
    });
  }

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
        <form className='formLog' onSubmit={signIn}>
            <div>
            <label className='textForm' htmlFor="email" > Email :   </label>
            <input value={email} type="text" id="email" onChange={(e) => setEmail(e.target.value)} className="email" placeholder="youremail@gmail.com" required />
            </div>
            <div>
            <label className='textForm' htmlFor="password">Password :   </label>
            <input value={password} type="password" id="password" onChange={(e) => setPassword(e.target.value)} className="password" placeholder="********" required />
            </div>
            <div>
            <input className='buttonForm' type="submit" value="Log in" />
            </div>
            
            <div className='textNew'>
              <h5 className='textNew1'>New on Size You Up ?   </h5>
              <h5 className='newAccount' onClick={() => props.onFormSwitch('signup')}>   Create an account here</h5>
            </div>

            <a className='forgot' href='/'>Forgot password ? </a>
            
        </form>
    </div>  
    <a href='/'>
    <button  className='backButton1' >Back</button>
    </a>
    
    </div>
  )
}

export default Login;