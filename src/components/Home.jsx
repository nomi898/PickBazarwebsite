import { Box } from '@mui/material'
import React, { useState } from 'react'
import HeroSection from './HeroSection'
import CouponsImages from './CouponsImages'
import ItemsCard from './ItemsCard'
import HoverCart from './HoverCart'
import CartList from './CartList/CartList';

const Home = () => {
  const [openCartList,setopenCartList]=useState(false);
  const toggleDrawer=(newOpen)=> () =>{
    setopenCartList(newOpen);
  };
  return (
    <>
<Box className='relative'>

      <HeroSection />
      <CouponsImages />
      <ItemsCard />
  <Box onClick={toggleDrawer(true)} className="fixed right-0 top-1/2 z-50">
      <HoverCart/>
  </Box>  

</Box >
 <CartList 
   openCartList= {openCartList} toggleDrawer={toggleDrawer}
 />
</> 
  )}
  
export default Home
