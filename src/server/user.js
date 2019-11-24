import axios from './index';
export default async function () {
	return await axios.get("http://localhost/api/movie")
}