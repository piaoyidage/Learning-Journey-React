/*
* @Author: maoying.hu
* @Date:   2018-09-17 15:39:01
* @Last Modified by:   maoying.hu
* @Last Modified time: 2018-09-17 15:51:58
*/

const getTime = (state = 0, action) => {
    switch(action.type) {
        case 'GET_TIME':
            return Date.now()
        default:
            return state
    }
}

export default getTime