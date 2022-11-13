import React from 'react';
import Main from './src/Main';

const storeItems = [
  {
    "itemName": "Cseresznyekvarc-angyal karácsonyfadísz",
    "itemPrice": 1500,
    "itemImage": "https://i.imgur.com/hFM70XO.jpg",
    "itemDescription": "A cseresznyekvarc növeli a koncentrációs képességünket, kitűnő választás a tanulás hatékonyabbá tételéhez, ára: 1500 Ft",
    "aditionalImages": [
      "https://i.imgur.com/PEjcKbo.jpg",
    ]
  },
  {
    "itemName": "Jáde-angyal karácsonyfadísz",
    "itemPrice": 1500,
    "itemImage": "https://i.imgur.com/r5iJJ4i.jpg",
    "itemDescription": "A jáde több örömmel és életkedvvel ajándékoz meg minket. Növeli a bennünk lévő szeretetet, a harmónia iránti igényünket, ára: 1500 Ft",
    "aditionalImages": [
      "https://i.imgur.com/as1DKw7.jpg",
    ]
  },
  {
    "itemName": "Kék jáde-angyal karácsonyfadísz",
    "itemPrice": 1500,
    "itemImage": "https://i.imgur.com/R107yKX.jpg",
    "itemDescription": "A jáde több örömmel és életkedvvel ajándékoz meg minket. Növeli a bennünk lévő szeretetet, a harmónia iránti igényünket, ára: 1500 Ft",
    "aditionalImages": [
      "https://i.imgur.com/yV4du9b.jpg",
    ]
  },
  {
    "itemName": "Opalit-angyal karácsonyfadísz",
    "itemPrice": 1500,
    "itemImage": "https://i.imgur.com/ppvIZDo.jpg",
    "itemDescription": "Az opalit segíti a művészi kreativitást, fokozza az életkedvet, oldja a gátakat, ára: 1500 Ft",
    "aditionalImages": [
      "https://i.imgur.com/yQHgZPd.jpg",
    ]
  },
  {
    "itemName": "Roppantott hegyikristály-angyal karácsonyfadísz",
    "itemPrice": 1500,
    "itemImage": "https://i.imgur.com/2BBZVbd.jpg",
    "itemDescription": "A hegyikristály jótékonyan hat az összes csakrára és szervre, szinte lehetetlen felsorolni az összes pozitív hatását, mindenhová kell ebből varázslatosan szép kristályból a „házi patikába”, ára: 1500 Ft",
    "aditionalImages": [
      "https://i.imgur.com/KNjtB92.jpg",
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