import React, { useContext, useState } from 'react';
import '../Cart/Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import {Link} from 'react-router-dom'

function Cart() {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {Object.keys(cartItems).length === 0 ? (
          " "
        ) : (
          food_list.map((item, index) => {
            if(cartItems[item._id] > 0) {
              return (
                <div key={index}>
                  <div className='cart-items-title cart-items-item'>
                    <img src={item.image} alt='' />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>{item.price * cartItems[item._id]}</p>
                    <p onClick={() => removeFromCart(item._id)} className='cross'>X</p>
                  </div>
                  <hr />
                </div>
              );
            }
          })
        )}
      </div>
       {Object.keys(cartItems).length === 0 || getTotalCartAmount()  === 0  ?  (
            <div className="no-items-added">
            <p style={{marginTop:"30px"}}>No items added to the cart</p>
            <Link to='/' className='add-items'>Add Items</Link>
          </div>
          ) : 

      <div className='cart-bottom'>
      <div className='cart-total'>
        <h2>Cart Total</h2>
        <div>
          <div className='cart-total-details'>
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className='cart-total-details'>
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount() > 0 ? + 20 : 0}</p>
          </div>
          <hr />
          <div className='cart-total-details'>
            <b>Total</b>
            <b>${getTotalCartAmount() > 0 ? getTotalCartAmount() + 20 : 0}</b>
          </div>
        </div>
        <button>PROCEED TO CHECKOUT</button>
      </div>
      <div className='cart-promocode'>
        <div>
          <p>If you have a promo code, enter it here</p>
          <div className='cart-promocode-input'>
            <input type='text' placeholder='Promo Code' />
            <button >Submit</button>
          </div>
        </div>
      </div>
    </div>
       }
    </div>
  );
}

export default Cart;
