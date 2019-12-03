import HomePageStore from '@/store/HomePageStore';
import UserStore from '@/store/UserStore';
import GlobalStore from '@/store/GlobalStore';
import TagStore from '@/store/TagStore';
import ArticleListStore from '@/store/ArticleListStore';
import ArticleDetailStore from '@/store/ArticleDetailStore';
import CatStore from '@/store/CatStore';

export type StoreType = {
	globalStore: GlobalStore;
	homepageStore: HomePageStore;
	userStore: UserStore;
	tagStore: TagStore;
	articleListStore: ArticleListStore;
	articleDetailStore: ArticleDetailStore;
	catStore: CatStore;
};
