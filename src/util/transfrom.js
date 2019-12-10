import file from '@/router/routePath'
export async function transFromRouter(routers) {
    let reslut = [];
    for (const ele of routers) {
        const res = file(ele.name)
        const cmp = await res()
        const temRouter = {
            path: ele.name,
            name: ele.name,
            meta: {
                title: ele.title
            },
            components: cmp
        };
        reslut = reslut.concat(temRouter)
    }
    return reslut
}