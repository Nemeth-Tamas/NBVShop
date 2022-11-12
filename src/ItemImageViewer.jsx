import React from 'react'
import { StyleSheet, ScrollView } from 'react-native';
import { Appbar, Card, Text } from 'react-native-paper'

const styles = StyleSheet.create({
  card: {
    borderRadius: 0,
  }
});

const ItemImageViewer = ({ route, navigation }) => {

  const { item } = route.params;

  console.log(item);

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={item.itemName} />
      </Appbar.Header>
      <ScrollView>
        <Card key="main" style={styles.card}>
          <Card.Cover source={{ uri: item.itemImage }} />
        </Card>
        {item.aditionalImages.map((image, index) => (
          <Card key={index} style={styles.card}>
            <Card.Cover source={{ uri: image }} />
          </Card>
        ))}
      </ScrollView>
    </>
  )
}

export default ItemImageViewer;