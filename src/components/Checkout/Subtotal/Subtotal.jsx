import React from "react";
import "./Subtotal.css";
import { useStateValue } from "../../../Stateprovider.jsx";

import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../../../reducer";

function Subtotal() {

    const [{cart}, dispatch] = useStateValue();
    var total  = 0;
    cart.forEach(item => {
        total = total + Number(item.price);
    });

  return (<div className="subtotal">
        <CurrencyFormat 
            renderText={(value) => (
                <>
                <p>
                Subtotal ({cart.length} items): <strong>{value}</strong>
                </p>
                <small className="subtotalCheckBox">
                    <input type="checkbox" />
                    This order contains a gift
                </small>
                </> 
            )}
            decimalScale={2}
            value={total}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
        />
        <button type="button" class="btn btn-warning">Proceed to Buy</button>
  </div>);
}

export default Subtotal;
