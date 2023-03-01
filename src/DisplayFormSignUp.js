import React, { useState } from 'react'
import { Login } from "./Login"
import { Signup } from './Signup'

function DisplayFormSignUp() {
    const [currentForm, setCurrentForm] = useState('signup')
  
    const toggleForm = (formName) => {
       setCurrentForm(formName)
    }

    return (
    
    <div>
        {
            currentForm === "signup" ? <Signup onFormSwitch={toggleForm}/> :<Login onFormSwitch={toggleForm}/>
        }


    </div> 
  )
}

export default DisplayFormSignUp