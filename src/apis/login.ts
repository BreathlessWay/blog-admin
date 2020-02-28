import axios from 'axios';

export const valid = () => {
	return axios.get(`/valid`);
};

export const getCode = ({ email }: { email: string }) => {
	return axios.get(`/code?email=${email}`);
};

export const register = ({ email }: { email: string }) => {
	return axios.post(`/register`, {
		email,
	});
};

export const login = ({ email, code }: { email: string; code: number }) => {
	return axios.post(`/login`, {
		email,
		code,
	});
};
