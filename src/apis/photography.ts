import axios from 'axios';

export const getAlbumList = (query: string) => {
	return axios.get(`/album/list?${query}`);
};

export const createAlbum = (params: { title: string; show: boolean }) => {
	return axios.post('/album', params);
};
