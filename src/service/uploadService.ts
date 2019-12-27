import { message } from 'antd';

import { upload } from '@/apis/upload';

import { MAX_IMAGE_SIZE } from '@/utils/constant';

export const uploadService = async (
	file: File,
	size: number = MAX_IMAGE_SIZE,
): Promise<{
	url: string;
	title: string;
}> => {
	message.destroy();
	const loading = message.loading('文件上传中...', 0);
	try {
		const formData = new FormData();
		if (file.size > size * 1024) {
			throw new Error(`文件超过${size}k, 请重新选择！`);
		}

		formData.append('file', file);
		const res = await upload(formData);
		if (res.data?.success) {
			return Promise.resolve({
				url: res.data?.data?.url,
				title: res.data?.data?.name,
			});
		} else {
			throw new Error();
		}
	} catch (e) {
		message.error(e.message || `${file.name}文件上传失败`);
		return Promise.reject();
	} finally {
		loading();
	}
};
