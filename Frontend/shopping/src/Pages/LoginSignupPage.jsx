import '../Pages/PagesCss/LoginSignupPage.css'
import {toast} from 'react-toastify';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const LoginSignupPage = () => {

  // Navigate  Login Page

  const navigate = useNavigate();

  // // Toastify link

  // const notify = () => {
  //   toast.success('Login Successfully', {
  //     autoClose: 5000,
  //     closeButton: false,
  //     hideProgressBar: true,
  //     className: 'custom-toast',
  //     style: { width: '400px', minHeight: '50px' },
  //   });
  // };

  // intial

  const intial = {
    email: "",
    password: ""
  }

  // useState

  const [login, setLogin] = useState(intial);

  // handleChange

  const valueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  // Form Submit

  const loginSubmit = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:5000/logintokencreate", login)
      // local storage used to store the data
      .then((storedata) => {
        console.log(storedata.data,"login")
        let token = storedata.data.tokenname;
        // set this token in local storage
        localStorage.setItem("Token",token)
        //  get token success message
        if (storedata.data.success) {
          toast.success(storedata.data.success);
          navigate('/');
        }
      })
      .catch((error) => { console.error(error) })
      
  }


  return (
    <div>
      <form onSubmit={loginSubmit} className="login-signup">
        <div className="login-signup-container">
          <h1>SIGN IN</h1>
          <div className="login-signup-fields">
            <input
              type="email"
              placeholder="Email"
              value={login.email}
              name='email'
              onChange={valueChange} />
            <input
              type="password"
              placeholder="Password"
              value={login.password}
              name='password'
              onChange={valueChange} />
          </div>
          {/* <button onClick={notify} type='submit'>Login <ToastContainer /></button> */}
          <button type='submit'>Login</button>
          <p className="login-signup-login">
            Already have an account ?<Link to={'/register'}><span> Register</span></Link>
          </p>
          <div className="login-signup-agree">
            <input type="checkbox" name="" id="" />
            <p>By Continuing, i agree to the terms of use & privacy policy.</p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginSignupPage
