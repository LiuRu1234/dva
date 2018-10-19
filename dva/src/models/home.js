import * as home from '../services/home';

export default {
    namespace: 'home',
  
    state: {},
  
    effects: {
      *fetch({ payload: {} }, { call, put }) {  // eslint-disable-line
        const json = yield call(home.getGuestInfo, {
          login_id: 241,
          token: 'YzBmMGIxZjdiNzIwZDY0YTJhMWQ5NzBjNmZmZDdhNWY0OGFmMTE4YjMzYTJiOGE3MGRmZjhjZjkwMjVmZWI4Nw=='
        });
        console.log(json,'9999')
        yield put({ type: 'save' ,payload: {data: json.data.data}});
        yield put({ type: 'saveUserInfo' ,payload: {userInfo: json.data.data}});
      },
    },
  
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
      saveUserInfo(state, action) {
        return { ...state };
      },
    },

    subscriptions: {
      // setup({ dispatch, history }) {  // eslint-disable-line
      // },
      setup({ dispatch, history }) {  // eslint-disable-line
        return history.listen(({ pathname, query }) => {
          console.log(pathname,'pathname')
          if (pathname === '/') {
            dispatch({ type: 'fetch', payload: {} });
          }
        });
      },
    },
  
  };
  