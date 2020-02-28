import Qs from 'qs';

export const parseSearch = <T>(search: string): T | null => {
	const _search = search.replace(/^\?(.*)$/, '$1');
	if (_search) {
		return Qs.parse(_search);
	}
	return null;
};
