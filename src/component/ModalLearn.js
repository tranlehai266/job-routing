import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Chip, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import BasicModal from './BasicModal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color:'#fff'
};

export default function ModalLearn({ job, user }) {
  const [open, setOpen] = useState(false);  
  
  const navigate = useNavigate()
  
  const handleOpen = () => {
    if(user){
      setOpen(true);
    } else {
      navigate("/sign-in")
    }
  };
  
  const handleClose = () => setOpen(false);

  
  return (
    <div>
      <Button onClick={handleOpen} sx={{ padding:'4px 10px', backgroundColor: '#ff8f00','&:hover': {backgroundColor: '#ff8f00', }, color:'#000'}}>Learn More</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4"  textAlign='center'>
            {job.title}
          </Typography>
          <Divider style={{ margin:'5px 0 8px 0'}}></Divider>
          <Typography id="modal-modal-description" textAlign='center' sx={{ mt: 2, fontSize:'16px',fontWeight:'400',lineHeight:'1.5' }}>
            {job.description}
          </Typography>
          <Box textAlign='center' marginTop='20px'>
          <Typography marginBottom='6px' variant="h6">
            Skills:
          </Typography>
          {job.skills.map((skill,index) => (
            <Chip 
            label={skill} key={index}
            style={{
              fontSize: '0.53rem', 
              height:'20px',
              backgroundColor: 'red'
            }}
             />
          ))}
          </Box>
          <Typography textAlign='center' marginTop='20px' variant="h6">
            City: {job.city}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}