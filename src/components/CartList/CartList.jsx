import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonGroup } from '@mui/material';
import { addToCart, DeletefromCart, removeFromCart } from '../../store/slices/Cartlist';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, NavLink } from "react-router";
import React from 'react';


export default function CartList(props) {
  const { openCartList, toggleDrawer } = props;
  const { CartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // total price logic
  const totalPrice = CartList
    .reduce((prev, curr) => curr.quantity * curr.price + prev, 0)
    .toFixed(2);

  return (
    <div>
      <Drawer open={openCartList} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 500 }} role="presentation">
          {CartList?.length > 0 ? (
            <>
              <h1 className="text-center text-3xl rounded-sm h-15 flex justify-center items-center">
                Cart Items
              </h1>

              {CartList.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center rounded-medium bg-gray-100 border-1 m-2"
                >
                  <img
                    className="w-[100px]"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="flex justify-between w-full items-center px-5">
                    <div>
                      <h3 className="font-bold">{product.name}</h3>
                      <p>
                        <span className="font-bold">Price:</span> ${' '}
                        {product.price}
                      </p>
                    </div>

                    {/* increase / decrease buttons */}
                    <ButtonGroup variant="outlined" aria-label="Basic button group">
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

                    {/* delete button */}
                    <button onClick={() => dispatch(DeletefromCart(product))}>
                      <DeleteIcon sx={{ color: 'red' }} />
                    </button>
                  </div>
                </div>
              ))}

              {/* ✅ total price button */}
              <div className="flex justify-center m-3">
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
              </div>
            </>
          ) : (
            // Empty cart button
            <Box className="flex flex-col justify-center items-center h-full p-5">
              <h1 className="text-center text-2xl mb-4 text-gray-600">
                No Products in Cart
              </h1>
              <Link to='/' >
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
