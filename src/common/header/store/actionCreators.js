import { actionTypes } from './index';
import axios from 'axios';
import {fromJS} from 'immutable';

const getListAction = (list)=> ({ //不需要导出的方法就不要暴露出去了
    type: actionTypes.GET_LIST,
    list:fromJS(list)  //这里需要注意下，需要把传进去的list转成 immutable类型的（∵在reducer.js中，定义的defaultState.list是一个immutable类型，如果传入的是一个普通js对象，那么在reducer中就会有问题）
});


export const getInputFocusedAction = () => ({
    type: actionTypes.INPUT_FOCUSED
});

export const getInputBlurAction = () => ({
    type: actionTypes.INPUT_BLUR
});



export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then(res => {
            let list = [];
            if(!res.data.success || !(list = res.data.data).length) return;
            dispatch(getListAction(list));
        }).catch(err => {
            console.log(err);
        })
    }
}
