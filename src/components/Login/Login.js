import React, {useState} from "react";

import "./Login.css";

import Logo from "../../assets/images/basma-logo.svg";

import Axios from "axios";


const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    const [usernameError, setUserNameError] = useState("");

    const loginHandler = async (e) => {
        e.preventDefault();
        try {
          await Axios.post("http://localhost:8000/api/admin/login", {
            email: email,
            password: password,
          }).then((response) => {
              if(response.status === 200){
                setStatus(200);
                response.data.access_token && window.localStorage.setItem("token", response.data.access_token) && props.updateIsAuth(response.data.access_token);
                response.data.admin && window.localStorage.setItem("admin", JSON.stringify(response.data.admin));
                setEmail('');
                setPassword('');
                window.location.replace('/admin/dashboard');
              }
          });
         
        } catch (error) {
            console.log(error)
          if (error.response) {
            setUserNameError(error.response.data.error);
            if (!error.response.data.error.email) {
              setUserNameError("Invalid Email or Password");
            }
          }
        }
      };
    // if(status == 200){
    //     return <Redirect to="/admin/dashboard" />;
    // }
  return (
    <div id="login-form" className="main-container display-flex">
      <div className="inner-container display-flex">
        <div className="form-container display-flex">
          <div className="header-container">
            <img src={Logo} alt="" className="form-logo"/>
            <h3 className="form-title">Welcome, Please login</h3>
          </div>
          <div className="form-inner-container">
            <form>
              <div className="input-container">
                  <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value) } required/>
              </div>
              <div className="input-container">
                  <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value) } required/>
              </div>
              <div style={{ fontSize: '13px', color: "#ff2d47", display: "block", fontStyle: 'italic', textAlign: 'center' }}>{usernameError}</div>
              <div className="submit-container">
                  <button type="submit" onClick={loginHandler}>Log In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
