"use strict";
const n = null;
const n1 = null;
const n2 = null;
const n3 = null;
const n4 = null;
const n5 = null;
function getUser() {
    if (Math.random() > 0.5) {
        return null;
    }
    else {
        return {
            name: 'Вася'
        };
    }
}
const user = getUser();
if (user) {
    const n55 = user.name;
}
