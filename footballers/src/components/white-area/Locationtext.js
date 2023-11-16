import { Box, Typography } from '@mui/material'
import React from 'react'

const Locationtext = () => {
  return (
    <>
    <Box sx={{minHeight:"20vh",overflowX:"hidden"}}>
        <Typography sx={{display:"flex", justifyContent:"center", marginTop:"45px"}}>Please select location.</Typography>
    </Box>
      
    </>
  )
}

export default Locationtext
