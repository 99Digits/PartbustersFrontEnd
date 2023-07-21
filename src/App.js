import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import './bootstrap.min.css'
import Login from './pages/userpages/login/Login';
import Cart from './cart/Cart';
import Whishlist from './wishlist/wishlistbody/Whishlist';
import Pagenotfound from './component/pagenotfound/Pagenotfound';
import Truck from './pages/truck/Truck';
import Mainbike from './pages/bikes/Mainbike';
import Tyres from './pages/tyres/Tyres';
import Tools from './pages/tools/Tools';
import Engineoil from './pages/engineoil/Engineoil';
import Breakes from './pages/breakes/Breakes';
import Caracc from './pages/caracc/Caracc';


function App() {

  return (
    < >
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='/services/products/wishlist' element={<Whishlist/>}/>
      <Route path='*' element={<Pagenotfound/>}/>
      <Route path='/truck' element={<Truck/>}/>
      <Route path='/bikes' element={<Mainbike/>}/>

      <Route path='/tyres' element={<Tyres/>}/>
      <Route path='/tools' element={<Tools/>}/>
      <Route path='/engineoil' element={<Engineoil/>}/>
      <Route path='/breakes' element={<Breakes/>}/>
      <Route path='/car-accessories' element={<Caracc/>}/>
   

    </Routes  >
    

    </>
  );
}

export default App;
