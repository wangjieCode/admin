
/**
 * 检查类型 0 ==> 7s 1 ==> "自习检查", 2 ==> "寝室检查", 3 ==> "教学检查"
 */
export default {
    state: {
        test: [
            {
                type: "number",
                value: 10,
                title: "学生迟到人数"
            },
            {
                type: "number",
                value: 10,
                title: "学生旷课人数"
            },
            {
                type: "number",
                value: 10,
                title: "学生请假人数"
            },
            {
                type: "checkout",
                value: [
                    {
                        title: "睡觉",
                        type: false
                    }, {
                        title: "游戏",
                        type: false
                    }, {
                        title: "不带课本",
                        type: false
                    }, {
                        title: "睡觉",
                        type: false
                    }, {
                        title: "玩手机",
                        type: false
                    }, {
                        title: "不穿工作服",
                        type: false
                    },
                    {
                        title: "吃零食",
                        type: false
                    },
                    {
                        title: "交头结耳",
                        type: false
                    },
                ],
                title: "老师上课状态"
            }, {
                type: "checkout",
                value: [
                    {
                        title: "睡觉",
                        type: false
                    }, {
                        title: "游戏",
                        type: false
                    }, {
                        title: "不带课本",
                        type: false
                    }, {
                        title: "睡觉",
                        type: false
                    }, {
                        title: "玩手机",
                        type: false
                    }, {
                        title: "不穿工作服",
                        type: false
                    },
                    {
                        title: "吃零食",
                        type: false
                    },
                    {
                        title: "交头结耳",
                        type: false
                    },
                ],
                title: "学生上课状态"
            }
        ]
    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
}