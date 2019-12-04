import {test} from './index'

export function getCheckTeachInspect() {
    return test.get('/iseSchedule/schedule?currentPage=1&pageSize=20',{
        data:{

        }
    })
}
export function getCheckdormInspect() {
    return test.get('/iseSchedule/dormInspect?currentPage=1&pageSize=20',{
        data:{

        }
    })
}