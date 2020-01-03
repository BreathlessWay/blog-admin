import axios from 'axios';

export const getCatFigure = () => {
	return axios.get('/cat/figure');
};

export const createCatFigure = (params: {
	title: string;
	intro?: string;
	url: string;
	show: boolean;
}) => {
	return axios.post('/cat/figure', params);
};

export const changeCatFigure = (params: {
	_id: string;
	title: string;
	intro?: string;
	url: string;
	show: boolean;
}) => {
	const { _id, ...rest } = params;
	return axios.put(`/cat/figure/${_id}`, rest);
};

export const deleteCatFigure = (id: string) => {
	return axios.delete(`/cat/figure/${id}`);
};
