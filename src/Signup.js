import React, { useState } from 'react'
import SmLogo from './images/logosmall.png'
import './Signup.css'
import { createUserWithEmailAndPassword,  } from 'firebase/auth'
import { auth } from './firebase'

export const Signup = (props) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(email);
// }

const signUp = (e) => {
  e.preventDefault();
  createUserWithEmailAndPassword(auth, email, password)
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
          <h1 className='titleAbout'>Join the movement !</h1>
        </div>
      </header>
      <div>
        <form className='formLog1' onSubmit={signUp}>
            {/* <div>
            <label className='textForm' htmlFor="name"> Full name :   </label>
            <input value={name} type="text" id="email" placeholder='Kobe Bryant' onChange={(e) => setName(e.target.value)}className="email1" required />
            </div> */}
            <div>
            <label className='textForm' htmlFor="email"> Email :   </label>
            <input value={email} type="text" id="email" placeholder='youremail@gmail.com' onChange={(e) => setEmail(e.target.value)} className="email1" required />
            </div>
            <div>
            <label className='textForm' htmlFor="password">Password :   </label>
            <input value={password} type="password1" id="password" placeholder='********' onChange={(e) => setPassword(e.target.value)} className="password1" required />
            </div>
            {/* <div>
            <label className='textForm' htmlFor="password">Confirm the password :   </label>
            <input type="password1" id="password1"  className="password1" required />
            </div> */}
            <div>
            <input className='buttonForm1' type="submit" value="Sign up" />
            <div className='textNew'>
              <h5 className='textNew1'>Already have an account ?   </h5>
             <h5 className='newAccount' onClick={() => props.onFormSwitch('login')}>   Log in here</h5>
            </div>
            </div>
            
        </form>
    </div>  
    <a href='/'>
    <button  className='backButton' >Back</button>
    </a>
    </div>
  )
}

export default Signup