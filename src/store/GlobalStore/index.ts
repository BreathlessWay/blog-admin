import { action, observable } from 'mobx';

export default class GlobalStore {
	@observable
	loading = false;

	@action.bound
	startLoading() {
		this.loading = true;
	}

	@action.bound
	endLoading() {
		this.loading = false;
	}
}
