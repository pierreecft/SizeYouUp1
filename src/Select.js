import React from 'react'
import './Select.css'
import SmLogo from './images/logosmall.png'
import adidas from './images/adidas.png'
import celio from './images/celio.png'
import champion from './images/champion.png'
import hm from './images/h&m.png'
import hollister from './images/hollister.png'
import jules from './images/jules.png'
import levis from './images/levis.png'
import mango from './images/mango.png'
import nb from './images/newbalance.png'
import puma from './images/puma.png'
import nike from './images/nike.png'
import ralph from './images/ralph.png'
import tnf from './images/tnf.png'
import tommy from './images/tommy.png'
import zara from './images/zara.png'



function Select() {
    return (
    <div>
        <header className='headerSelect'>
        <div className='divImg'>
          <a href='/'>
          <img src={SmLogo} className="smallLogo2" alt="logo" />
          </a>
        </div>
        <div className='textTitle1'>
          <h1 className='titleAbout1'> Select your favorite brands</h1>
        </div>
      </header>
      <div className='selectLogos'>
        <div>
            <div className='adidas'>
            <img src={adidas} className="smallLogo1" alt="logo" />
            </div>
            <div className='adidas'>
            <img src={celio} className="smallLogo1" alt="logo" />
            </div>
            <div className='adidas'>
            <img src={champion} className="smallLogo1" alt="logo" />
            </div>
        
      
        </div>
      <div>
      <div className='adidas'>
            <img src={hm} className="smallLogo1" alt="logo" />
            </div>
            <div className='adidas'>
            <img src={hollister} className="smallLogo1" alt="logo" />
            </div>
            <div className='adidas'>
            <img src={jules} className="smallLogo1" alt="logo" />
            </div>
      
      </div>
      <div>
      <div className='adidas'>
            <img src={levis} className="smallLogo1" alt="logo" />
            </div>
            <div className='adidas'>
            <img src={mango} className="smallLogo1" alt="logo" />
            </div>
            <div className='adidas'>
            <img src={nb} className="smallLogo1" alt="logo" />
            </div>
    
      </div>
      <div>
      <div className='adidas'>
            <img src={nike} className="smallLogo1" alt="logo" />
            </div>
            <div className='adidas'>
            <img src={puma} className="smallLogo1" alt="logo" />
            </div>
            <div className='adidas'>
            <img src={tnf} className="smallLogo1" alt="logo" />
            </div>
    
      </div>
      <div>
      <div className='adidas'>
            <img src={ralph} className="smallLogo1" alt="logo" />
            </div>
            <div className='adidas'>
            <img src={tommy} className="smallLogo1" alt="logo" />
            </div>
            <div className='adidas'>
            <img src={zara} className="smallLogo1" alt="logo" />
            </div>
      
      </div>
      
      

      </div>
      <a href='/'>
      <button className='backButton2' >Back </button>
      </a>
    </div>
  )
}

export default Select;