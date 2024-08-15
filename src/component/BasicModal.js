import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginPage from '../LoginPage';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ setUser }) {
  const [open, setOpen] = useState(false);
  const [loggedIn , setLoggedIn] = useState(false)
  const navigate = useNavigate()

  const handleOpen = () => {
    setOpen(true);
    navigate("/sign-in")
  }
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  }

  const handleLogout = () => {
    setLoggedIn(false)
    setUser(null)
    handleClose();
  };

  const handleLoginSuccess = () => {
    setLoggedIn(true)
    handleClose()
  }

 
  return (
    <div>
      <Box  display='flex' alignItems='center' justifyContent='center' width='200px'>
      {loggedIn ? (
          <Button onClick={handleLogout} variant='plain' sx={{ borderRadius: '30px' }}>
            <LogoutIcon sx={{ fontSize: '30px', marginRight: '6px' }} />
            Sign Out
          </Button>
        ) : (
          <Button onClick={handleOpen} variant='plain' sx={{ borderRadius: '30px' }}>
            <LoginIcon sx={{ fontSize: '30px', marginRight: '3px' }} />
            Sign In
          </Button>
        )}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <LoginPage onLoginSucces={handleLoginSuccess} setUser={setUser}></LoginPage>
          </Box>
        </Modal> 
      </Box>
    </div>
  );
}
