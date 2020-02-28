import store from '@/store';
import { LOGIN_TOKEN } from '@/utils/constant';
import Qs from 'qs';

export const storage = {
	getKey(key: string) {
		if (key !== LOGIN_TOKEN) {
			key = `${store.userStore.userId}_${key}`;
		}
		return key;
	},
	set({ key, value }: { key: string; value: any }) {
		const _key = storage.getKey(key);
		if (value) {
			window.localStorage.setItem(_key, Qs.stringify({ data: value }));
		} else {
			storage.remove(_key);
		}
	},
	get(key: string) {
		const _key = storage.getKey(key);
		const item = window.localStorage.getItem(_key);
		return item ? Qs.parse(item).data : null;
	},
	remove(key: string) {
		const _key = storage.getKey(key);
		window.localStorage.removeItem(_key);
	},
	clear() {
		window.localStorage.clear();
	},
};
