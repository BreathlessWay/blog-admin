import { notification } from 'antd';
import store from '@/store';
import { getAlbumList } from '@/apis/photography';

export const getAlbumService = async () => {
	const {
		photoAlbumStore: { query, setList, startLoading, stopLoading },
	} = store;
	startLoading();
	try {
		const res = await getAlbumList(query);
		if (res.data?.success) {
			setList(res.data?.data ?? { list: [], count: 0 });
		} else {
			notification['error']({
				message: '获取相册列表失败！',
				description: res.data?.msg,
			});
		}
	} catch (e) {
	} finally {
		stopLoading();
	}
};
