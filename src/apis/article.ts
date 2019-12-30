import axios from 'axios';
import { TagListType } from '@/types/tag';

export const getTagList = () => {
	return axios.get('/tags');
};

export const updateTagList = ({ list }: { list: TagListType }) => {
	return axios.post('/tags', {
		list,
	});
};
