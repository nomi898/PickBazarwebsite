import { Modal, Typography, Box, Grid, Button } from '@mui/material';
import React, { useState } from 'react'
import { ModalStyle } from '../assets/style';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Divider from '@mui/material/Divider';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const ProductDetailModal = (props) => {
    const {open,handleOpen, handleClose } =props;
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle}>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* image portion */}
        <Grid size={6}>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>

      </Swiper>
        </Grid>
        {/* text portion  */}
        <Grid size={6}>
          {/* fav & star name weight  */}
        <Box className='flex justify-between'>
            <Box>
              <Typography variant='h4'>Apples</Typography>
              <Typography sx={{color:'grey'}} variant='body1'>1lb</Typography>
            </Box>
            <Box className='flex flex-col '>
              <FavoriteBorderIcon />
              <Button sx={{marginTop:'10px',bgcolor:'#009f7f'}} variant='contained'>4.67 <StarBorderIcon/></Button>
            </Box>
            </Box>
            {/* description  */}
            <Typography sx={{mt:5,color:'grey'}}  variant='body1'>An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are ... The skin of ripe apples is generally red, yellow, g...</Typography>
            <Typography variant='h4' sx={{color:'#009f7f',mt:3}}>$1.60</Typography>
            {/* add to cart button  */}
            <Box className='flex'>
              <Button sx={{marginTop:'10px',bgcolor:'#009f7f',px: 6, py:2,mx:2 }} variant='contained'>Add to Shopping Cart</Button>
              <Typography sx={{my:3,color:'grey' }} variant='body1'>18 pieces available</Typography>
            </Box>
            {/* divider line  */}
            <Divider sx={{ my: 2 }} />
            <Box className='flex my-7'>
              <Typography>Categories</Typography>
              <Button sx={{mx:3, color:"black"}} variant='outlined'>fruits & Vegetables</Button>
              <Button sx={{color:"black"}} variant='outlined'>fruits</Button>
            </Box>
            <Box className='flex my-5'>
              <Typography sx={{mx:3}} >Seller</Typography>
              <Button sx={{mx:3,textDecoration:'Underline' ,color: '#009f7f'}} variant='Text'>Grocey Shop</Button>
            </Box>
           
        </Grid>
      </Grid>
      
    </Box>
    <Divider />
        </Box>
      </Modal>
    </>
  )
}

export default ProductDetailModal
