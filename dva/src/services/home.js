/**
 * Created by bll on 2017/11/14.
 */
import request from '../utils/request';
import { serialize } from '../utils/utils';

export function getGuestInfo(values) {
  console.log(values,'values')
  return request(`user/info?${serialize(values)}`, {
    method: 'GET',
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}
