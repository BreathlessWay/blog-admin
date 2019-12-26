import axios from 'axios';

export const getMenuList = () => {
	return axios.get(`/menu`);
};
