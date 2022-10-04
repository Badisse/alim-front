export const fetchCustomers = () =>
    fetch('http://192.168.1.90:3000/customer')
        .then(res => res.json());