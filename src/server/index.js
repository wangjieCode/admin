import axios from 'axios';

export default axios.create({
	baseURL: '',
	timeout: 5000,
});

export const test = axios.create({
	baseURL: 'http://10.8.15.70:8989',
	timeout: 5000,
})
