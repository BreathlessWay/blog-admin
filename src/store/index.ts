import GlobalStore from '@/store/GlobalStore';

import HomePageStore from './HomePageStore';
import UserStore from '@/store/UserStore';
import TagStore from '@/store/TagStore';
import ArticleListStore from '@/store/ArticleListStore';
import ArticleDetailStore from '@/store/ArticleDetailStore';

import { StoreType } from './store';

const store: StoreType = {
	globalStore: new GlobalStore(),
	homepageStore: new HomePageStore(),
	userStore: new UserStore(),
	tagStore: new TagStore(),
	articleListStore: new ArticleListStore(),
	articleDetailStore: new ArticleDetailStore(),
};

export default store;
