import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useDispatch, useSelector } from 'react-redux';

const HoverCart = () => {
  const dispatch = useDispatch();
  const { CartList } = useSelector((state) => state.cart);

  // total price logic 
  const totalPrice = CartList
    .reduce((prev, curr) => prev + curr.quantity * curr.price, 0)
    .toFixed(2);

  // total items
  const totalItems = CartList.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Box className="bg-[#009F7F] p-4 rounded-l-md text-white flex flex-col items-center">
      <Typography
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          fontWeight: 600,
          fontSize: '16px',
        }}
        variant="body1"
      >
        <ShoppingBasketIcon /> {totalItems} items
      </Typography>

      <Button
        sx={{
          color: '#009F7F',
          backgroundColor: 'white',
          marginTop: '10px',
          fontWeight: 600,
        }}
      >
        ${totalPrice}
      </Button>
    </Box>
  );
};

export default HoverCart;
