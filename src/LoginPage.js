import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import { Typography, Button } from '@mui/material';
import axios from 'axios';


export default function LoginPage({onLoginSucces, setUser}) {
  const [showPassword, setShowPassword] = useState(false);
  
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const fetchData = async() => {
    try {
        const response = await axios.post("https://reqres.in/api/register", {
            email: "eve.holt@reqres.in",
            password: "pistol"
        })
        if (response.status === 200) {
            const id = response.data.id;
            const account = await axios.get(`https://reqres.in/api/user/${id}`);
            const userName = account.data.data.name
            console.log(userName)
            if(onLoginSucces){
                onLoginSucces()
                setUser(userName)
            }
          }
    } catch (error) {
        console.log(error)
    }
}

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
    fetchData()
  };
 
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
        <LockIcon sx={{ fontSize: '30px', borderRadius: '50%', backgroundColor: 'rgb(215, 71, 66)', padding: '12px' }}></LockIcon>
      </Box>
      <Typography sx={{ color: '#fff', textAlign: 'center', marginTop: '5px', marginBottom: '8px', fontSize: '20px' }}>
        Log In
      </Typography>

      <form onSubmit={handleMouseDownPassword}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            helperText=" "
            value="eve.holt@reqres.in"
            id="demo-helper-text-aligned-no-helper"
            label="User name"
            fullWidth
            margin="normal"
          />
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              autoComplete="off"
              value="pistol"
            />
          </FormControl>
          <Button type="submit" variant="contained" sx={{ marginTop: '25px', marginBottom: '25px', backgroundColor: 'rgb(215, 71, 66)' }}>Sign In</Button>
        </Box>
      </form>

      <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
        <Typography sx={{ color: 'rgb(215, 71, 66)', cursor: 'pointer' }}>
          Forgot Password?
        </Typography>
        <Typography sx={{ color: '#fff', cursor: 'pointer', marginTop: '10px' }}>
          Don't have an account? <span style={{ color: 'rgb(215, 71, 66)' }}>Sign up</span>
        </Typography>
      </Box>
    </div>
  );
}
