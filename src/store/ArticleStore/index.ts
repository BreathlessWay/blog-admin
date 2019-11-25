import { action, computed, observable } from 'mobx';

import ListStore from '@/store/ListStore';

export default class ArticleStore extends ListStore {
	limit = 20;

	@observable
	list = [];
}
