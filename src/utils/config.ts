export const env = process.env.NODE_ENV;

export const baseURL = {
	development: 'development',
	production: 'production',
	test: '',
}[env];
