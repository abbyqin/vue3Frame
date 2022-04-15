import { request } from "./request";

// 所有接口数据信息
class api {
  async login(loginInfo: any): Promise<any>{
    return (await request.post(`user/login`, loginInfo))
  }
}

export default new api()