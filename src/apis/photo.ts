import axios from 'axios';

export const getPhotoList = ({
	albumId,
	query,
}: {
	albumId: string;
	query: string;
}) => {
	return axios.get(`/photo/list/${albumId}?${query}`);
};

export const createPhoto = ({
	albumId,
	list,
}: {
	albumId: string;
	list: Array<{ title: string; url: string; show: boolean }>;
}) => {
	return axios.post(`/photo/${albumId}`, {
		list,
	});
};

export const updatePhotoInfo = ({
	albumId,
	id,
	data,
}: {
	albumId: string;
	id: string;
	data: {
		title: string;
		intro: string;
		url: string;
		show: boolean;
		albumId: string;
	};
}) => {
	return axios.put(`/photo/${albumId}/${id}`, data);
};

export const deletePhoto = ({
	albumId,
	id,
}: {
	albumId: string;
	id: string;
}) => {
	return axios.delete(`/photo/${albumId}/${id}`);
};

export const batchChangePhotoShow = ({
	albumId,
	ids,
	show,
}: {
	albumId: string;
	ids: Array<string>;
	show: boolean;
}) => {
	return axios.put(`/batch/update/photo/${albumId}`, { ids, show });
};

export const batchDeletePhoto = ({
	albumId,
	ids,
}: {
	albumId: string;
	ids: string;
}) => {
	return axios.delete(`/batch/delete/photo/${albumId}?ids=${ids}`);
};

export const setAlbumCover = ({
	albumId,
	id,
}: {
	albumId: string;
	id: string;
}) => {
	return axios.put(`/album/cover/${albumId}/${id}`);
};
