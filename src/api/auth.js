import axios from "axios"
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'

export const setAuthHeader = token => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


};
export const clearAuthHeader = () => {
    axios.defaults.headers.common['Authorization'] = '';
};

export const registerUser = async (data) => {
    const response = await axios.post('users/signup', data)

    return response.data
}

export const logIn = async (data) => {
    const response = await axios.post('users/login', data)

    return response.data
}

export const logOut = async () => {
    const response = await axios.post('users/logout')
    return response.data
}