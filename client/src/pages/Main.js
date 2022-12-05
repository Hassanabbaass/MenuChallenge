import * as React from 'react';
import { useEffect , useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';

import { getAllCategoriesWithItems } from '../services/getAllCategoriesWIthItems';

const Main = () => {

  const [allCategoriesWithItems, setAllCategoriesWithItems] = useState([])

  useEffect(() => {
    getAllCategoriesWithItems().then(result => {
      setAllCategoriesWithItems(result.data)
    }).catch(err => {
      console.log(err)
    })
  }, [allCategoriesWithItems])

  return (
    <div>
      {allCategoriesWithItems.map((item, i) => (

        <div key={i} style={{height:"100vh", fontSize:"20px", fontWeight:"bold"}} id={item.name} >
        <Box sx={{ flexGrow: 1}} style={{padding:"2rem 1rem", height:"100vh"}}>
          <h1 style={{display:'flex'}}>{item.name}</h1> 
          <Grid container spacing={2}>
              {item.items.map((itemrow, rr) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={rr}>
                  <Card style={{backgroundColor:'#cefad0', boxShadow:"4px 4px #0a0a0a"}} >
                    <CardMedia
                      component="img"
                      height="140"
                      src = {itemrow.image}
                    />
                    <CardContent>
                      <Typography style={{color:'black'}} gutterBottom variant="h5" component="div">
                        {itemrow.name}
                      </Typography>
                      <Typography style={{color:'black'}} variant="body2" color="text.secondary">
                        Price: {itemrow.price}
                      </Typography>
                      <Typography style={{color:'black'}} variant="body2" color="text.secondary">
                        Description: {itemrow.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Box>
        </div>

      ))}
    </div>
  )
}

export default Main