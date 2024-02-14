import React from "react";

import Products from "./components/Products";
import "./App.css";
import NewProduct from "./components/NewProduct";


function App() {
  const products = [
    {
      id: "P1",
      title: "Nirma",
      amount: 100,
      date: new Date(2021, 2, 3),
    },
    {
      id: "p2",
      title: "Surf Excel",
      amount: 200,
      date: new Date(2021, 2, 2),
    },
    {
      id: "p3",
      title: "Tide",
      amount: 130,
      date: new Date(2021, 12, 28),
    },
    {
      id: "p4",
      title: "Aerial",
      amount: 450,
      date: new Date(2021, 5, 5),
    },
  ];

  function printProductData(data) {
    console.log("Inside the app.js");
    console.log(data);

  }

 return (
  <div>
    <NewProduct arshlan = {printProductData} ></NewProduct>
    <Products items={products}/>
  </div>
 );
};

export default App;