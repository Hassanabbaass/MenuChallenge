import React from 'react'
import { useState } from 'react';
import { Box, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {NavLink} from 'react-router-dom';
import { LoginAdmin } from '../services/AdminLogin';


const AdminLogin = () => {

  const [AdminInfo, setAdminInfo] = useState({
    username: "",
    password: ""
  })

  const handleAdminLogin = (AdminInfo) => {
    LoginAdmin(AdminInfo)
  }

  return (
       <Grid container sx={{p:10}} spacing={0} style={{ minHeight: '70vh', backgroundColor:'white', display:'flex', justifyContent:'center' }}>

       <Box component="form" style={{backgroundColor:'white', border:'1px solid #234f1e', boxShadow:'5px 5px #234f1e'}}> 

          <Grid item xs={12} sx={{pt:5, px:5}} style={{display:"flex" ,alignItems:"center", justifyContent:"center"}} >
            <TextField style={{width:'30vw'}} id="outlined-basic" label="Username" variant="outlined"
              onChange={(e) => {
              setAdminInfo({...AdminInfo, username: e.target.value})
            }}
            />
          </Grid>

          <Grid item xs={12} sx={{pt:3,px:5}} style={{display:"flex" ,alignItems:"center", justifyContent:"center"}}>
            <TextField style={{width:'30vw'}} id="outlined-basic" label="Password" variant="outlined" 
              onChange={(e) => {
              setAdminInfo({...AdminInfo, password: e.target.value})
              }}
            />
          </Grid>
          

          <Grid item xs={12} sx={{pt:7,px:5}} style={{display:"flex" ,alignItems:"center", justifyContent:"center"}}>
              <Button style={{backgroundColor:'#234f1e'}} variant="contained" component="label"
              onClick={() => {handleAdminLogin(AdminInfo)}}
              >
               <NavLink style={{textDecoration:"none", color:'white'}} to='/Admin'>Login</NavLink> 
              </Button>
          </Grid>
          
          <Grid item xs={12} sx={{pt:5, px:5}} style={{display:"flex" ,alignItems:"center", justifyContent:"center", fontWeight:"bold"}} >
            This login is only for the admin
          </Grid>

       </Box>

    </Grid>
  )
}

export default AdminLogin