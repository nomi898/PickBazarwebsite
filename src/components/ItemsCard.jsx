
import React, { useState } from 'react';
import { Box,Button,Card,CardContent,CardMedia,Grid,Typography,} from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Apple from '../assets/images/Apples.webp';
import BabySpinach from '../assets/images/BabySpinach.webp';
import blueberries from '../assets/images/blueberries.webp';
import BrusselsSprouts from '../assets/images/BrusselsSprouts.webp';
import CelerySticks from '../assets/images/CelerySticks.webp';
import clementines from '../assets/images/clementines.webp';
import Corn from '../assets/images/Corn.webp';
import Cucumber from '../assets/images/Cucumber.webp';
import ProductDetailModal from './ProductDetailModal';

const products = [
  { id: 1, name: 'Apples', weight: '1lb', price: '$1.60', image: Apple },
  { id: 2, name: 'BabySpinach', weight: '1lb', price: '$1.60', image: BabySpinach },
  { id: 3, name: 'Blueberries', weight: '1lb', price: '$1.60', image: blueberries },
  { id: 4, name: 'BrusselsSprouts', weight: '1lb', price: '$1.60', image: BrusselsSprouts },
  { id: 5, name: 'CelerySticks', weight: '1lb', price: '$1.60', image: CelerySticks },
  { id: 6, name: 'Clementines', weight: '1lb', price: '$1.60', image: clementines },
  { id: 7, name: 'Corn', weight: '1lb', price: '$1.60', image: Corn },
  { id: 8, name: 'Cucumber', weight: '1lb', price: '$1.60', image: Cucumber },
];



const ItemsCard = () => {
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
  return (
    <>
    <Box sx={{ width: '100%', maxWidth: 1280, mx: 'auto', p: 2 }}>
     
      <Grid container spacing={2}>
        {products.map((product) => (
    
          <Grid key={product.id} item xs={12} sm={6} md={3}>
            <Card sx={{ borderRadius: 3, boxShadow: 2,maxWidth: 300, mx: "auto"  }}>
              <CardMedia onClick={handleOpen}
                component="img"
                height="220"
                image= {product.image}
                alt={product.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'grey', mb: 1 }}>
                  {product.weight}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" sx={{ color: '#009f7f' }}>
                    {product.price}
                  </Typography>
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
      <ProductDetailModal open = {open} handleOpen={handleOpen} handleClose= {handleClose} />
    </Box>
    
    </>
  );
};

export default ItemsCard;
