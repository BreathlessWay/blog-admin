import { observable, action, computed } from 'mobx';
import { storage } from '@/utils/storage';

import ImageStore from '@/store/ImageStore';

import { UserDetailType } from '@/types/user';

import {
	EMottoChangeKey,
	EPersonalChangeKey,
	EResumeChangeKey,
	ERewardChangeKey,
} from '@/store/UserStore/user.enum';

import { LOGIN_TOKEN, SKILL_COLOR, SKILL_PERCENT_MID } from '@/utils/constant';
import { ImageListType } from '@/types/image';

export default class UserStore {
	@observable
	session = '';

	@observable
	personalFigure = new ImageStore();

	@observable
	hobbiesFigure = new ImageStore();

	@observable
	userDetail: UserDetailType | null = null;

	emptySocialTmp = {
		icon: '',
		value: '',
	};
	// 登陆页面
	@action.bound
	login(token: string) {
		this.session = token;
		storage.set({ key: LOGIN_TOKEN, value: token });
	}

	@action.bound
	logout() {
		this.session = '';
		storage.remove(LOGIN_TOKEN);
	}

	@action.bound
	setDetail(
		data: UserDetailType & {
			personalFigure: ImageListType;
			hobbiesFigure: ImageListType;
		},
	) {
		const { personalFigure, hobbiesFigure, ...rest } = data;
		this.userDetail = rest;
		this.personalFigure.setImageList(personalFigure);
		this.hobbiesFigure.setImageList(hobbiesFigure);
	}

	// 首页
	@action.bound
	addSocial() {
		if (this.userDetail) {
			this.userDetail.social.push(this.emptySocialTmp);
		}
	}

	@action.bound
	deleteSocial(index: number) {
		if (this.userDetail) {
			this.userDetail.social.splice(index, 1);
		}
	}

	@action.bound
	filterSocial() {
		if (this.userDetail) {
			this.userDetail.social = this.userDetail?.social.filter(
				item => item.value || item.icon,
			);
		}
	}

	@action.bound
	changeSocialIcon({ fileUrl, index }: { fileUrl: string; index: number }) {
		if (this.userDetail) {
			this.userDetail.social[index].icon = fileUrl;
		}
	}

	@action.bound
	changeSocialValue({ value, index }: { value: string; index: number }) {
		if (this.userDetail) {
			this.userDetail.social[index].value = value.trim();
		}
	}

	@action.bound
	setPersonalInfo({
		key,
		value,
	}: {
		key:
			| EPersonalChangeKey
			| EMottoChangeKey
			| ERewardChangeKey
			| EResumeChangeKey;
		value: any;
	}) {
		if (this.userDetail) {
			(this.userDetail[key] as any) = value;
		}
	}

	// 我页面
	@action.bound
	sortSkill(dragIndex: number, hoverIndex: number) {
		if (this.userDetail) {
			const dragItem = this.userDetail.personalSkill.splice(dragIndex, 1);
			this.userDetail.personalSkill.splice(hoverIndex, 0, ...dragItem);
		}
	}

	@action.bound
	changeSkillName(value: string, index: number) {
		if (this.userDetail) {
			this.userDetail.personalSkill[index].name = value;
		}
	}

	@action.bound
	changeSkillPercent(value: number, index: number) {
		if (this.userDetail) {
			this.userDetail.personalSkill[index].percent = value;
		}
	}

	@action.bound
	changeSkillColor(value: string, index: number) {
		if (this.userDetail) {
			this.userDetail.personalSkill[index].color = value;
		}
	}

	@action.bound
	filterSkill() {
		if (this.userDetail) {
			this.userDetail.personalSkill = this.userDetail.personalSkill.filter(
				item => item.name.trim(),
			);
		}
	}

	@action.bound
	addSkill() {
		if (this.userDetail) {
			this.userDetail.personalSkill.push({
				name: '',
				percent: SKILL_PERCENT_MID,
				color: SKILL_COLOR,
			});
		}
	}

	@computed
	get isLogin() {
		return this.session;
	}

	@computed
	get userId() {
		return this.userDetail?._id ?? '_id';
	}
}
