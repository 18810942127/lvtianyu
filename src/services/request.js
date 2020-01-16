import axios from 'axios'
import qs from 'qs'
import Router from '../router'

axios.interceptors.request.use(config => {
    let token = '8b9a16b2db3c4930a2db546a2d4d8b81';
    if (token) {
        config.headers.Authorization = 'Bearer ' + token;
        config.headers['ATTR-TOKEN'] = token;
        config.headers['Z-TOKEN'] = token;
    }
    return config
}, error => {
    return Promise.reject(error)
})

let request = (option) => {
    let newoption = Object.assign({
        url: '/',
        method: 'get',
        params: {}
    }, option);
    if (newoption.method === 'get') {
        newoption.url = newoption.url + '?' + qs.stringify(newoption.params);
    }

    return new Promise((resolve, reject) => {
        axios[newoption.method]('http://39.98.121.219:8019' + newoption.url, newoption.params).then(res => {
            if (res.data.code === 20001) {
                Router.push('/login');
            } else {
                resolve(res.data)
            }
        }).catch((error) => {
            reject(error);
        })
    })
}
export default request