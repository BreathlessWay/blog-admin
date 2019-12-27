import axios from 'axios';

export const upload = (params: FormData) => {
	return axios.post('/upload', params, {
		headers: { 'Content-Type': 'multipart/form-data' },
	});
};
