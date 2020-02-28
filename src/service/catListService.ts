import { notification } from 'antd';
import store from '@/store';
import { getCatList } from '@/apis/cat';

export const getCatListService = async () => {
	const {
		catStore: { query, setList, startLoading, stopLoading },
	} = store;
	startLoading();
	try {
		const res = await getCatList(query);

		if (res.data?.success) {
			setList(res.data?.data ?? { list: [], count: 0 });
		} else {
			notification['error']({
				message: '获取图片列表失败！',
				description: res.data?.msg,
			});
		}
	} catch (e) {
	} finally {
		stopLoading();
	}
};
