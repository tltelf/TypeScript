"use strict";
let a = 5;
let b = a.toString();
let e = new String(a).valueOf();
let f = new Boolean(a).valueOf();
let c = 'sdfs';
let d = parseInt(c);
const user = {
    name: 'Вася',
    email: 'vasiliy@gmail.com',
    login: 'Vasya',
};
const admin = Object.assign(Object.assign({}, user), { role: 1 });
function userToAdmin(user) {
    return {
        name: user.name,
        role: 1,
    };
}
