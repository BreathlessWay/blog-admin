import { message } from 'antd';

export const uploadFile = (
	file: File,
	callback: (params: { url: string; name: string }) => void,
) => {
	// 伪文件上传预览
	const hide = message.loading('文件上传中...', 0);
	const fileReader = new FileReader();
	fileReader.readAsDataURL(file);
	fileReader.onload = e => {
		if (e.target && e.target.result) {
			hide();
			callback({ url: e.target.result as string, name: file.name });
		}
	};
};
