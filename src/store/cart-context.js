import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;

// import React, { useState, useReducer, useEffect } from "react";

// const itemListReducer = (state, action) => {
//   let itemsArray = state;
//   if (action.type === "addItem") {
//     itemsArray.push(action.value);
//     console.log("Reducer check: ", itemsArray);
//     return itemsArray;
//   }

//   if (action.type === "updateItem") {
//     var foundIndex = itemsArray.findIndex((x) => x.id === action.value.id);
//     itemsArray[foundIndex] = action.value;
//     return itemsArray;
//   }
// };

// const CartContext = React.createContext({
//   cartItems: [],
//   onAddItems: () => {},
//   totalItems: 0,
//   onUpdateItemQuantity: () => {},
//   totalAmount: 0,
// });

// export const CartContextProvider = (props) => {
//   const [itemListState, dispatchItemList] = useReducer(itemListReducer, []);

//   // const [cartItems, setCartItems] = useState([]);
//   const [totalItems, setTotalItems] = useState(0);
//   const [totalAmount, setTotalAmount] = useState(0);

//   const addItemsHandler = (item, quantity) => {
//     const newItem = {
//       name: item.name,
//       price: item.price,
//       quantity: quantity,
//       id: item.id,
//       key: Math.floor(Math.random() * 100),
//     };
//     dispatchItemList({ type: "addItem", value: newItem });
//   };

//   const updateItemQuantityHandler = (item, newQuantity) => {
//     item.quantity = newQuantity;
//     dispatchItemList({ type: "updateItem", value: item });
//   };

//   useEffect(() => {
//     let newAmount = 0,
//       newQuantity = 0;
//     for (let i = 0; i < itemListState.length; i++) {
//       newAmount += itemListState[i].quantity * itemListState[i].price;
//       newQuantity += itemListState[i].quantity;
//     }
//     console.log("effect check: ");

//     setTotalItems(newQuantity);
//     setTotalAmount(newAmount);
//   }, [itemListState, totalItems, totalAmount]);

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems: itemListState,
//         onAddItems: addItemsHandler,
//         totalItems: totalItems,
//         onUpdateItemQuantity: updateItemQuantityHandler,
//         totalAmount: totalAmount,
//       }}
//     >
//       {props.children}
//     </CartContext.Provider>
//   );
// };

// export default CartContext;
