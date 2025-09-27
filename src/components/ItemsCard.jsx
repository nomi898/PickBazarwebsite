
import React, { useState } from 'react';
import { Box,Button,Card,CardContent,CardMedia,Grid,Typography,} from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ProductDetailModal from './ProductDetailModal';
import { products } from '../../utils/product';


// states 
const ItemsCard = () => {
const [open, setOpen] = useState(false);
const [currentProductId, SetcurrentProductId] = useState({});
const handleOpen = (product)=> {
  SetcurrentProductId(product.id);
  setOpen(true);
};
const handleClose = () => setOpen(false);
  return (
    <>
    <Box sx={{ width: '100%', maxWidth: 1280, mx: 'auto', p: 2 }}>
     
      <Grid container spacing={2}>
        {products.map((product) => (
          
          <Grid key={product.id} sx={{
            flex: '1 1 100%',       // mobile
            '@media (min-width:600px)': { flex: '1 1 50%' },   // small
            '@media (min-width:900px)': { flex: '1 1 20%' },   // medium
          }}>
            <Card sx={{ borderRadius: 3, boxShadow: 2,maxWidth: 300, mx: "auto"  }}>
              {/* image of product  */}
              <CardMedia onClick={()=>{handleOpen(product)}}
                component="img"
                height="220"
                image= {product.image}
                alt={product.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                {/* name of product  */}
                <Typography gutterBottom variant="h6" component="div">
                  {product.name}
                </Typography>
                {/* weight of product  */}
                <Typography variant="body2" sx={{ color: 'grey', mb: 1 }}>
                  {product.weight}
                </Typography>
                {/* price of product  */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" sx={{ color: '#009f7f' }}>
                    {product.price}
                  </Typography>
                  {/* button of cart text and icon ShoppingBasketIcon  */}
                  <Button
                    startIcon={<ShoppingBasketIcon />}
                    sx={{
                      border: '1px solid grey',
                      borderRadius: '50px',
                      color: '#009f7f',
                      textTransform: 'uppercase',
                      px: 2,
                      py: 0.5,
                    }}
                  >
                    Cart
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      /* props for opening of modal  */
      {
        open &&(
      <ProductDetailModal open = {open} 
      currentProductId={currentProductId}
       handleClose= {handleClose} />
      )}
    </Box>
    
    </>
  );
};

export default ItemsCard;
