import axios from 'axios';

export const getAlbumList = (query: string) => {
	return axios.get(`/album/list?${query}`);
};

export const getAlbumInfo = (id: string) => {
	return axios.get(`/album/${id}`);
};

export const createAlbum = (params: { title: string; show: boolean }) => {
	return axios.post('/album', params);
};

export const updateAlbum = ({
	id,
	data,
}: {
	id: string;
	data: { title: string; show: boolean };
}) => {
	return axios.put(`/album/${id}`, data);
};

export const deleteAlbum = ({ id }: { id: string }) => {
	return axios.delete(`/album/${id}`);
};

export const batchUpdateAlbum = ({
	ids,
	show,
}: {
	ids: Array<string>;
	show: boolean;
}) => {
	return axios.put('/batch/update/album', {
		ids,
		show,
	});
};

export const batchDeleteAlbum = (ids: string) => {
	return axios.delete(`/batch/delete/album?ids=${ids}`);
};
