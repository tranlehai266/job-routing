import * as React from 'react';
import Box from '@mui/material/Box';
import {  Chip, Divider, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import ModalLearn from './ModalLearn';


export default function BoxSystemProps({ job, user }) {
  

  return (
    <Paper
    elevation={3}
    sx={{
      padding: 2,
      borderRadius:3,
      maxWidth: 320,
      bgcolor:"#424242",
      margin:'30px auto'
    }}
  >
    <Box
      height={250}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
    <Box>
      <Typography textAlign="center" color="#fff">
        {job.title}
      </Typography>
      <Divider style={{ margin:'5px 0 8px 0'}}>
      </Divider>
      <Box margin='8px 0 8px 0' display='flex' flexWrap='wrap' gap={1}>
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
      <Typography color="#fff"width='320px'>
        {job.description}
      </Typography>
    </Box>
    <Box textAlign='center' >
      <ModalLearn job={job} user={user}></ModalLearn>
    </Box>
  </Box>
  </Paper>
  );
}