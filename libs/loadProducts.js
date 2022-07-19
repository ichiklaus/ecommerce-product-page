import axios from 'axios';

export async function loadProductsData() {
  try {
    // const response = await axios.get('http://127.0.0.1:5000/api/products');
    const response = await axios.get('https://ichiklaus-ecommerce-shop-api.herokuapp.com/api/products');
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
