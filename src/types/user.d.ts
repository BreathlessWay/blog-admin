export type SocialItemType = {
	icon: string;
	value: string;
	objectId?: string;
};

export type SocialListType = Array<SocialItemType>;

export type PersonalImageItemType = {
	url: string;
	show: boolean;
	objectId?: string;
};

export type PersonalImageListType = Array<PersonalImageItemType>;

export type LikeImageItemType = {
	url: string;
	show: boolean;
	objectId?: string;
};

export type LikeImageListType = Array<LikeImageItemType>;

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
	personalImage: PersonalImageListType;
	en: string;
	zh: string;
	intro: string;
	likeImage: LikeImageListType;
	personalTitle: string;
	personalInfo: string;
	personalIntro: string;
	personalSkill: PersonalSkillListType;
	rewardTitle: string;
	zfbCode: string;
	wxCode: string;
};
