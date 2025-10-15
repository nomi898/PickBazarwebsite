import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, DeletefromCart } from '../../store/slices/Cartlist';
import { Link } from "react-router";

export default function CartList(props) {
  const { openCartList, toggleDrawer } = props;
  const { CartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Calculate total price
  const totalPrice = CartList
    .reduce((prev, curr) => curr.quantity * curr.price + prev, 0)
    .toFixed(2);

  return (
    <div>
      <Drawer
        open={openCartList}
        onClose={toggleDrawer(false)}
        anchor="right" // drawer slides from right
      >
        <Box sx={{ width: { xs: 300, sm: 500 } }} role="presentation">
          {CartList?.length > 0 ? (
            <>
              {/* Header */}
              <h1 className="text-center text-3xl rounded-sm h-15 flex justify-center items-center">
                Cart Items
              </h1>

              {/* Cart Items */}
              {CartList.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center rounded-md bg-gray-100 border m-2 p-2"
                >
                  {/* Product Image */}
                  <img
                    className="w-[100px] h-[100px] object-cover"
                    src={product.image}
                    alt={product.name}
                  />

                  {/* Product Info and Controls */}
                  <div className="flex justify-between w-full items-center px-3">
                    {/* Name and Price */}
                    <div>
                      <h3 className="font-bold">{product.name}</h3>
                      <p>
                        <span className="font-bold">Price:</span> ${product.price}
                      </p>
                    </div>

                    {/* Quantity buttons */}
                    <ButtonGroup variant="outlined" aria-label="quantity buttons">
                      <Button
                        sx={{ color: '#009f7f', borderColor: '#009f7f' }}
                        size="small"
                        onClick={() => dispatch(removeFromCart(product))}
                      >
                        -
                      </Button>
                      <Button
                        sx={{ color: '#009f7f', borderColor: '#009f7f' }}
                        size="small"
                      >
                        {product.quantity}
                      </Button>
                      <Button
                        sx={{ color: '#009f7f', borderColor: '#009f7f' }}
                        size="small"
                        onClick={() => dispatch(addToCart(product))}
                      >
                        +
                      </Button>
                    </ButtonGroup>

                    {/* Delete Button */}
                    <Button onClick={() => dispatch(DeletefromCart(product))}>
                      <DeleteIcon sx={{ color: 'red' }} />
                    </Button>
                  </div>
                </div>
              ))}

              {/* Total Price Button */}
              <Box className="flex justify-center m-3">
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    color: 'white',
                    backgroundColor: '#009f7f',
                    fontWeight: 600,
                    fontSize: '16px',
                    textTransform: 'none',
                  }}
                >
                  Total Price: ${totalPrice}
                </Button>
              </Box>
            </>
          ) : (
            // Empty Cart Message
            <Box className="flex flex-col justify-center items-center h-full p-5">
              <h1 className="text-center text-2xl mb-4 text-gray-600">
                No Products in Cart
              </h1>
              <Link to="/">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#009f7f',
                    color: 'white',
                    fontWeight: 600,
                    px: 4,
                    py: 2,
                  }}
                >
                  Add Items to Cart
                </Button>
              </Link>
            </Box>
          )}
        </Box>
      </Drawer>
    </div>
  );
}
