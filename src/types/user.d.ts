import { ImageListType } from '@/types/image';

export type SocialItemType = {
	icon: string;
	value: string;
	_id?: string;
};

export type SocialListType = Array<SocialItemType>;

export type PersonalSkillItemType = {
	name: string;
	percent: number;
	color: string;
	_id?: string;
};

export type PersonalSkillListType = Array<PersonalSkillItemType>;

export type UserDetailType = {
	_id?: string;
	resumeAlias: string;
	resumeUrl: string;
	resumeName: string;
	resumeImageUrl: string;
	social: SocialListType;
	en: string;
	zh: string;
	intro: string;
	personalTitle: string;
	personalInfo: string;
	personalIntro: string;
	personalSkill: PersonalSkillListType;
	rewardEnable: boolean;
	rewardTitle: string;
	zfbCode: string;
	wxCode: string;
};
