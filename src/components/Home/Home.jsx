import React from "react";
import "./Home.css";
import Banner from "./Banner/Banner.jsx"
import Product from "../Product/Product.jsx";

function Home() {
  return (
    <>
      <Banner />
      <div className="home">
    
      <div className="homeContainer">
        <div className="homeRow">
          <Product 
            id = "1"
            image="https://m.media-amazon.com/images/I/41eC3XfDtjL._AC_SR160,160_.jpg"
            name="ASIC'S Men's Badminton Shoes"
            stars="⭐⭐⭐⭐"
            rating="(24,451)"
            price="3740.00"
          />
          <Product 
            id = "2"
            image="https://m.media-amazon.com/images/I/61Pg1H7U15L._AC_SS450_.jpg"
            name="SUPER TOY LCD Writing Tablet 8.5Inch E-Note Pad"
            stars="⭐⭐⭐⭐⭐"
            rating="(12,968)"
            price="319.00"
          />
          <Product 
            id = "3"
            image="https://m.media-amazon.com/images/I/41Gn-rx8StL._AC_SR160,160_.jpg"
            name="Teddy Bear Toy"
            stars="⭐⭐⭐"
            rating="(30)"
            price="499.00"
          />
        </div>

        <div className="homeRow">
          <Product 
            id = "4"
            image="https://images-eu.ssl-images-amazon.com/images/I/51kA-Upq61L._AC_UL160_SR160,160_.jpg"
            name="One Indian Girl"
            stars="⭐⭐"
            rating="(13,129)"
            price="84.00"
          />
          <Product 
            id = "5"
            image="https://images-eu.ssl-images-amazon.com/images/I/71UljGv1o0L._AC_UL160_SR160,160_.jpg"
            name="DZert Kids School Bag Soft"
            stars="⭐⭐⭐⭐"
            rating="(5,713)"
            price="298.00"
          />
          <Product 
            id = "6"
            image="https://images-eu.ssl-images-amazon.com/images/I/71Fe4Eom+qL._AC_UL160_SR160,160_.jpg"
            name="Strauss Skipping Rope & Jump Rope for Men & Women,"
            stars="⭐⭐⭐⭐⭐"
            rating="(9,447)"
            price="175.00"
          />
          <Product 
            id = "7"
            image="https://images-eu.ssl-images-amazon.com/images/I/81+d6eSA0eL._AC_UL160_SR160,160_.jpg"
            name="TIMEWEAR Analog Number Dial Leather Strap Watch for Men"
            stars="⭐⭐⭐⭐"
            rating="(5,686)"
            price="227.00"
          />
        </div>

        <div className="homeRow">
          <Product 
            id = "8"
            image="https://m.media-amazon.com/images/I/41V5KQ500IL.jpg"
            name="Nintendo - Version 2 Switch with Joy-Con"
            stars="⭐⭐⭐⭐⭐"
            rating="(45,455)"
            price="28880.00"
          />
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Home;
