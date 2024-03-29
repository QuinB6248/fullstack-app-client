import React from 'react'
import '../component.css'

export default function SignUpForm(props) {
  const { onChange, onSubmit, values} = props
  const validTrue = values.validation
  const warning =  <p style={{color: "red"}}>this is not a valid email-address</p>
  const valid = !validTrue && warning
  
  return (
    <div className="signUpLogIn">
    <div className='loginBox'>
      <form onSubmit={onSubmit}>
        <div className='loginSpace'>
          <div>
            <label>USERNAME</label>
          </div>
          <input name={'name'} onChange={onChange} value={values.name} placeholder='username' required/>
          <div>
            <label>EMAIL</label>
            {valid}
          </div>
          <input name={'email'} onChange={onChange} value={values.email} placeholder='email' required/>
          <div>
            <label>PASSWORD</label>
          </div>
          <input name={'password'} onChange={onChange} value={values.password} placeholder='password' required/>
          <div>
            <button type='submit' className='loginButton buttonField '>SIGNUP</button>
          </div>
        </div>
      </form>
    </div>
    </div>
  )
}