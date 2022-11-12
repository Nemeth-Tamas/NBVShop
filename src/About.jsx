import React from 'react'
import { Linking, StyleSheet, View } from 'react-native'
import { Appbar, Button, Card, Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    margin: 10,
  }
});

const About = () => {
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="About" />
      </Appbar.Header>
      <Card style={styles.card}>
        <Card.Title title="Know before bying" />
        <Card.Content>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            fermentum, nisl eget aliquam tincidunt, nunc nisl aliquam elit, nec
          </Text>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Title title="Facebook" />
        <Card.Content>
          <Text>
            Check out our facebook page for more information
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button icon="facebook" onPress={() => {
            Linking.openURL('https://www.facebook.com/NBVAsvanyEkszer');
          }}>Facebook</Button>
        </Card.Actions>
      </Card>
    </View>
  )
}

export default About