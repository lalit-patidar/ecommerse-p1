import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import {useNavigate} from "react-router-dom"

export default function AccountEdit({title, caption, address, redirect}) {
    const navigate = useNavigate()
  return (
   <Box>
   
    <Grid container sx={{padding:"20px"}}>
        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                <Box>
                    <Typography  sx={{color:"gray",fontSize:"8px"}}>{title}</Typography>
                    <Typography variant='p' sx={{fontWeight:"bold",fontSize:"18px"}}>{caption}</Typography>
                </Box>
            </Grid> 
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
            <Button variant="contained" sx={{width:"60%",padding:"10px"}} onClick={() => navigate("/account/change-your-name")}>Edit</Button>
            </Grid>
    </Grid>
            <Divider/>

   </Box>
  )
}
