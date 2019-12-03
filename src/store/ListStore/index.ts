import { action, computed, observable } from 'mobx';

import { PAGE_LIMIT } from '@/utils/constant';

export default class ListStore<T> {
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

	@computed
	get currentCount() {
		return this.pageSize * this.pageIndex;
	}

	@computed
	get hasNext() {
		return this.count > this.currentCount;
	}

	@computed
	get isEmpty() {
		return !this.list.length;
	}
}
