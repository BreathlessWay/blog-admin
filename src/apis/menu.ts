import axios from 'axios';

import { EMenuType } from '@/store/HomePageStore/homepage.enum';

export const getMenuList = () => {
	return axios.get(`/menu`);
};

export const updateMenuList = ({
	list,
}: {
	list: Array<{
		name: string;
		show: boolean;
		type: EMenuType;
		onlyAdmin: boolean;
	}>;
}) => {
	return axios.put(`/menu`, { list });
};
