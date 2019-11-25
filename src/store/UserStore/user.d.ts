export type UserDetailType = {
	resumeAlias: string;
	resumeUrl: string;
	resumeName: string;
	resumeImageUrl: string;
	social: Array<{
		icon: string;
		value: string;
	}>;
	personalImage: Array<{
		url: string;
		show: boolean;
	}>;
	en: string;
	zh: string;
	intro: string;

	likeImage: Array<{
		url: string;
		show: boolean;
	}>;
	personalTitle: string;
	personalInfo: string;
	personalIntro: string;
	personalSkill: Array<{
		name: string;
		percent: number;
		color: string;
	}>;
	rewardTitle: string;
	zfbCode: string;
	wxCode: string;
};
