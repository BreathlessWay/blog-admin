import GlobalStore from '@/store/GlobalStore';

import HomePageStore from './HomePageStore';
import UserStore from '@/store/UserStore';

import { StoreType } from './store';

const store: StoreType = {
	globalStore: new GlobalStore(),
	homepageStore: new HomePageStore(),
	userStore: new UserStore(),
};

export default store;
