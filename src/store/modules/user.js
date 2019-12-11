import { getToken,setToken,removeToken } from "../../util/token"
import {transFromRouter} from '@/util/transfrom'
import { Testlogin } from '@/server/test'
import { init } from '@/permission'

const state = {
    token: getToken(),
    router: [],
    name: ''
}
const mutations = {
    name: (state, name) => state.name = name,
    router: (state, router) => state.router.push(router)
}

const actions = {
    // eslint-disable-next-line no-unused-vars
    login(context, { username, password }) {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await Testlogin()
                const { name, router,token } = data;
                context.commit('name', name);
                setToken(token)
                context.commit('router',router)
                await context.dispatch('initRouter',router)
                resolve()
            } catch (e) {
                reject(e)
            }
        })
    },
    // eslint-disable-next-line no-unused-vars
    async initRouter(context,router) {
        const routers = await transFromRouter(router)
        await init(routers)
    },
    logout(){
        removeToken()
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

