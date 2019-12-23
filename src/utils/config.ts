export const env = process.env.NODE_ENV;

export const baseURL = {
	development: '/api',
	production: 'production',
	test: '',
}[env];
