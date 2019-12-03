import {login} from "../server/test"

export default {
    state: {
        token:'',
    },
    mutations:{
        setToken(state,string){
            state.token = string
        }
    },
    actions: {
        toLogin(context,userinfo){
            console.log(userinfo)
            login(userinfo.username, userinfo.password).then( res => {
                console.log(res);
            })
        }
    }
}