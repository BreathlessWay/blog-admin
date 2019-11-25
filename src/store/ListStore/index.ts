import { action, computed, observable } from 'mobx';

import { PAGE_LIMIT } from '@/utils/constant';

export default class ListStore {
	limit = PAGE_LIMIT;

	@observable
	pageIndex = 1;

	@observable
	count = 0;

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

	@computed
	get currentCount() {
		return this.limit * this.pageIndex;
	}

	@computed
	get hasNext() {
		return this.count > this.currentCount;
	}
}
