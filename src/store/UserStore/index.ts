import { observable, action, computed } from 'mobx';
import { storage } from '@/utils/storage';

import { SKILL_COLOR, SKILL_PERCENT_MID } from '@/utils/constant';

import { UserDetailType } from '@/store/UserStore/user';

export enum EMottoChangeType {
	en = 'en',
	zh = 'zh',
	intro = 'intro',
}

export enum EPersonalChangeType {
	personalTitle = 'personalTitle',
	personalInfo = 'personalInfo',
	personalIntro = 'personalIntro',
}

export enum ERewardChangeType {
	rewardTitle = 'rewardTitle',
	zfbCode = 'zfbCode',
	wxCode = 'wxCode',
}

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
		personalImage: [],
		en: '',
		zh: '',
		intro: '',
		likeImage: [],
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
		storage.set({ key: 'token', value: 'login' });
	}

	@action.bound
	logout() {
		this.session = '';
		storage.remove('token');
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
	changeResume({ fileUrl, fileName }: { fileUrl: string; fileName: string }) {
		this.userDetail.resumeUrl = fileUrl;
		this.userDetail.resumeName = fileName;
	}

	@action.bound
	changeResumeAlias(alias: string) {
		this.userDetail.resumeAlias = alias.trim();
	}

	@action.bound
	removePersonalImage(index: number) {
		this.userDetail.personalImage.splice(index, 1);
	}

	@action.bound
	addPersonalImage(fileUrl: string) {
		this.userDetail.personalImage.push({
			url: fileUrl,
			show: this.personalImageLength === 0,
		});
	}

	@action.bound
	setShowPersonalImage(index: number) {
		this.userDetail.personalImage.forEach((item, i) => {
			item.show = i === index;
		});
	}

	@action.bound
	setMotto({ key, value }: { key: EMottoChangeType; value: string }) {
		this.userDetail[key] = value;
	}

	@action.bound
	setReward({ key, value }: { key: ERewardChangeType; value: string }) {
		this.userDetail[key] = value;
	}
	// 我页面
	@action.bound
	removeLikeImage(index: number) {
		this.userDetail.likeImage.splice(index, 1);
	}

	@action.bound
	addLikeImage(fileUrl: string) {
		this.userDetail.likeImage.push({
			url: fileUrl,
			show: this.likeImageLength === 0,
		});
	}

	@action.bound
	setShowLikeImage(index: number) {
		this.userDetail.likeImage.forEach((item, i) => {
			item.show = i === index;
		});
	}

	@action.bound
	setPersonalInfo({
		value,
		type,
	}: {
		value: string;
		type: EPersonalChangeType;
	}) {
		this.userDetail[type] = value;
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
	get personalImageLength() {
		return this.userDetail.personalImage.length;
	}

	@computed
	get likeImageLength() {
		return this.userDetail.likeImage.length;
	}

	@computed
	get isLogin() {
		return this.session !== '';
	}
}
