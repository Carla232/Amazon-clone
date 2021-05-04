import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory} from "react-router-dom";
import {useAnimation} from 'react-rebound';

function Subtotal() {
  const history = useHistory();

  const [{ basket }, dispatch] = useStateValue();
  const [hovered, setHovered] = React.useState(false);
  const ref = React.useRef();

  // A little “pop” on hover
  useAnimation(ref, {scaleX: hovered ? 1.1 : 1, scaleY: hovered ? 1.1 : 1});
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={e => history.push('/address')} ref={ref} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
