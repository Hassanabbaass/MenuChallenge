import * as React from 'react';
import { useEffect , useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';


import { getAllCategories } from '../services/getCategories';
import { addCategory } from '../services/AddCategory';
import { deleteCategory } from '../services/DeleteCategory';
import { editCategory } from '../services/EditCategory';
import { getAllCategoriesWithItems } from '../services/getAllCategoriesWIthItems';
import { addItem } from '../services/AddItem';
import { deleteItem } from '../services/DeleteItem';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



const Admin = () => {

  // for the modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // for edit category modal 
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);


  const [CategoryBeingAdded, setCategoryBeingAdded] = useState({
    name: ""
  })
  const handleAddCategory = (e) => {
    e.preventDefault()
    addCategory(CategoryBeingAdded).then((result) => {
      console.log("Category was adedd")
    })
  }

  const handleDeleteCategory = (_id) => {
    deleteCategory(_id)
  }

  const [CategoryBeingEdited, setCategoryBeingEdited] = useState({
    name:""
  })
  const handleEditCategory = (_id,CategoryBeingEdited) => {
    editCategory(_id, CategoryBeingEdited)
  }

  const [allCategories, setAllCategories] = useState([])

  useEffect(() => {
    getAllCategories().then(result => {
      setAllCategories(result.data)
    }).catch(err => {
      console.log(err)
    })
  }, [allCategories])

  const [allCategoriesWithItems, setAllCategoriesWithItems] = useState([])

  useEffect(() => {
    getAllCategoriesWithItems().then(result => {
      setAllCategoriesWithItems(result.data)
    }).catch(err => {
      console.log(err)
    })
  }, [allCategoriesWithItems])

  const [ItemBeingAdded, setItemBeingAdded] = useState({
    name: "",
    price: null,
    description: "",
    image: ""
  })

  const handleAddItem = (CatID, ItemBeingAdded) => {
    addItem(CatID,ItemBeingAdded)
  }

  const handleDeleteItem = (CategoryID, ItemID) => {
    deleteItem(CategoryID, ItemID)
  }

  return (
    <Grid container style={{alignItems:"center", justifyContent:"center", display:"flex", padding:"2rem"}}>
    <Grid item xs={11}>
            <Button onClick={handleOpen}
                style={{ float:'left', marginBottom:"1rem", backgroundColor:"#234f1e"}}
                startIcon={<AddIcon/>}sx={{m: 1}} 
                variant="contained" 
                size="medium">
                Add Category
            </Button> <br/>

        <h2 style={{paddingTop:'2rem'}}>Categories</h2> 
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="caption table" >
        
        <TableHead>
          <TableRow style={{border:"3px solid #234f1e"}}>
            <TableCell>Category Name</TableCell>
            <TableCell align="center">Edit</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{border:"2px solid #234f1e"}}>
          {allCategories.map((item, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="center">
                <Button style={{backgroundColor:"Blue"}} variant="contained"
                 onClick={handleOpen2}
                >Edit</Button>
              </TableCell>
               <TableCell align="center">
                <Button style={{backgroundColor:"red"}} variant="contained"
                  onClick={() => handleDeleteCategory(item._id)}
                >Delete</Button>
              </TableCell>
                     {/* EDIT CATEGORY MODAL  */}
                    <Modal
                      open={open2}
                      onClose={handleClose2}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <TextField id="outlined-basic" label="edit category name" variant="outlined"
                            onChange={(e) => {
                            setCategoryBeingEdited({...CategoryBeingEdited, name: e.target.value})
                            }}
                        />
                        <Button style={{backgroundColor:"Blue", padding:'1rem', right:'-3rem'}} variant="contained"
                          onClick={() => handleEditCategory(item._id,CategoryBeingEdited)}
                        >Confirm</Button>
                      </Box>
                    </Modal>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>







    <h2 style={{paddingTop:'4rem'}}>Items</h2>
    <br/>
    <div>
      <TextField style={{left:'5rem'}} id="outlined-basic" label="name" variant="outlined"
                            onChange={(e) => {
                            setItemBeingAdded({...ItemBeingAdded, name: e.target.value})
                            }}
                        />
                        <br/><br/>
                        <TextField style={{left:'5rem'}} id="outlined-basic" label="price" variant="outlined"
                            onChange={(e) => {
                            setItemBeingAdded({...ItemBeingAdded, price: e.target.value})
                            }}
                        />
                        <br/><br/>
                        <TextField style={{left:'5rem'}} id="outlined-basic" label="description" variant="outlined"
                            onChange={(e) => {
                            setItemBeingAdded({...ItemBeingAdded, description: e.target.value})
                            }}
                        />
                        <br/><br/>
                        <TextField style={{left:'5rem'}} id="outlined-basic" label="image link" variant="outlined"
                            onChange={(e) => {
                            setItemBeingAdded({...ItemBeingAdded, image: e.target.value})
                            }}
                        />      
    </div>
      <div>
      {allCategories.map((item) => (
        <>
         <Button 
         style={{backgroundColor:"#234f1e", left:"-1rem"}}
         startIcon={<AddIcon/>}sx={{m: 1}} 
         variant="contained" 
         size="small"
         onClick={() => handleAddItem(item._id,ItemBeingAdded)}
         >
         item in {item.name}           
        </Button> 
        </>
      ))}
    </div>
    
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="caption table" >
        
        <TableHead>
          <TableRow style={{border:"3px solid #234f1e"}}>
            <TableCell>Category</TableCell>
            <TableCell align="left">Item</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{border:"2px solid #234f1e"}}>
          {allCategoriesWithItems.map((row, r) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {row.name}<br/>
 
              </TableCell>
                {row.items.map((itemrow, rr) => (
                  
                  <div>
                  <TableCell style={{width:'5rem'}}  align="left">{itemrow.name}</TableCell>
                  <TableCell style={{width:'5rem'}} align="left">{itemrow.price}</TableCell>
                  <TableCell style={{width:'20rem'}} align="left">{itemrow.description}</TableCell>
                  <TableCell style={{width:'10rem'}} align="left">
                     <img
                        src={`${itemrow.image}`}
                        style={{height:"3rem", width:"3rem"}}
                        alt="image"
                      />
                  </TableCell>
                  <TableCell style={{width:'20rem'}} align="left">
                    <Button style={{left:"1rem", backgroundColor:'red'}} variant="contained"
                       onClick={() =>handleDeleteItem(row._id,itemrow._id)}
                    >Delete</Button>
                  </TableCell>
                    
                  </div>
                ))}
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>




  














      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <TextField id="outlined-basic" label="Category Name" variant="outlined"
            onChange={(e) => {
              setCategoryBeingAdded({...CategoryBeingAdded, name: e.target.value})
            }}
          />
          <Button style={{backgroundColor:"Blue", padding:'1rem', right:'-1rem'}} variant="contained"
            onClick={handleAddCategory}
          >Add Category</Button>    
             
        </Box>
      </Modal>
      



    </Grid>
    </Grid>
  )
}

export default Admin