import {test} from "./index";

export async function login(userName,password) {
    const {data} =  await test.post('/teacher/login',{
        number:userName,
        password
    })
    return data
}
export function logout() {
	
}
export function getInfo() {
	
}