
import Axios from 'axios';
const baseurl ="http //localhost:3000/orders";








export default CreateOrder = async (order)=>{
    return Axios.post((baseurl),order);

}