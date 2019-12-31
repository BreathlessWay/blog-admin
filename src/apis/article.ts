import axios from 'axios';
import { TagListType } from '@/types/tag';
import { ArticleDetailType } from '@/types/article';

export const getTagList = () => {
	return axios.get('/tags');
};

export const updateTagList = ({ list }: { list: TagListType }) => {
	return axios.post('/tags', {
		list,
	});
};

export const getArticleList = (params: string) => {
	return axios.get(`/article?${params}`);
};

export const createArticle = (
	data: Omit<ArticleDetailType, '_id' | 'draftDetail' | 'createAt'>,
) => {
	return axios.post(`/article`, {
		detail: data,
	});
};
