export default {
    state:{
        routerHistoy:[]
    },
    getters:{
        getHistory: state => state.routerHistoy
    },
    mutations:{
        getRouterHistory(context,{path,meta}){
            context.routerHistoy.push({path,meta})
        },
        setRouterHistory(context,res){
            context.routerHistoy  = res
        }
    }
}