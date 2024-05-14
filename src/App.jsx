import React, { useState } from 'react'
import Nav from './Components/Nav/Nav';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import LoginPopUp from './Components/LoginPopUp/LoginPopUp';


function App(){

  const [ShowLogin, setShowLogin] = useState(false);


  return (
   <>
      {ShowLogin ? <LoginPopUp setShowLogin={setShowLogin}  />:<></>}
    <div className='app'>
      <Nav setShowLogin={setShowLogin}/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/cart" element={<Cart/>}/>
       <Route path="/order" element={<PlaceOrder/>}/>
       </Routes>
    </div>
    <Footer/>
   </>
  )
}

export default App;