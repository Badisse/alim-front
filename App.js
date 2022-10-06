import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { fetchCustomers, postCustomer } from './api/customer.api';

const Customer = ({ name }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
  </View>
);

const App = () => {

  let [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newCustomers = await fetchCustomers();
      setCustomers(newCustomers);
    }

    fetchData();

  }, [])

  const renderItem = ({ item }) => (
    <Customer name={item.name} />
  );

  // @ts-ignore
  const addCustomer = newCustomer => setCustomers(customers => [...customers, newCustomer])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={customers}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View>
        <Button title="Add Customer" onPress={() => {
          const customer = { name: 'test4' }
          postCustomer(customer);
          addCustomer(customer)
        }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;