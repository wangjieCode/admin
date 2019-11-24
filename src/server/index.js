import axios from 'axios';

export default axios.create({
	baseURL: 'http://localhost',
	timeout: 1000,
});