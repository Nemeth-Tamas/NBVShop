import React from 'react';
import Main from './src/Main';

const storeItems = [
  {
    "itemName": "Jáde karkötő",
    "itemPrice": 2500,
    "itemImage": "https://i.imgur.com/EJOjIMC.jpg",
    "itemDescription": "Jáde karkötő igazi ásványból, 2500 Ft",
    "aditionalImages": [
      "https://i.imgur.com/EJOjIMC.jpg",
      "https://i.imgur.com/1Z9Z1Zu.jpg",
      "https://i.imgur.com/1Z9Z1Zu.jpg"
    ]
  },
  {
    "itemName": "Tigrisszem karkötő",
    "itemPrice": 2000,
    "itemImage": "https://i.imgur.com/EJOjIMC.jpg",
    "itemDescription": "Tigrisszem karkötő igazi ásványból, 2000 Ft",
    "aditionalImages": [
      "https://i.imgur.com/EJOjIMC.jpg",
      "https://i.imgur.com/1Z9Z1Zu.jpg",
      "https://i.imgur.com/1Z9Z1Zu.jpg"
    ]
  },
  {
    "itemName": "Kék Műanyag karkötő",
    "itemPrice": 1500,
    "itemImage": "https://i.imgur.com/EJOjIMC.jpg",
    "itemDescription": "Kék Műanyag karkötő olcsóbb műanyg gyöngyből, 1500 Ft",
    "aditionalImages": [
      "https://i.imgur.com/EJOjIMC.jpg",
      "https://i.imgur.com/1Z9Z1Zu.jpg",
      "https://i.imgur.com/1Z9Z1Zu.jpg"
    ]
  },
];

let cartItems = [];

const App = () => {
  return (
    <Main items={{storeItems}} cartItems={{cartItems}} />
  );
}

export default App