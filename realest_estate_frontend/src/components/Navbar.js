import React,{ Fragment} from 'react'
import { Link,useNavigate} from "react-router-dom";


const Navbar = (props) => {


  //const location = useLocation();

  //useEffect(() => {
  //  props.checkAuthenticated()
    //props.load_user()
  //},[location])  

  let navigate = useNavigate()

  const logout = () => {
    props.setisAuthenticated(false)
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
    console.log("Logout success")
    navigate("/")
  }

  
       
 
 
  return (
    <div className="nav-bar">
        <div className="nav-logo">
            <h2 >Realest Estate</h2>
            
        </div>
        <div className="nav-links" id="mobileMenu">
            <ul>
                
                <Link to="/"><li> Home</li></Link>
                <Link to="/listings"><li>Listings</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>              
                <Link to="/Register"><li>Register</li></Link>
                <Link   to='/login'><li>Login</li></Link>
                <p style={{color:'grey', display:'inline'}} onClick={logout}><li>Logout</li></p>
                
       
            </ul>
        </div>
        
    </div>
    
  )
}

export default Navbar