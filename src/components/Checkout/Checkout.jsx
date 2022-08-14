import React from "react";
import { useStateValue } from "../../Stateprovider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import Subtotal from "./Subtotal/Subtotal.jsx";

function Checkout() {
const [{cart}, dispatch] = useStateValue();

  return (<div className="checkout">

      <div className="checkoutLeft">
        <div>
            <h2 className="checkoutTitle">Shopping Cart</h2>

            {cart.map(item => (
              <CheckoutProduct
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              stars={item.stars}
               />
            ))}



        </div>
      </div>

      <div className="checkoutRight">
          <h2><Subtotal /></h2>
      </div>

  </div>);
}

export default Checkout;
