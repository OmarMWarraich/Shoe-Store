import React from "react";
import "./home.css";

import MainPageImages from "../../Images/shoes.jpeg";
import Navbar from "../Navbar/navbar";

import { useNavigate } from "react-router-dom";

import HomeImage from "../../Images/home.jpeg";

const Home = () => {
  let navigate = useNavigate();
  return (
    <div className="home">
      <div className="homePage">
        <img src={MainPageImages} alt="Shoes" />
      </div>
      <Navbar name="homeNavbar" />
      <div className="overlayText">
        <h1>All Shoes are available !</h1>
        <h3>Summer Collection 2020</h3>
        <p>
          We offer comfortable shoes at highly 
          affordable prices while not compromising
          with the quality of shoes at the same time.
          All our shoes are proudly made in Pakistan.
        </p>

        <button onClick={() => navigate("/shop/products")}>Shop Now</button>

        <img className="shoes" src={HomeImage} alt="shoes for everyone" />
      </div>
    </div>
  );
};

export default Home;