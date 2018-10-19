/**
 * Created by bll on 2017/11/14.
 */
import request from '../utils/request';
import { serialize } from '../utils/utils';

export function getGuestInfo(values) {
  return request(`/demo`, {
    method: 'POST',
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    },
    body: serialize(values)
  });
}
