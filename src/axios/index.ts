import axios from "axios";
import { response } from "express";
import { config } from "webpack";

// 1.实例化请求配置
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 3000,
  headers: {
    //php 的 post 传输请求头一定要这个 不然报错 接收不到值
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin-Type": '*'
  }
})
// 2.请求拦截器
instance.interceptors.request.use((config) => {
  // 在请求之前做什么
  console.log('interceptors request : ', config)
  return config
}, (error) => {
  // 请求错误时做些什么～
  return Promise.reject(error)
})

// 3.响应拦截器
instance.interceptors.response.use((response)=>{
  // 对响应的数据做什么～
  return response
},(error)=>{
  // 对响应的错误做什么～
  return Promise.reject(error)
})
