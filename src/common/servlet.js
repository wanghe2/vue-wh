import axios from 'axios'
import store from '@/store'
import router from '@/router'


class HttpRequest {
  // 每个类都必须有的
  constructor () {
    this.baseUrl = "http://localhost:8088/"
  }

  httpRequestConfig () {
    const userId = store.state.login.userId
    const config = {
      baseURL: this.baseUrl,
      headers: {
        userId: userId,
      }

    }
    return config
  }

  uploadRequestConfig () {
    const userId = store.state.login.userId
    const config = {
      baseURL: this.baseUrl,
      headers: {
        userId: userId,
        'Content-Type': 'multipart/form-data'
      }

    }
    return config
  }
  httpRequest (options) {
    const instance = axios.create()
    options = Object.assign(this.httpRequestConfig(), options) // 数据拼接 相同的数据后面覆盖前面
    return instance(options)
  }
  getRequest (options) {
    const url = options.url
    const params = options.params
    const instance = axios.create(this.httpRequestConfig())
    return instance.get(url, { params })
  }


  

  uploadRequest (options) {
    const instance = axios.create()
    options = Object.assign(this.uploadRequestConfig(), options) // 数据拼接 相同的数据后面覆盖前面
    return instance(options)
  }
}
const servlet = new HttpRequest()
export default servlet
