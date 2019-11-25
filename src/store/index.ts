import GlobalStore from '@/store/GlobalStore';

import HomePageStore from './HomePageStore';
import UserStore from '@/store/UserStore';
import TagStore from '@/store/TagStore';
import ArticleStore from '@/store/ArticleStore';

import { StoreType } from './store';

const store: StoreType = {
	globalStore: new GlobalStore(),
	homepageStore: new HomePageStore(),
	userStore: new UserStore(),
	tagStore: new TagStore(),
	articleStore: new ArticleStore(),
};

export default store;
