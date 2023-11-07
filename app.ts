function getFullName(userEntity: {
  firstName: string;
  surname: string;
}): string {
  return `${userEntity.firstName} ${userEntity.surname}`;
}

const user = {
  firstName: 'Вася',
  surname: 'Пупкин',
  city: 'Moscow',
  age: 33,
  skills: {
    dev: true,
    devops: true,
  },
};

console.log(getFullName(user));
