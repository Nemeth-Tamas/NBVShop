import React from 'react'
import { StyleSheet, ScrollView } from 'react-native';
import { Appbar, Card, Text } from 'react-native-paper'

const styles = StyleSheet.create({
  card: {
    borderRadius: 0,
    height: 'auto'
  },
  container: {
    backgroundColor: "rgb(30, 26, 29)",
    minHeight: "100%",
  },
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
      <ScrollView style={styles.container}>
        <Card key="main" style={styles.card}>
          <Card.Cover source={{ uri: item.itemImage }} resizeMethod='scale' resizeMode='cover' style={{
            flexDirection: 'column',
            height: 400,
          }} />
        </Card>
        {item.aditionalImages.map((image, index) => (
          <Card key={index} style={styles.card}>
            <Card.Cover source={{ uri: image }} resizeMethod='scale' resizeMode='cover' style={{
              flexDirection: 'column',
              height: 400,
            }} />
          </Card>
        ))}
        <Text style={{ marginBottom: 40 }}></Text>
      </ScrollView>
    </>
  )
}

export default ItemImageViewer;