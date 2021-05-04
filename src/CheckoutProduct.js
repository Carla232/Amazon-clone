import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";
import {useAnimation} from 'react-rebound';

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    const [hovered, setHovered] = React.useState(false);
  const ref = React.useRef();

  // A little “pop” on hover
  useAnimation(ref, {scaleX: hovered ? 1.1 : 1, scaleY: hovered ? 1.1 : 1});

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket} ref={ref} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>Remove from Cart</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
