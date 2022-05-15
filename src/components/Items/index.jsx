import React from "react";
import "./styles.css";
import products from "../../data";
import {
  buyItem,
  sellItem,
  selectItems,
  selectTotalPrice,
} from "../../redux/amount/moneySlice";
import { useDispatch, useSelector } from "react-redux";

function Items() {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const pieceofItem = (item) => {
    const selectedItem = items.find((product) => product.id === item.id);
    return selectedItem ? selectedItem.piece : 0;
  };
  const totalPrice = useSelector(selectTotalPrice);

  const handleChange = (e, { current, id, title, price }) => {
    if (e.target.value) {
      const diff = e.target.value - current;
      diff > 0
        ? dispatch(buyItem({ id: id, title: title, price: price, piece: diff }))
        : dispatch(
            sellItem({ id: id, title: title, price: price, piece: -diff })
          );
    }
  };
 
  return (
    <div className="items">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <div className="card-body">
            <img className="items-img" src={product.img} alt="" />
            <h3>{product.title}</h3>
            <h4>${product.price}</h4>
          </div>
          <div className="actions">
            <button
              disabled={pieceofItem(product) === 0}
              onClick={() => {
                dispatch(
                  sellItem({
                    id: product.id,
                    title: product.title,
                    piece: 1,
                    price: product.price,
                  })
                );
              }}
              className={`sell ${pieceofItem(product) === 0 && "disabled"} `}
            >
              Sell
            </button>
            <input
              type="number"
              value={pieceofItem(product)}
              onChange={(e) =>
                handleChange(e, {
                  current: pieceofItem(product),
                  id: product.id,
                  title: product.title,
                  price: product.price,
                })
              }
            />
            <button
              disabled={product.price + totalPrice > 100000000000}
              onClick={() => {
                dispatch(
                  buyItem({
                    id: product.id,
                    title: product.title,
                    piece: 1,
                    price: product.price,
                  })
                );
              }}
              className={`buy ${
                product.price + totalPrice > 100000000000 && "disabled"
              }`}
            >
              Buy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Items;
