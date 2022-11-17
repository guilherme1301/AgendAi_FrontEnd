import Axios  from "axios";

export default Axios.create({
 baseURL: 'https://agendai-api.herokuapp.com'
 //baseURL: 'http://localhost:3333/'
});
