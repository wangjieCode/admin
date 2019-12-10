
import axios from './index';
export default function test() {
	return  axios.post("/test", {
		data:{
			page: 1,
			connt: 10
		}
	})
}
export function Testlogin() {
	return axios.post('/login')
}
/**
 * 获取当前用户当前所有检查
 */
export function getCheck() {
	return axios.post('/test')
}
/**
 * 获取当前用户当前已经检查
 */
export function getCheckOut() {
	return axios.get('/getCheckOut')
}
/**
 * 获取当前用户检查历史记录
 */
export function getCheckOutHistory() {
	return axios.get('/getCheckOutHistory')
}
/**
 * 7s检查信息
 */
export async function s() {
	const  {data} = await axios.get('/7s1')
	return data;
}