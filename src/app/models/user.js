// @flow
export type User = {
	id: number,
	email: string,
	firstName: string,
	lastName: string,
	country: string,
	password?: string,
	confirmPassword?: string
};
