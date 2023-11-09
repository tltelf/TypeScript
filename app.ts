enum StatusCode {
	SUCCESS = 1,
	IN_PROCESS = 'p',
	FAILED = 'f',
}

const res = {
	message: 'Платеж успешен',
	statusCode: StatusCode.SUCCESS,
};

// 1 - успех
// 'p' - в процессе
// 'f' - отклонен

if (res.statusCode === StatusCode.SUCCESS) {
}

function action(status: StatusCode) {}

action(StatusCode.SUCCESS);
action(1);

const enum Roles {
	ADMIN = 1,
	USER = ADMIN * 2,
	USER2 = 3,
}

const res2 = Roles.ADMIN;
