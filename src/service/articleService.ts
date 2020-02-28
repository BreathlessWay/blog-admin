import { notification } from 'antd';
import store from '@/store';
import { getArticleList } from '@/apis/article';

export const getArticleListService = async () => {
	const {
		articleListStore: { searchQuery, setList, startLoading, stopLoading },
	} = store;
	startLoading();
	try {
		const res = await getArticleList(searchQuery);
		if (res.data?.success) {
			setList(res.data?.data ?? { list: [], count: 0 });
		} else {
			notification['error']({
				message: '获取文章列表失败！',
				description: res.data?.msg,
			});
		}
	} catch (e) {
	} finally {
		stopLoading();
	}
};
