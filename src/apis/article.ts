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
	data: Omit<ArticleDetailType, '_id' | 'draftDetail' | 'createdAt'>,
) => {
	return axios.post(`/article`, {
		detail: data,
	});
};

export const getArticleDetail = (id: string) => {
	return axios.get(`/article/${id}`);
};

export const updateArticleDetail = (
	id: string,
	data: Partial<ArticleDetailType>,
) => {
	return axios.put(`/article/${id}`, {
		detail: data,
	});
};

export const deleteArticle = (id: string) => {
	return axios.delete(`/article/${id}`);
};

export const batchUpdateArticle = ({
	ids,
	status,
}: {
	ids: Array<string>;
	status: number;
}) => {
	return axios.put('/batch/update/article', {
		ids,
		status,
	});
};

export const batchDeleteArticle = (ids: string) => {
	return axios.delete(`/batch/delete/article?ids=${ids}`);
};
