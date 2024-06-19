import { useState } from 'react';
import axios from 'axios';
import '../Pages/PagesCss/RegisterPage.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const RegisterPage = () => {

  // Navigate  Login Page

  const navigate = useNavigate();

  // Toastify link


  // intial State Set

  const intial = {
    username: "",
    email: "",
    password: "",
    phonenumber: ""
  }

  // usestate

  const [register, setRegister] = useState(intial);

  // Form Submit Function

  const registerSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:5000/usercreate", register)
      .then((response) => {
        console.log(response.data.success)
        if (response.data.success) {
          toast.success(response.data.success);
          navigate('/login');
        }
      })
      .catch((error) => { console.error(error) })
  }

  // Change Function

  const handleChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value })
  }


  return (
    <div>
      <form onSubmit={registerSubmit}>
        <div className="login-signup">
          <div className="login-signup-container">
            <h1>SIGN UP</h1>
            <div className="login-signup-fields">
              <input
                type="text"
                placeholder="Name"
                value={register.username}
                name='username'
                onChange={handleChange} />
              <input
                type="email"
                placeholder="Email"
                value={register.email}
                name='email'
                onChange={handleChange} />
              <input
                type="password"
                placeholder="Password"
                value={register.password}
                name='password'
                onChange={handleChange} />
              <input
                type="number"
                placeholder="Phone Number"
                value={register.phonenumber}
                name='phonenumber'
                onChange={handleChange} />
            </div>
            <button type='submit'>Register</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage
