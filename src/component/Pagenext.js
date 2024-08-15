import React from 'react'
import { Box, Pagination  } from '@mui/material';


function Pagenext({ page, totalPages,handlePageChange}) {
  return (
    <div>
      <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 2,
            }}
          >
            <Pagination 
              count={totalPages} 
              page={page}
              onChange={handlePageChange}
              sx={{
                '& .MuiPaginationItem-root': {
                  color: 'white',              
                  borderColor: 'transparent',        
                },
                '& .Mui-selected': {
                  backgroundColor: 'red !important',    
                  color: 'white',                   
                }
            }}
            />
          </Box>
    </div>
  )
}

export default Pagenext
