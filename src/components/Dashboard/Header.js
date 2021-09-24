import React, {useState} from "react";

import Logo from "../../assets/images/basma-logo.svg";
import LogoutModal from './LogoutModal';


const Header = () => {
  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem('admin')));
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <div className="header-container">
      <div className="header-welcome-container">
        <div className="logo-container">
          <img src={Logo} alt="" />
        </div>
        <h2 className="welcome-container">Welcom Back, <b>{admin.firstname} {admin.lastname}</b></h2>
      </div>
      <div className="logout-container">
        <div className="logout-button" onClick={handleShow}>Logout</div>
      </div>
    <LogoutModal show={show} setShow={setShow}/>
    </div>
  );
};

export default Header;
