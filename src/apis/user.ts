import axios from 'axios';

export const getUserDetail = () => {
	return axios.get('/user');
};

export const updateUserDetail = (data: { [key: string]: any }) => {
	return axios.put('/user', data);
};
