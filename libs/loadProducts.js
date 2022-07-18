import axios from 'axios';

export async function loadProductsData() {
  try {
    const response = await axios.get('http://127.0.0.1:5000/products');
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
