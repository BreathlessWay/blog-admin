import { message } from 'antd';

export const uploadFile = (
	file: File,
): Promise<{
	url: string;
	name: string;
}> => {
	return new Promise((resolve, reject) => {
		// 伪文件上传预览
		const loading = message.loading('文件上传中...', 0);
		const fileReader = new FileReader();
		fileReader.readAsDataURL(file);
		fileReader.onload = e => {
			if (e.target && e.target.result) {
				loading();
				resolve({ url: e.target.result as string, name: file.name });
			} else {
				reject();
			}
		};
	});
};
