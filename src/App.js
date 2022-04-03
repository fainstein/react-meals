import React from "react";
import Header from "./Components/Header/Header";
import Articles from "./Components/Articles/Articles";
import "./App.module.css";
import CartProvider from "./store/CartProvider";

function App() {
  const DUMMY_ARTICLES = [
    {
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
      id: 0,
      key: Math.floor(Math.random() * 100),
    },
    {
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
      id: 1,
      key: Math.floor(Math.random() * 100),
    },
    {
      name: "BBQ Burger",
      description: "American, raw, meaty",
      price: 12.99,
      id: 2,
      key: Math.floor(Math.random() * 100),
    },
    {
      name: "Green Bowl",
      description: "Healthy... and green...",
      price: 18.99,
      id: 3,
      key: Math.floor(Math.random() * 100),
    },
  ];

  return (
    <CartProvider>
      <Header></Header>
      <Articles articles={DUMMY_ARTICLES}></Articles>
    </CartProvider>
  );
}

export default App;
