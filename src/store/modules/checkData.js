import mm from "@/server/test";
import { getCheckTeachInspect, getCheckdormInspect,getCheckise7sInspect } from "../../server/check";
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
		total: 0,
		test:''
	},
	getters: {
		getTotal(state){
			return state.total
		},
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
			console.log(obj)
			state.tableData = obj.data.records
		}
	},
	actions: {
		/**
		 * 获取检查数据
		 * @param {vuex模块上下文} context 
		 * @param {tabledata初始化参数} param1 
		 */
		async getTableData(context, { checkType}) {
			let result;
			switch (checkType) {
				case 0:
					result = await getCheckise7sInspect()
					break;
				case 1:
					result = await getCheckdormInspect()
					break;
				case 2:
					result = await getCheckdormInspect()
					break;
				case 3:
					result = await getCheckTeachInspect()
					break;
				default:
					return
			}
			context.commit('changeTableData',result.data)
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