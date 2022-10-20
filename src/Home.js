import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { MdFoodBank } from "react-icons/md";
import "./Home.css";
import Cardsdata from "./Data.js";
import ADD from "./redux/action";
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
const Home = () => {
 // const value = useSelector((state) => state.cartReducer.carts );
 //console.log(value)
 //const value=20;
 const value=20;
  const dispatch = useDispatch();

  const Addbtn = (e) => {
    dispatch(ADD(e));
  };

  const data = Cardsdata;
  console.log(data.imgdata);

  return (
    <div className="whole-container">
      <div className="header-container">
        <div className="title">
          <h1>FoodHub</h1>
          <MdFoodBank style={{ fontSize: "50px" }} />
        </div>

        <div className="welcome">
          <h1>Welcome</h1>{" "}
          <div className="added">
            <div className="cartvalue">
              <NavLink to="./Page">{value}</NavLink>
              <ShoppingCartIcon style={{ fontSize: "50px" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        {data.map((item, i) => (
          <div
            className="cart-container"
            key={i}
            style={{ width: "max-content", height: "max-content" }}
          >
            <img
              src={item.imgdata}
              alt="pic"
              style={{ width: "20rem", height: "15rem" }}
            ></img>
            <h3>{item.rname}</h3>
            <h3>₹ {item.price}</h3>
            <button className="btn" onClick={Addbtn(item)}>
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
