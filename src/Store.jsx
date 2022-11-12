import React from 'react'
import { ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Title, Paragraph, Button, Appbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ItemImageViewer from './ItemImageViewer';

const Stack = createStackNavigator();

const HandleOnPress = (item, cartItems) => {
  console.log(cartItems);
  console.log('Pressed ' + item.itemName);
  // If item is already in cart, increase quantity
  // Else add item to cart
  if (cartItems.cartItems.cartItems.some(cartItem => cartItem.itemName === item.itemName)) {
    cartItems.cartItems.cartItems.map(cartItem => {
      if (cartItem.itemName === item.itemName) {
        cartItem.itemQuantity += 1;
      }
    });
  } else {
    item.itemQuantity = 1;
    cartItems.cartItems.cartItems.push(item);
  }
  console.log(cartItems);
  console.log(cartItems.cartItems.cartItems);
}

const HandleCardPress = (item, navigation) => {
  console.log('Pressed ' + item.itemName + ' card');
  navigation.navigate('ItemImageViewer', { item: item });
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 0,
  }
});

const MainStore = ({ props, items, cartItems }) => {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Store" />
      </Appbar.Header>
      <ScrollView>
        {items.items.storeItems.map((item, index) => (
          <Card key={index} onPress={() => HandleCardPress(item, props.navigation)} style={styles.card}>
            <Card.Cover source={{ uri: item.itemImage }} />
            <Card.Content>
              <Title>{item.itemName}</Title>
              <Paragraph>{item.itemDescription}</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button icon="cart" mode='contained' onPress={() => HandleOnPress(item, cartItems)}>Add to cart</Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
    </>
  )
}

const Store = ({ items, cartItems }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Store' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Store" component={(props) => <MainStore props={props} items={items} cartItems={cartItems} />} />
        <Stack.Screen name="ItemImageViewer" component={ItemImageViewer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Store