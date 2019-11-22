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
		default: boolean;
	}>;
	en: string;
	zh: string;
	intro: string;

	likeImage: Array<{
		url: string;
		default: boolean;
	}>;
	personalTitle: '';
	personalInfo: '';
	personalIntro: '';
	personalSkill: Array<{
		name: string;
		percent: number;
	}>;
};
