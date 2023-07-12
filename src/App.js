import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import './bootstrap.min.css'
import Login from './pages/userpages/login/Login';
import Cart from './cart/Cart';
import Whishlist from './wishlist/wishlistbody/Whishlist';
import Pagenotfound from './component/pagenotfound/Pagenotfound';
import Truck from './pages/truck/Truck';


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


    </Routes  >
    

    </>
  );
}

export default App;
