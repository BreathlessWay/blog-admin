import store from '@/store';
import { LOGIN_TOKEN } from '@/utils/constant';

export const storage = {
	getKey(key: string) {
		if (key !== LOGIN_TOKEN) {
			key = `${store.userStore.userId}_${key}`;
		}
		return key;
	},
	set({ key, value }: { key: string; value: any }) {
		const _key = storage.getKey(key);
		window.localStorage.setItem(_key, JSON.stringify(value));
	},
	get(key: string) {
		const _key = storage.getKey(key);
		const item = window.localStorage.getItem(_key);
		return item ? JSON.parse(item) : null;
	},
	remove(key: string) {
		const _key = storage.getKey(key);
		window.localStorage.removeItem(_key);
	},
	clear() {
		window.localStorage.clear();
	},
};
