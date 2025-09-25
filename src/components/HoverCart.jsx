import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const HoverCart = () => {
  return (
    <Box className='bg-[#009F7F] p-4 rounded-l-md text-white flex flex-col'>
        <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}  variant='body'><ShoppingBasketIcon/> 0 items</Typography>
        <Button sx={{color: '#009F7F', backgroundColor:'white', marginTop:'10px'}}> $0.00</Button>
    </Box>
  )
}

export default HoverCart
