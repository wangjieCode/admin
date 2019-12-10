import { getToken,setToken,removeToken } from "../../util/token"
import {transFromRouter} from '@/util/transfrom'
import { Testlogin } from '@/server/test'
const state = {
    token: getToken(),
    router: [
        {
          name: 'home',
          title: '管理员中心',
          path:'/home'
        },
        {
          name: 'check',
          title: '检查模块',
          path:'/check'
        },
        {
          name: 'about',
          title: '数据管理',
          path:'/about'
        }
      ],
    name: ''
}
const mutations = {
    name: (state, name) => state.name = name,
    router: (state, router) => state.router.push(router)
}

const actions = {
    // eslint-disable-next-line no-unused-vars
    login({ commit }, { username, password }) {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await Testlogin()
                const { name, router,token } = data;
                commit('name', name);
                setToken(token)
                commit('router',router)
                resolve()
            } catch (e) {
                reject(e)
            }
        })

    },
    // eslint-disable-next-line no-unused-vars
    async initRouter(context) {
        const routers = await transFromRouter(context.state.router)
        return routers
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

