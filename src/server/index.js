import axios from 'axios';
import {Message} from 'element-ui'

export default axios.create({
	baseURL: '',
	timeout: 5000,
	validateStatus(status) {
        switch (status) {
        case 400:
            Message.error('请求出错')
            break
        case 401:
            Message.warning({
                message: '授权失败，请重新登录'
            })
            setTimeout(() => {
                window.location.reload()
            }, 1000)
            return
        case 403:
            Message.warning({
                message: '拒绝访问'
            })
            break
        case 404:
            Message.warning({
                message: '请求错误,未找到该资源'
            })
            break
        case 500:
            Message.warning({
                message: '服务端错误'
            })
            break
        }
        return status >= 200 && status < 300
    }
});

export const test = axios.create({
	baseURL: '',
	timeout: 5000,
})
