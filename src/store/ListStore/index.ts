import { action, computed, observable } from 'mobx';

import { PAGE_LIMIT } from '@/utils/constant';

export default class ListStore<T extends { objectId: string }> {
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
	changeLoading() {
		this.loading = !this.loading;
	}

	@action.bound
	changePageSize(pageSize: number) {
		this.pageSize = pageSize;
	}

	@action.bound
	setList({ results, count }: { results: Array<T>; count: number }) {
		this.list = results;
		this.count = count;
	}

	@action.bound
	removeItem(item: T) {
		this.list = this.list.filter(value => value.objectId !== item.objectId);
	}

	@action.bound
	setItem(item: T) {
		this.list = this.list.map(_ => {
			if (_.objectId === item.objectId) {
				return item;
			}
			return _;
		});
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
}
