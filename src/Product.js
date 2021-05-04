import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import {useAnimation} from 'react-rebound';

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const [hovered, setHovered] = React.useState(false);
  const ref = React.useRef();

  // A little “pop” on hover
  useAnimation(ref, {scaleX: hovered ? 1.1 : 1, scaleY: hovered ? 1.1 : 1});

  console.log("this is the basket >>>", basket);
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>€</small>
          <strong >{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket} ref={ref} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>Add to Cart</button>
    </div>
  );
}

export default Product; 
