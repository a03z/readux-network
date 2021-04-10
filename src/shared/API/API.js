import axios from 'axios'

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '2949cd0a-91a5-4c21-b30d-26e93062266d',
    },
})

export const usersApi = {
    getUsers: (currentPage = 1, pageSize = 5) => {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize} `)
            .then((res) => res.data)
    },

    userUnfollow: (userId) => {
        return instance.delete(`follow/${userId}`).then((res) => res.data)
    },
    userFollow: (userId) => {
        return instance.post(`follow/${userId}`).then((res) => res.data)
    },
}

export const profileApi = {
    getProfile: (userId) => {
        return instance.get(`profile/${userId} `)
    },
    getStatus: (userId) => {
        return instance.get(`profile/status/${userId} `)
    },
    updateStatus: (status) => {
        return instance.put(`profile/status `, { status })
    },
    setAvatar: (image) => {
        let formData = new FormData()
        formData.append('image', image)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    },
    saveProfile: (profile) => {
        return instance.put(`profile`, profile)
    },
}

export const authApi = {
    me: () => instance.get(`auth/me`),
    login: (email, password, rememberMe = false, captcha) =>
        instance.post(`auth/login`, { email, password, rememberMe, captcha }),
    logout: () => instance.delete(`auth/login`),
}
export const securityApi = {
    getCaptcha: () => instance.get(`security/get-captcha-url`),
}
