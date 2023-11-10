type User = {
	name: string;
	age: number;
	skills: string[];
};

type Role = {
	name: string;
	id: number;
};

type UserWithRole = User & Role;

let user: UserWithRole = {
	name: 'asd',
	age: 26,
	skills: ['1', '2'],
	id: 1,
};
