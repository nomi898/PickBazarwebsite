import Header from './components/header';
import HeroSection from './components/HeroSection';
import CouponsImages from './components/CouponsImages';
import ItemsCard from './components/itemsCard';
import { Box } from '@mui/material';
import HoverCart from './components/HoverCart';


function App() {
  return (
    <Box className='relative'>
      <Header />
      <HeroSection />
      <CouponsImages />
      <ItemsCard />
      <Box
        className="fixed right-0 top-1/2 z-50"
      >
        <HoverCart/>
        </Box>  
  
    </Box>
  );
}

export default App;
