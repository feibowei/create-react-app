import request from '../utils/request'
//import request from 'umi-request'

interface WeatherRes {
  cityid: string;
  city: string;
  cityEn: string;
  country: string;
  countryEn: string;
  update_time: string;
}

export async function getWeather() {
  return request('http://www.tianqiapi.com/api?version=v9&appid=23035354&appsecret=8YvlPNrz')
}