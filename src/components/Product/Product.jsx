import React from 'react';
import './Product.css';
import { useStateValue } from '../../Stateprovider.jsx';

function Product(props) {
  // const [state, dispatch] = useStateValue();

  // function addToCart() {
  //   // Dispatch item into the data Layer
  //   dispatch({
  //     type: 'ADD_TO_CART',
  //     item: {
  //       id: props.id,
  //       name: props.name,
  //       image: props.image,
  //       price: props.price,
  //       stars: props.stars,
  //       rating: props.rating,
  //     },
  //   });
  // }

  // ***
  // localStorage.setItem('cartItems', JSON.stringify(state));

  return (
    <div className="product">
      <div className="productInfo">
        {/* 1.Image */}
        <img src={props.image} alt="keyboard" />

        {/* 2. Name */}
        <p>{props.name}</p>

        {/* 3.Star Rating  */}
        <div className="productRating">
          <span>{props.stars}</span>
          <span className="ratingNumber"> {props.rating}</span>
        </div>

        {/* 4. Product Price */}

        <p className="productPrice">
          <span>₹ </span>
          {props.price}
        </p>

        {/* 5. Add to Cart Button */}
        <button type="button" class="btn btn-warning">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
