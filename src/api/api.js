import * as axios from 'axios';

export const ResultCodes = {
   Success: 0,
   Error: 1,
   Captcha: 10
}

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': 'c34aaa3c-63b8-46e9-80ef-f9838bbb504e'
   },
   withCredentials: true
});

export const securityAPI = {
   async getCaptcha() {
      const response = await instance.get('security/get-captcha-url');
      return response.data.url;
   }
}

export const authAPI = {
   async me() {
      const response = await instance.get('auth/me')
      return response.data;
   },
   async login(formData) {
      const response = await instance.post('auth/login', formData);
      return response.data;
   },
   async logout() {
      const response = await instance.delete('auth/login');
      return response.data;
   }
}

export const profileAPI = {
   getProfile(userId) {
      return instance.get(`profile/${userId}`);
   },
   getStatus(userId) {
      return instance.get(`profile/status/${userId}`);
   },
   async updateStatus(status) {
      const response = await instance.put('profile/status', { status });
      return response.data;
   },
   async updateProfile(formData) {
      const response = await instance.put('profile', formData);
      return response.data;
   },
   async updatePhoto(photoFile) {
      const formData = new FormData();
      formData.append('image', photoFile);
      const response = await instance.put('profile/photo', formData);
      return response.data;
   }
}

export const usersAPI = {
   async getUsers(pageSize = 10, pageNumber = 1, isFriends = false) {
      const response = await instance.get(`users?page=${pageNumber}&count=${pageSize}&friend=${isFriends}`);
      return response.data;
   },
   async follow(userId) {
      const response = await instance.post(`follow/${userId}`);
      return response.data;
   },
   async unfollow(userId) {
      const response = await instance.delete(`follow/${userId}`);
      return response.data;
   }
}

