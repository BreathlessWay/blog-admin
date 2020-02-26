import { message } from 'antd';

import { upload } from '@/apis/upload';

import { MAX_IMAGE_SIZE, UPLOAD_IMAGE_TYPE } from '@/utils/constant';

export const uploadService = async (params: {
	file: File;
	size?: number;
	accept?: string;
}): Promise<{
	url: string;
	title: string;
}> => {
	message.destroy();
	const { file, size = MAX_IMAGE_SIZE, accept = UPLOAD_IMAGE_TYPE } = params;
	const loading = message.loading('文件上传中...', 0);
	try {
		const formData = new FormData();
		if (file.size > size * 1024) {
			throw new Error(`文件超过${size}k, 请重新选择！`);
		}

		if (accept) {
			const _accept = accept.split(',');
			const matchType = _accept.some(item => file.name.endsWith(item));
			if (!matchType) {
				throw new Error(
					`文件类型为${file.type},只支持上传${accept}类型文件, 请重新选择！`,
				);
			}
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
