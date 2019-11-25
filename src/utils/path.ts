export const getPath = (
	_reverse: Array<string>,
	list: Array<{
		name: string;
		path: string;
		children: Array<{ name: string; path: string }>;
	}>,
	index: number,
): string => {
	const key = _reverse[index];
	const _item = list[Number(key)];

	if (_item.children && _item.children.length) {
		return getPath(_reverse, _item.children as any, index + 1);
	} else {
		return _item.path;
	}
};

export const getMapRoute = (
	list: Array<{
		name: string;
		path: string;
		children?: Array<{ name: string; path: string }>;
	}>,
	maps: Record<string, string>,
) => {
	list.forEach(item => {
		if (item.children && item.children.length) {
			getMapRoute(item.children, maps);
		} else {
			maps[item.path] = item.name;
		}
	});
};
