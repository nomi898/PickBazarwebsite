
import HeroSection from './components/HeroSection';
import CouponsImages from './components/CouponsImages';
import ItemsCard from './components/ItemsCard';
import { Box } from '@mui/material';
import HoverCart from './components/HoverCart';
import { Route, BrowserRouter, Routes } from 'react-router';
import Layout from './components/layout';
import Home from './components/Home';
import Register from './components/auth/Register';
import Signin from './components/auth/Signin';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout />}> 

          <Route index element={<Home />}></Route>
            <Route path='offers' element={<h1>Offers</h1>}></Route>
            <Route path='shops' element={<Home />}></Route>
            <Route path='contacts' element={<h1>Contacts</h1>}></Route>
        </ Route>
        
        <Route path='/register' element={<Register />}></Route>
        <Route path= '/signin' element={<Signin />}></Route>
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
