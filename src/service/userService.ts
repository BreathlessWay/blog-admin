import { getUserDetail, updateUserDetail } from '@/apis/user';
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

export const updateUserService = async (data: { [key: string]: any }) => {
	const res = await updateUserDetail(data);
	if (res.data?.success) {
		store.userStore.setDetail(res.data.data);
	} else {
		notification['error']({
			message: '更新用户信息失败！',
			description: res.data?.msg ?? '更新用户信息失败！',
		});
		throw new Error();
	}
};
