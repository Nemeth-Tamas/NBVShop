import React, { useEffect } from 'react'
import { ScrollView, StyleSheet } from 'react-native';
import { Appbar, Avatar, Button, Card, FAB, Paragraph, Text, Title } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Checkout from './Checkout';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    borderRadius: 10,
  },
  quantity: {
    marginRight: 30,
    fontSize: 20,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  container: {
    backgroundColor: "rgb(30, 26, 29)",
    minHeight: "100%",
  }
});

const RightComponent = ({ quantity }) => <Text style={styles.quantity}>x{quantity}</Text>

const HandleCardPress = (item, cartItems, update) => {
  console.log('Pressed ' + item.itemName + ' card');
  // Remove item from cart if quantity is 1
  // Else decrease quantity
  if (item.itemQuantity === 1) {
    cartItems.cartItems.cartItems.splice(cartItems.cartItems.cartItems.indexOf(item), 1);
    update();
  } else {
    item.itemQuantity -= 1;
    update();
  }
}

const handleCheckout = (setEmpty, cartItems, navigation) => {
  console.log('Checkout');
  if (cartItems.cartItems.cartItems.length === 0) {
    console.log('Cart is empty');
    setEmpty(true);
  } else {
    navigation.navigate('Checkout', { cartItems: cartItems.cartItems.cartItems });
  }
}

const MainCart = ({ props, cartItems }) => {

  const [loading, setLoading] = React.useState(false);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const update = () => {
    setLoading(true);
    wait(1).then(() => setLoading(false));
  }

  const [empty, setEmpty] = React.useState(cartItems.cartItems.cartItems.length === 0);

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Cart" />
      </Appbar.Header>
      <ScrollView style={styles.container}>
        {loading ? <Text></Text> : cartItems.cartItems.cartItems.map((item, index) => (
          // {cartItems.cartItems.cartItems.map((item, index) => (
          <Card style={styles.card} key={index} onPress={() => HandleCardPress(item, cartItems, update)}>
            <Card.Title
              title={item.itemName}
              left={(props) => <Avatar.Icon {...props} icon="delete" />}
              right={() => <RightComponent quantity={item.itemQuantity} />}
            />
            <Card.Content>
              <Paragraph>{item.itemDescription}</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
      {empty
        ? <Text></Text>
        : <FAB
          style={styles.fab}
          icon="cart"
          label='Checkout'
          onPress={() => handleCheckout(setEmpty, cartItems, props.navigation)}
        />}
    </>
  )
}

const Cart = ({ cartItems }) => {
  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator initialRouteName='Cart' screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Cart" component={(props) => <MainCart props={props} cartItems={cartItems} />} />
        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Cart