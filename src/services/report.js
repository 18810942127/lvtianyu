import request from './request'

export const List = (params = {}) => {
    let url = '/ys/dash/time';
    return request({
        url,
        params,
        method: 'get'
    })
}

export const Order = (params = {}) => {
    let url = '/ys/dash/order';
    return request({
        url,
        params,
        method: 'get'
    })
}