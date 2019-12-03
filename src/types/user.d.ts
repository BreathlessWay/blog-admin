import { FigureListType } from '@/types/figure';

export type SocialItemType = {
	icon: string;
	value: string;
	objectId?: string;
};

export type SocialListType = Array<SocialItemType>;

export type PersonalSkillItemType = {
	name: string;
	percent: number;
	color: string;
	objectId?: string;
};

export type PersonalSkillListType = Array<PersonalSkillItemType>;

export type UserDetailType = {
	objectId?: string;
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
	rewardTitle: string;
	zfbCode: string;
	wxCode: string;
};
