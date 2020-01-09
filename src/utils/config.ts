export const env = process.env.NODE_ENV;

export const baseURL = {
	development: 'blog-admin',
	production: 'blog-admin',
	test: '',
}[env];
