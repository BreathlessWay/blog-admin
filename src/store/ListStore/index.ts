import { action, computed, observable } from 'mobx';

import { PAGE_LIMIT } from '@/utils/constant';

export default class ListStore<
	T extends { _id: string; checked?: boolean; show?: boolean }
> {
	@observable
	list: Array<T> = [];

	@observable
	pageSize = PAGE_LIMIT;

	@observable
	pageIndex = 1;

	@observable
	count = 0;

	@observable
	loading = false;

	@observable
	error = false;

	@observable
	errMsg = '';

	@action.bound
	prePage() {
		if (this.pageIndex > 1) {
			this.pageIndex--;
		}
	}

	@action.bound
	nextPage() {
		if (this.hasNext) {
			this.pageIndex++;
		}
	}

	@action.bound
	jumpToPage(page: number) {
		this.pageIndex = page;
	}

	@action.bound
	startLoading() {
		this.loading = true;
	}

	@action.bound
	stopLoading() {
		this.loading = false;
	}

	@action.bound
	changePageSize(pageSize: number) {
		this.pageSize = pageSize;
	}

	@action.bound
	setList({ list, count }: { list: Array<T>; count: number }) {
		this.list = list;
		this.count = count;
	}

	@action.bound
	changeCount(count: number) {
		this.count = count;
	}

	@action.bound
	removeItem(item: T) {
		this.list = this.list.filter(value => value._id !== item._id);
	}

	@action.bound
	setItem(item: T) {
		this.list = this.list.map(_ => {
			if (_._id === item._id) {
				return item;
			}
			return _;
		});
	}

	@action.bound
	addList(list: Array<T>) {
		this.list = this.list.concat(list);
	}

	@action.bound
	batchChangeChecked() {
		const { isAllListChecked } = this;
		this.list = this.list.map(item => {
			item.checked = !isAllListChecked;
			return item;
		});
	}

	@action.bound
	batchHide() {
		if (!this.hasChecked) {
			return;
		}
		this.list = this.list.map(item => {
			if (item.checked) {
				item.show = false;
			}
			return item;
		});
	}

	@action.bound
	batchShow() {
		if (!this.hasChecked) {
			return;
		}
		this.list = this.list.map(item => {
			if (item.checked) {
				item.show = true;
			}
			return item;
		});
	}

	@action.bound
	batchDelete() {
		if (!this.hasChecked) {
			return;
		}
		this.list = this.list.filter(item => !item.checked);
	}

	@action.bound
	resetStore() {
		this.list = [];
		this.pageIndex = 1;
		this.count = 0;
		this.loading = false;
		this.error = false;
		this.errMsg = '';
		this.pageSize = PAGE_LIMIT;
	}

	@computed
	get currentCount() {
		return this.pageSize * this.pageIndex;
	}

	@computed
	get hasNext() {
		return this.count > this.currentCount;
	}

	@computed
	get listLength() {
		return this.list.length;
	}

	@computed
	get isEmpty() {
		return this.listLength === 0;
	}

	@computed
	get isAllListChecked() {
		return this.list.every(item => item.checked);
	}

	@computed
	get hasChecked() {
		return this.checkedId.length > 0;
	}

	@computed
	get checkedId(): Array<string> {
		return this.list
			.map(item => {
				if (item.checked) {
					return item._id;
				}
				return void 0;
			})
			.filter(v => v) as Array<string>;
	}
}
