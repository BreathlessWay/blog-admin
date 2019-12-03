import { observable, action, computed } from 'mobx';
import { storage } from '@/utils/storage';

import { LOGIN_TOKEN, SKILL_COLOR, SKILL_PERCENT_MID } from '@/utils/constant';

import { UserDetailType } from '@/types/user';

import {
	EMottoChangeKey,
	EPersonalChangeKey,
	EResumeChangeKey,
	ERewardChangeKey,
} from '@/store/UserStore/user.enum';
import { FigureItemType } from '@/types/figure';

export default class UserStore {
	@observable
	session = '';

	@observable
	userDetail: UserDetailType = {
		resumeAlias: '',
		resumeUrl: '',
		resumeName: '',
		resumeImageUrl: '',
		social: [],
		personalFigure: [],
		en: '',
		zh: '',
		intro: '',
		hobbiesFigure: [],
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
	removePersonalFigure(index: number) {
		this.userDetail.personalFigure.splice(index, 1);
	}

	@action.bound
	addPersonalFigure(params: FigureItemType) {
		this.userDetail.personalFigure.push(params);
	}

	@action.bound
	setShowPersonalFigure(index: number) {
		this.userDetail.personalFigure.forEach((item, i) => {
			item.show = i === index;
		});
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
	removeHobbiesFigure(index: number) {
		this.userDetail.hobbiesFigure.splice(index, 1);
	}

	@action.bound
	addHobbiesFigure(params: FigureItemType) {
		this.userDetail.hobbiesFigure.push(params);
	}

	@action.bound
	setShowHobbiesFigure(index: number) {
		this.userDetail.hobbiesFigure.forEach((item, i) => {
			item.show = i === index;
		});
	}

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
	get personalFigureLength() {
		return this.userDetail.personalFigure.length;
	}

	@computed
	get hobbiesFigureLength() {
		return this.userDetail.hobbiesFigure.length;
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
