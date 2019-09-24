import *as axios from 'axios';

const instance = axios.create({
    baseURL: `https://mysterious-reef-29460.herokuapp.com/api/v1/`,
    headers: {
        'Content-Type': 'application/json',
    }
})

export const dataAPI = {
    getNewsData() {
        return instance.get(`news`)
    },
    getProfileData(userId) {
        return instance.get(`user-info/${userId}`)
    },
    sendAuthData(email, password) {
        return instance.post(`validate/`, { email: email, password: password })

    }
}
