### 将对象转换为后台识别的&格式
export function serialize(values){
  let serializeStr = ''
  for(let k in values) {
    serializeStr += `${k}=${values[k]}&`
  }
  return  serializeStr
}

### react 请求
isomorphic-fetch
