interface User {
	name: string;
}

interface User {
	age: number;
}

const user: User = {
	name: 'as',
	age: 26,
};

type ID = string | number;

interface IDI {
	ID: string | number;
}
