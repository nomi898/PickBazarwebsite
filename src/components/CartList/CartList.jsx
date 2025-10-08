import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { products } from '../../../utils/product';
import { ButtonGroup } from '@mui/material';
import { addToCart, DeletefromCart, removeFromCart } from '../../store/slices/Cartlist';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CartList(props) {
  const { openCartList, toggleDrawer } = props;

  const {CartList}= useSelector((state)=>state.cart);
  console.log(CartList,"CartList");

  const dispatch= useDispatch();
  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={openCartList} onClose={toggleDrawer(false)}>
        {/* drawer */}
        <Box 
        sx={{ width: 500 }} role="presentation" >
          
            {CartList?.length > 0 ? (
              <div >
                {/* product card  */}
                <h1 className='font-bold text-center text-2xl rounded-sm border-1 mx-2'>Cart Items</h1>
                {CartList.map((product) => (
                  <div className='flex items-center rounded-medium bg-gray-100 border-1 m-2'>
                    <img className='w-[100px]' src={product.image} alt={product.name} />
                    <div className='px-8'>
                    <h3 className='font-bold'>{product.name}</h3>
                    <p><span className='font-bold'>Price:</span>  {product.price}</p>
                    </div>
                    {/* increase decrease buttons  */}
                    <ButtonGroup variant="outlined" aria-label="Basic button group" sx={{color:'#009f7f'}}>
                      <Button size='small' onClick={() => dispatch(removeFromCart(product))}>-</Button>
                      <Button size='small'>{product.quantity}</Button>
                      <Button size='small' onClick={() => dispatch(addToCart(product))}>+</Button>
                    </ButtonGroup>
                    {/* delete button  */}
                    <button className='ml-19' onClick={() => dispatch(DeletefromCart(product))}>
                             {<DeleteIcon sx={{color:'red'}} onClick={() => {}} />}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <h1>No Products</h1>
            )}
            
        </Box>
      </Drawer>
    </div>
  );
}
