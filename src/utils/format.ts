export const formatSize = (size: number) => {
	const sizeK = size / 1024;

	if (sizeK < 1024) {
		return Number(sizeK.toFixed(2)) + 'k';
	}

	return Number((sizeK / 1024).toFixed(2)) + 'm';
};
