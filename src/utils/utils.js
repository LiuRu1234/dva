/**
 * Created by bll on 2017/11/13.
 */
import request from './request';

export function serialize(values){
  let serializeStr = ''
  for(let k in values) {
    serializeStr += `${k}=${values[k]}&`
  }
  return  serializeStr
}

export function getQuery(name){
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  let hash = window.location.hash
  let search = hash.substr(hash.indexOf('?'))
  let r = search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}


//butiful data
export function handleSpace(space, id) {
  if (space >= 30 && space < 100) {
    return space;
  }

  let mo = ''

  if ((id % 5) % 2 == 0) {
    mo = Math.pow(id % 4, 2) + 3
  } else {
    mo = Math.pow(id % 4, 2) + 4
  }

  let changedSpace = 9 + space % 10 + mo + id % 10 ;

  return changedSpace;
}

export function post(url, values) {
  return request(`${url}`, {
    method: 'POST',
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    },
    body: serialize(values)
  });
}

export function get(url, values) {
  return request(`${url}?${serialize(values)}`, {
    method: 'GET',
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    }
  });
}

export function search(text, list, state) {
  let gl = JSON.parse(JSON.stringify(list))
  if (text== '' || gl.length == 0) return list;
  let pattern = new RegExp(text);

  let items = gl.filter ((item, key) => {

    let patternOk = false

     for (let i in item) {
       if (pattern.test(item[i])) {
         patternOk = true
         break;
       }
     }

     if (patternOk) {
        return item;
     }
  })
  return items;
}

export function getLocalTime(nS) {
  let timeStr = (new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ')).replace('上午12', '上午00');
  return timeStr;
}

function getStorageFloat() {
    let r = Math.random();
    if (r >= 0.3 && r <= 0.9) {
      return r;
    } else {
      return getStorageFloat();
    }
}

function useStorageRandom(){
    let i = getStorageFloat();
    let g = 1 + i;
    let storage = g * 1024 * 1024 * 1024;
    return storage;
}

function randomFrom(lowerValue,upperValue) {
 return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
}

function randomFrom2(lowerValue,upperValue) {
  return (Math.random() * (upperValue - lowerValue + 1) + lowerValue).toFixed(2);
}
