import React from 'react'

import {Modal, Button} from 'react-bootstrap';

const LogoutModal = (props) => {
    const handleClose = () => props.setShow(!props.show);
    const handleLogout = () => {
        props.setShow(!props.show)
        localStorage.removeItem("token");
        localStorage.removeItem("admin");
        window.location.replace("/admin/login");
      };
    return (
        <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log Out?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>Are you sure you want to log out?</div><br/>
            <div>Press No if you want to continue work. Press Yes to logout current user.</div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="no-logout" variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button className="yes-logout" variant="primary" onClick={handleLogout}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default LogoutModal
