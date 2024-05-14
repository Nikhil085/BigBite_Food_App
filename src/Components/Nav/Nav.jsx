import React, { useContext, useState } from 'react';
import './Nav.css';
import { FaSearch } from "react-icons/fa";
import {Link} from 'react-router-dom';
import { FaShoppingBasket } from "react-icons/fa";
import { StoreContext } from '../../Context/StoreContext';

function Nav({setShowLogin}) {

    const [menu, setMenu] = useState("home");
    const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
         <Link to='/'><h1 className='logo'>BigBite<span style={{color:"black", fontSize:"35px"}}>.</span></h1></Link>
         <ul className='navbar-menu'>
            <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
            <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
            <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
            <a href='#footer' onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>Contact Us</a>
         </ul>
         <div className='navbar-right'>
             <a className='search-icon'><FaSearch/></a>
            <div className='navbar-search-icon'>
                <Link to='/cart' className='basket-icon'><FaShoppingBasket/></Link>
                <div className={getTotalCartAmount() === 0 ? "" :'dot'}></div>
            </div>
            <button onClick={() => setShowLogin(true)}>Sign In</button>
         </div>
    </div>
  )
}

export default Nav;