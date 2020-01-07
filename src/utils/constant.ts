// 邮箱正则
export const EMAIL_REG = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

// 登陆后本地的token键
export const LOGIN_TOKEN = 'login_token';

// 最大上传图片数量
export const MAX_IMAGE_COUNT = 5;

// 默认上传图片类型
export const UPLOAD_IMAGE_TYPE = '.ico,.png,.jpg,.jpeg';

// 默认上传简历类型
export const UPLOAD_RESUME_TYPE = '.doc,.docx,.page,.jpeg,.png,.pdf';

// 倒计时
export const TIME_COUNT_DOWN = 60;

// 技能中间值
export const SKILL_PERCENT_MID = 50;

// 技能默认色
export const SKILL_COLOR = '#333';

// 默认每页数量
export const PAGE_LIMIT = 10;

// tag颜色
export const TAG_COLOR = [
	'magenta',
	'red',
	'volcano',
	'orange',
	'gold',
	'lime',
	'green',
	'cyan',
	'blue',
	'geekblue',
	'purple',
];

// 文本输入字数限制
export const MAX_LENGTH_XS = 4;

export const MAX_LENGTH_SM = 10;

export const MAX_LENGTH_MD = 20;

export const MAX_LENGTH_LG = 100;

export const MAX_LENGTH_XL = 200;

export const MAX_LENGTH_XXL = 400;

// 文章草稿键值
export const ARTICLE_CACHE_KEY = 'article_cache_key';

// 文章自动保存定时时间
export const ARTICLE_CACHE_TIME = 3000;

// 文章详情图片大小
export const ARTICLE_IMAGE_SIZE = 100;

// 图片大小
export const MAX_IMAGE_SIZE = 500;

// 简历文件大小
export const MAX_RESUME_SIZE = 2048;

// 社交icon大小
export const MAX_SOCIAL_SIZE = 20;

// icon的font-size
export const ACTION_ICON_SIZE = 24;

// 是否支持IntersectionObserver
export const SUPPORT_INTERSECTION_OBSERVER =
	(typeof window.IntersectionObserver).toLowerCase() !== 'function';

// 图片src存储key
export const IMAGE_DATA_SRC = 'data-src';

// 401
export const LOGIN_ERROR_CODE = 401;

export const OFFSET_BOTTOM_HEIGHT = 50;
