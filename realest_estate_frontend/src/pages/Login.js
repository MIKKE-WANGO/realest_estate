import React , {useState,useEffect } from 'react'
import {  Link, useNavigate } from "react-router-dom";
import Helmet from 'react-helmet'

const Login = (props) => {


  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    redirect()
  })

  //destructure to access formData keys  individually
  const {email, password} = formData

  

  const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const onSubmit = e => {
    e.preventDefault()
    Loginuser(email, password)
   
  };

  let navigate = useNavigate()

  let redirect = ()  => {
    if(props.isAuthenticated){
        console.log('redirected')
        return navigate('/')
        }
    }

    
  async function  Loginuser  (email, password)  {
    //retrieve refresh and access
    let response = await fetch('http://127.0.0.1:8000/api/token/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify({email, password})
    })

    //remove items from local storage
    if(!response.ok){
      localStorage.removeItem('access')
      localStorage.removeItem('refresh')
      props.setisAuthenticated(false)
      window.alert("Email or password is incorrect")
      return console.log('not authorised') 
    }

    let data = await response.json()
   
    //set access in localstorage of browser
    localStorage.setItem('access', data.access)
    localStorage.setItem('refresh', data.refresh)
    props.setisAuthenticated(true)

    console.log("login success")
    
  }

  return (
    <div style={{marginTop:'100px', textAlign:'center' }}> 
      <Helmet>
        <title>Login</title>
        <meta 
          name="description"
          content='login page'
        />
      </Helmet>
      <h1>Sign in</h1>
      <p>Sign into your account</p>

      <form onSubmit={e => onSubmit(e)} style={{margin:5}}>
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
            <button className='btn btn-primary' style={{margin:5}} type='submit'>Login</button>
        </form>
        <p>Dont have an account <Link to ='/register'>Register</Link></p>
    </div>
  )
}

export default Login