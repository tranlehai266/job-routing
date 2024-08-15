import React from 'react';
import Box from "./Box";
import Grid from '@mui/material/Grid';


function Jobtitle({ jobs, searchItem, user}) {
  
  const filterJobs = jobs.filter((job) => 
    job.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <>
      <Grid container maxWidth="lg" spacing={2} style={{ display: 'flex', alignItems: 'center', margin: '0 auto' }}>
        {filterJobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>               
            <Box job={job} user={user} />            
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Jobtitle;
