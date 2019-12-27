import { getUserDetail } from '@/apis/user';
import { notification } from 'antd';
import store from '@/store';

export const getUserDetailService = async () => {
	const res = await getUserDetail();
	if (res.data?.success) {
		store.userStore.setDetail(res.data.data);
	} else {
		notification['error']({
			message: '获取用户信息失败！',
			description: res.data?.msg ?? '获取用户信息失败！',
		});
	}
};
