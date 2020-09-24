import React from "react";
import "./preview.css";

import { useParams } from "react-router-dom";

import contexts from "../context/ValueContext";

import shoes from "../../shoes";
import StarRateIcon from "@material-ui/icons/StarRate";

const Preview = () => {
  const { productId } = useParams();

  let value = React.useContext(contexts.ValueContext);
  const [add, setAdd] = React.useState(true);

  let { name, img } = shoes[productId];
  let randomRating = Math.floor(Math.random() * 6);
  let diff = 5 - randomRating;
  let array = [];
  for (var i = 0; i < diff; i++) {
    array.push(<StarRateIcon key={i} />);
  }
  for (i = 0; i < randomRating; i++) {
    array.push(<StarRateIcon key={i + diff} className="notfill" />);
  }

  console.log(array);

  return (
    <div className="preview">
      <div className="bigImage">
        <img src={img} alt="shoes" />
      </div>
      <div className="descriptions">
        <h3>{name}</h3>
        <p>
          Robust, Durable, Fancy, Comfy, Party, Casual Wear.
        </p>
        <div className="colors">
          <div className="red"></div>
          <div className="green"></div>
          <div className="purple"></div>
          <div className="brown"></div>
        </div>
        <div className="priceRatings">
          <p>Price : Rs. 2500</p>
          <p className="ratings">
            {array.map((icon) => {
              return icon;
            })}
          </p>
        </div>

        {add ? (
          <button
            onClick={() => {
              value.dispatch({
                type: "INCREMENT",
              });

              setAdd(!add);
            }}
          >
            Add to Cart
          </button>
        ) : (
          <button
            onClick={() => {
              value.dispatch({
                type: "DECREMENT",
              });
              setAdd(!add);
            }}
          >
            Remove from Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Preview;