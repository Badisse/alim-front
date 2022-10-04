import { Alert } from "react-native";

export const fetchCustomers = () =>
    fetch('http://192.168.1.90:3000/customer')
        .then(res => res.json());

export const postCustomer = (customer) =>
    fetch('http://192.168.1.90:3000/customer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customer)
    })
        .then(response => {
            response.json()
                .then(data => {
                    Alert.alert(`Customer ${data.name} created !`);
                    console.log(data)
                });
        })