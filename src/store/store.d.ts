import HomePageStore from '@/store/HomePageStore';
import UserStore from '@/store/UserStore';
import GlobalStore from '@/store/GlobalStore';

export type StoreType = {
	globalStore: GlobalStore;
	homepageStore: HomePageStore;
	userStore: UserStore;
};
