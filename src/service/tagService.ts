import { notification } from 'antd';
import store from '@/store';
import { getTagList } from '@/apis/article';

export const getTagListService = async () => {
	const res = await getTagList();
	if (!res.data?.success) {
		notification['error']({
			message: '获取标签列表失败！',
			description: res.data?.msg,
		});
	} else {
		store.tagStore.setTags(res.data?.data?.list ?? []);
	}
};
