import React, {useState, useEffect} from 'react'
import Helmet from 'react-helmet'
import {  Link, useNavigate } from "react-router-dom";

const Register = () => {

  const [accountCreated, setAccountCreated] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    re_passsword: ''
  })

  useEffect(() => {
    redirect()
  })

  const {name, email, password, re_password} = formData

  const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const onSubmit = e => {
    e.preventDefault()
    if (password === re_password){
      signup(name, email, password, re_password)
        } else {
      return alert("Passwords are not the same")
    }
    
  };

  let navigate = useNavigate()
  

  let redirect = ()  => {
    if(accountCreated){
        console.log('redirected')
        return navigate("/login")
        }
    }

  const signup= async  (name, email, password, re_password) => {
  
    let response = await fetch('http://127.0.0.1:8000/api/accounts/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify({name, email, password, re_password})
    })
  
    let data = await response.json()
    
    //remove items from local storage
    if(!response.ok){
      setAccountCreated(false)
  
      if( data.error === 'User with this email already exists'){
        return alert("Account with this email already exists")
      }
      
      
      window.alert("Unable to create account try again later")
      return console.log('not signed up') 
      
    } else {
      setAccountCreated(true)
      console.log("sign up success") 
      return alert("An email has been sent to your email account for you to verify your account")
  
    }
  
    
    
      
  }

  return (
    <div style={{marginTop:'100px', textAlign:'center' }}>
      <Helmet>
        <title>Register</title>
        <meta 
          name="description"
          content='login page'
        />
      </Helmet>
      <h1>Register</h1>
      <p>Register new account</p>

      <form onSubmit={e => onSubmit(e)} style={{margin:5}}>
        <div className='form-group' style={{margin:5}}>
            <input
                className='form-control'
                type='text'
                placeholder='name'
                name='name'
                value={name}
                onChange={e => onChange(e)}
                required
            />
        </div>
        <div className='form-group' style={{margin:5}}>
            <input
                className='form-control'
                type='email'
                placeholder='Email'
                name='email'
                value={email}
                onChange={e => onChange(e)}
                required
            />
        </div>
        <div className='form-group' style={{margin:5}}>
            <input
                className='form-control'
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                onChange={e => onChange(e)}
                minLength='6'
                required
            />
        </div>
        <div className='form-group' style={{margin:5}}>
            <input
                className='form-control'
                type='password'
                placeholder='confirm Password'
                name='re_password'
                value={re_password}
                onChange={e => onChange(e)}
                minLength='6'
                required
            />
        </div>
        <button className='btn btn-primary' style={{margin:5}} type='submit'>Sign up</button>
    </form>
    </div>
  )
}

export default Register