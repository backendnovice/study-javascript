'use strict';

/*
    1. 동기적 콜백(synchronous callback)
*/
function printNow(print) {
    print();
}
printNow(() => console.log('printing now...'));

/*
    2. 비동기적 콜백(asynchronous callback)
*/
function printDelay(print, timeout) {
    setTimeout(print, timeout);
}
printDelay(() => console.log('printing delay...'), 2000);

/*
    3. 콜백 지옥 체험
*/
class UserStorage {
    loginUser(id, password, onSucceess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSucceess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({
                    name: 'ellie',
                    role: 'admin'
                });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role.`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);

// 코드가 전체적으로 난잡하고, 알아보기 힘들다.