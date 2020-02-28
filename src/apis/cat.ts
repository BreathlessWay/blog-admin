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

export const getCatList = (params: string) => {
	return axios.get(`/cat/list?${params}`);
};

export const createCatList = (
	params: Array<{
		title: string;
		intro?: string;
		url: string;
		show: boolean;
	}>,
) => {
	return axios.post('/cat/list', {
		list: params,
	});
};

export const changeCatInfo = (params: {
	_id: string;
	title: string;
	intro?: string;
	url: string;
	show: boolean;
}) => {
	const { _id, ...rest } = params;
	return axios.put(`/cat/list/${_id}`, rest);
};

export const deleteCatItem = (id: string) => {
	return axios.delete(`/cat/list/${id}`);
};

export const batchChangeCatInfo = (params: {
	ids: Array<string>;
	show: boolean;
}) => {
	return axios.put(`/cat/list`, params);
};

export const batchDeleteCatItem = (ids: Array<string>) => {
	return axios.delete(`/cat/list?ids=${JSON.stringify(ids)}`);
};
