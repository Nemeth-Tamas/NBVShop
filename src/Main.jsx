import React from 'react'
import { BottomNavigation, Text } from 'react-native-paper';
import StoreRoute from './Store';
import CartRoute from './Cart';
import AboutRoute from './About';

const Main = ({items, cartItems}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'store', title: 'Store', icon: 'store' },
    { key: 'cart', title: 'Cart', icon: 'cart' },
    { key: 'about', title: 'About', icon: 'information' },
  ]);
  
  const renderScene = BottomNavigation.SceneMap({
    store: () => <StoreRoute items={{items}} cartItems={{cartItems}} />,
    cart: () => <CartRoute cartItems={{cartItems}} />,
    about: AboutRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}

export default Main