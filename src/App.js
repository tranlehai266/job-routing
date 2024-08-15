import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Jobtitle from "./component/Jobtitle";
import Pagenext from "./component/Pagenext";
import Header from "./component/Header";
import jobs from './jobs.json';



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  const [page, setPage] = useState(1);
  const [searchItem, setSearchItem] = useState('');
  const [user, setUser] = useState(null)

  const jobsPerPage = 5;
  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const currentJobs = jobs.slice((page - 1) * jobsPerPage, page * jobsPerPage);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSearchItem = (item) => {
    setSearchItem(item);
  };

  

  return (
    <ThemeProvider theme={darkTheme}>
         <Header onSearchChange={handleSearchItem} user={user} setUser={setUser} />
        <Routes>
          <Route path="/"  element={<Jobtitle jobs={currentJobs} searchItem={searchItem} user={user}/>}/>
          <Route path="/sign-in" element={<Jobtitle jobs={currentJobs} searchItem={searchItem} user={user}/>} />
        </Routes>
        <Pagenext page={page} totalPages={totalPages} handlePageChange={handlePageChange} />
    </ThemeProvider>
  );
}

export default App;
