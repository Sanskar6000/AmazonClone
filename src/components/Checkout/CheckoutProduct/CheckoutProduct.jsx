import React from 'react';
import { useStateValue } from '../../../Stateprovider';
import './CheckoutProduct.css';

function CheckoutProduct(props) {
  const [{ cart }, dispatch] = useStateValue();

  function removeFromCart() {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: props.id,
    });
  }

  //   ***
  localStorage.setItem('cartItems', JSON.stringify(cart));

  return (
    <div className="checkoutProduct">
      <img className="checkoutProductImage" src={props.image} />

      <div className="checkoutProductData">
        <p className="productName">{props.name}</p>
        <p className="productPrice">
          <span>₹ </span>
          {props.price}
        </p>
        <p className="productRating">{props.stars}</p>
        <button type="button" class="btn btn-warning" onClick={removeFromCart}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
