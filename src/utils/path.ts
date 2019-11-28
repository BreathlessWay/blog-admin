import { MenuListType } from '@/types/hompage';

export const getPath = (
	_reverse: Array<string>,
	list: MenuListType,
	index: number,
): string => {
	const key = _reverse[index];
	const _item = list[Number(key)];

	if (_item.children && _item.children.length) {
		return getPath(_reverse, _item.children as MenuListType, index + 1);
	} else {
		return _item.path;
	}
};

export const getBreadcrumbNameMap = (
	list: MenuListType,
	maps: Record<string, string>,
) => {
	list.forEach(item => {
		maps[item.path] = item.name;
		if (item.children && item.children.length) {
			getBreadcrumbNameMap(item.children as MenuListType, maps);
		}
	});
};
