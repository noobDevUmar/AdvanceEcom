
import { Counter } from './features/counter/Counter';

import HomePage from './pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CartPage from './pages/CartPage';
import CheckOutPage from './pages/CheckOutPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Navbar from './features/navbar/Navbar';
import ProtectedRoutes from './app/ProtectedRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/auth/AuthSlice';
import { useEffect } from 'react';
import { fetchCartItemsByIdAsync } from './features/Cart/cartSlice';
import NotFoundPage from './pages/NotFoundPage';
import OrderSuccessPage from './pages/OrderSuccesPage';



function App() {
  const dispatch = useDispatch();

  const user = useSelector(selectLoggedInUser)

useEffect(()=>{

  if(user){
    console.log(user);
    dispatch(fetchCartItemsByIdAsync(user?.id))
  }

},[dispatch,user?.id])

  return (
    <div className="App">
  
 <BrowserRouter>
 <Navbar>

 <Routes>
    <Route path='/' element={<HomePage/>}/> 
    <Route path='/login' element={<LoginPage/>}/> 
    <Route path='/signup' element={<SignUpPage/>}/> 
    <Route path='/cart' element={<CartPage/>}/> 

    <Route path='/checkout' element={<CheckOutPage/>}/> 
    <Route path='/product-detail/:id' element={<ProductDetailPage/>}/> 
    <Route path='/order-success/:id' element={<OrderSuccessPage/>}/> 


    <Route path='*' element={<NotFoundPage/>}/> 

 

 



 </Routes>

 </Navbar>
 </BrowserRouter>

    </div>
  );
}

export default App;
