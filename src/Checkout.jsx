import React from 'react'
import { useForm } from 'react-hook-form';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, Button, Card, Dialog, Divider, Paragraph, Portal, Provider, Text, TextInput } from 'react-native-paper'
import { FormBuilder } from 'react-native-paper-form-builder';

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
  container: {
    backgroundColor: "rgb(30, 26, 29)",
    minHeight: "100%",
  },
  divider: {
    height: 3
  }
});

const calculateTotal = (cartItems) => {
  let total = 0;
  cartItems.map(item => {
    total += item.itemPrice * item.itemQuantity;
  });
  return total;
}

const RightComponent = ({ quantity }) => <Text style={styles.quantity}>x{quantity}</Text>

const Checkout = ({ route, navigation }) => {
  const { cartItems } = route.params;

  console.log(cartItems);

  const total = calculateTotal(cartItems);

  console.log(total);

  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      country: '',
      address: '',

    },
    mode: 'onChange',
  });

  const [data, setData] = React.useState(null)

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Checkout" />
      </Appbar.Header>
      <ScrollView style={styles.container}>
        {cartItems.map((item, index) => (
          <Card style={styles.card} key={index}>
            <Card.Title
              title={item.itemName}
              right={() => <RightComponent quantity={item.itemQuantity} />}
            />
            <Card.Content>
              <Paragraph>{item.itemDescription}</Paragraph>
            </Card.Content>
          </Card>
        ))}
        <Divider style={styles.divider} />
        <FormBuilder
          control={control}
          setFocus={setFocus}
          formConfigArray={[
            {
              name: 'name',
              type: 'text',
              textInputProps: {
                label: 'Name',
                left: <TextInput.Icon name={'account'} />,
              },
              rules: {
                required: {
                  value: true,
                  message: 'Name is required',
                },
              },
            },
            {
              name: 'email',
              type: 'email',
              textInputProps: {
                label: 'Email',
                left: <TextInput.Icon name={'email'} />,
              },
              rules: {
                required: {
                  value: true,
                  message: 'Email is required',
                },
                pattern: {
                  value:
                    /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/,
                  message: 'Email is invalid',
                },
              },
            },
            {
              name: 'phone',
              type: 'text',
              textInputProps: {
                label: 'Phone Number',
                left: <TextInput.Icon name={'phone'} />,
              },
              rules: {
                required: {
                  value: true,
                  message: 'Phone Number is required',
                },
              },
            },
            {
              name: 'country',
              type: 'autocomplete',
              textInputProps: {
                label: 'Country',
                left: <TextInput.Icon name={'city'} />,
              },
              rules: {
                required: {
                  value: true,
                  message: 'Country is required',
                },
              },
              options: [
                {
                  label: 'Hungary',
                  value: 1,
                },
              ],
            },
            {
              name: 'address',
              type: 'text',
              textInputProps: {
                label: 'Address',
                left: <TextInput.Icon name={'office-building'} />,
              },
              rules: {
                required: {
                  value: true,
                  message: 'Address is required',
                },
              },
            },
          ]}
        />
        <Divider style={styles.divider} />
        <Card style={styles.card}>
          <Card.Title title="Total" />
          <Card.Content>
            <Paragraph>{total} Ft</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button mode='contained' onPress={handleSubmit((data) => {
              setData(data);
              console.log(data);
            })}>Pay with paypal</Button>
          </Card.Actions>
        </Card>
        <View style={{marginBottom: 53}}></View>
        {data && <Popup data={data} total={total} />}
      </ScrollView>
    </>
  )
}

const Popup = ({data, total}) => {
  const [visible, setVisible] = React.useState(true);

  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <View>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Text>{data.address} {data.country} {data.email} {data.name} {data.prone} {total}</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
};


export default Checkout