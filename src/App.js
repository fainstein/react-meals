import React from "react";
import Header from "./Components/Header/Header";
import Articles from "./Components/Articles/Articles";
import './App.module.css';

function App() {
  const DUMMY_ARTICLES = [
    {
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
      key: 0
    },
    {
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.50,
      key: 1
    },
    {
      name: "BBQ Burger",
      description: "American, raw, meaty",
      price: 12.99,
      key: 2
    },
    {
      name: "Green Bowl",
      description: "Healthy... and green...",
      price: 18.99,
      key: 3
    },
  ];

  return (
    <>
      <Header></Header>
      <Articles articles={DUMMY_ARTICLES}></Articles>
    </>
  );
}

export default App;
