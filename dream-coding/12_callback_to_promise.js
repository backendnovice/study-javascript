'use strict';

/*
    3. 콜백 지옥 픽스 (promise)
*/
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            
            setTimeout(() => {
                if ((id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({name: 'ellie', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 2000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role.`))
    .catch(console.log);
 
// 콜백함수들을 프로미스를 사용해서 생략할 수 있었다.