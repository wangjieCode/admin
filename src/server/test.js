import {test} from "./index";

export function login(userName,possword) {
    return test.post('/teacher/login',{
        number:userName,
        possword
    })
}