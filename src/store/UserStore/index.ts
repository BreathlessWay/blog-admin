import { observable, action, computed } from 'mobx';
import { storage } from '@/utils/storage';

import FigureStore from '@/store/FigureStore';

import { UserDetailType } from '@/types/user';

import {
	EMottoChangeKey,
	EPersonalChangeKey,
	EResumeChangeKey,
	ERewardChangeKey,
} from '@/store/UserStore/user.enum';

import { LOGIN_TOKEN, SKILL_COLOR, SKILL_PERCENT_MID } from '@/utils/constant';

export default class UserStore {
	@observable
	session = '';

	@observable
	personalFigure = new FigureStore();

	@observable
	hobbiesFigure = new FigureStore();

	@observable
	userDetail: UserDetailType = {
		resumeAlias: '',
		resumeUrl: '',
		resumeName: '',
		resumeImageUrl: '',
		social: [],
		en: '',
		zh: '',
		intro: '',
		personalTitle: '',
		personalInfo: '',
		personalIntro: '',
		personalSkill: [],
		rewardTitle: '',
		zfbCode: '',
		wxCode: '',
	};

	emptySocialTmp = {
		icon: '',
		value: '',
	};
	// 登陆页面
	@action.bound
	login(token: string) {
		this.session = token;
		storage.set({ key: LOGIN_TOKEN, value: 'login' });
	}

	@action.bound
	logout() {
		this.session = '';
		storage.remove(LOGIN_TOKEN);
	}
	// 首页
	@action.bound
	addSocial() {
		this.userDetail.social.push(this.emptySocialTmp);
	}

	@action.bound
	deleteSocial(index: number) {
		this.userDetail.social.splice(index, 1);
	}

	@action.bound
	filterSocial() {
		this.userDetail.social = this.userDetail.social.filter(
			item => item.value || item.icon,
		);
	}

	@action.bound
	changeSocialIcon({ fileUrl, index }: { fileUrl: string; index: number }) {
		this.userDetail.social[index].icon = fileUrl;
	}

	@action.bound
	changeSocialValue({ value, index }: { value: string; index: number }) {
		this.userDetail.social[index].value = value.trim();
	}

	@action.bound
	setPersonalInfo({
		value,
		key,
	}: {
		value: string;
		key:
			| EPersonalChangeKey
			| EMottoChangeKey
			| ERewardChangeKey
			| EResumeChangeKey;
	}) {
		this.userDetail[key] = value;
	}

	// 我页面
	@action.bound
	sortSkill(dragIndex: number, hoverIndex: number) {
		const dragItem = this.userDetail.personalSkill.splice(dragIndex, 1);
		this.userDetail.personalSkill.splice(hoverIndex, 0, ...dragItem);
	}

	@action.bound
	changeSkillName(value: string, index: number) {
		this.userDetail.personalSkill[index].name = value;
	}

	@action.bound
	changeSkillPercent(value: number, index: number) {
		this.userDetail.personalSkill[index].percent = value;
	}

	@action.bound
	changeSkillColor(value: string, index: number) {
		this.userDetail.personalSkill[index].color = value;
	}

	@action.bound
	filterSkill() {
		this.userDetail.personalSkill = this.userDetail.personalSkill.filter(item =>
			item.name.trim(),
		);
	}

	@action.bound
	addSkill() {
		this.userDetail.personalSkill.push({
			name: '',
			percent: SKILL_PERCENT_MID,
			color: SKILL_COLOR,
		});
	}

	@computed
	get isLogin() {
		return this.session !== '';
	}

	@computed
	get userId() {
		return this.userDetail.objectId || 'objectId';
	}
}
