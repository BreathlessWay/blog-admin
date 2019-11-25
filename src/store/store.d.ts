import HomePageStore from '@/store/HomePageStore';
import UserStore from '@/store/UserStore';
import GlobalStore from '@/store/GlobalStore';
import TagStore from '@/store/TagStore';
import ArticleStore from '@/store/ArticleStore';

export type StoreType = {
	globalStore: GlobalStore;
	homepageStore: HomePageStore;
	userStore: UserStore;
	tagStore: TagStore;
	articleStore: ArticleStore;
};
