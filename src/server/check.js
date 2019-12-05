import axios from './index'
/**
 * 查询教学检查
 * @param {*} currentPage 
 * @param {*} pageSize 
 */
export function getCheckTeachInspect() {
    return axios.get('/iseTeachInspect/teachInspect?currentPage=1&pageSize=10',{
        data:{
        }
    })
    
}
/**
 * 查询寝室检查信息
 */
export function getCheckdormInspect() {
    return axios.get('iseDormInspect/dormInspect?currentPage=1&pageSize=10',{
        data:{

        }
    })
}
/**
 * 查询7s检查
 */
export function getCheckise7sInspect() {
    return axios.get('/ise7sInspect/7sInspect?currentPage=1&pageSize=10',{
        data:{

        }
    })
}