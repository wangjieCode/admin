import mm from "@/server/user";
import { getCheck } from "../server/user";
/**
 * 检查类型 0 ==> 7s 1 ==> "自习检查", 2 ==> "寝室检查", 3 ==> "教学检查"
 */
export default {
	state: {
		tableData: [{
			'id': 100,
			"state": true,
			'name': '胡平',
			'date': '2019-10-19',
			"address": "xxxx",
		}],
		loading: true,
		test: 1000
	},
	getters: {
		tableData(state) {
			return state.tableData
		},
		/**
		 * 获取已检查数据
		 * @param {*} state 
		 */
		getCheckOut(state) {
			return state.tableData.some()
		},
		/**
		 * 获取未检查数据
		 * @param {*} state 
		 */
		getCheckNow(state) {
			return state.tableData.some()
		},
		test(state) {
			return state.test
		}
	},
	mutations: {
		changeTableData(state, obj) {
			state.tableData = obj.data
		}
	},
	actions: {
		/**
		 * 获取检查数据
		 * @param {vuex模块上下文} context 
		 * @param {tabledata初始化参数} param1 
		 */
		getTableData(context, { checkType, count, pageNow }) {
			console.log(checkType, count, pageNow)
			getCheck().then(({ data }) => {
				context.commit('changeTableData', data)
			})
		},
		/**
		 * 填写或修改检查数据
		 * @param {*} context 
		 * @param {*} param1 
		 */
		submitData(context, { newResult }) {
			console.log(newResult)
		},
		/**
		 * 通过日期查询历史检查记录
		 */
		getCheckByDate(context, { checkType, count, pageNow }) {
			console.log(checkType, count, pageNow)
			mm().then(res => {
				context.commit("changeTableData", res.data)
			})
		},
	}
}