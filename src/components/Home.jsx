import { Box } from '@mui/material'
import React from 'react'
import HeroSection from './HeroSection'
import CouponsImages from './CouponsImages'
import ItemsCard from './itemsCard'
import HoverCart from './HoverCart'

const Home = () => {
  return (
    
<Box className='relative'>

<HeroSection />
<CouponsImages />
<ItemsCard />
<Box
  className="fixed right-0 top-1/2 z-50"
>
  <HoverCart/>
  </Box>  

</Box>
    
  )
}

export default Home
