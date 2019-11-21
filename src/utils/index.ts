export const storage = {
  set({ key, value }: { key: string; value: any }) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },
  get(key: string) {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
  remove(key: string) {
    window.localStorage.removeItem(key);
  },
  clear() {
    window.localStorage.clear();
  }
};
