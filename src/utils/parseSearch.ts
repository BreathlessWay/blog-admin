import qs from 'qs';

export const parseSearch = (search: string) => {
	const _search = search.replace(/^\?(.*)$/, '$1');
	if (_search) {
		return qs.parse(_search);
	}
	return null;
};
