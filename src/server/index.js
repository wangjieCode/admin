import axios from 'axios';

export default axios.create({
	baseURL: '',
	timeout: 5000,
});

export const test = axios.create({
	baseURL: '',
	timeout: 5000,
})
