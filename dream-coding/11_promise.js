'use strict';

/*
    1. promise
    promise 오브젝트는 비동기에서 콜백함수를 대체한다.
*/

/*
    2. producer
    새로운 promise가 생성될 때, executor가 자동으로 실행된다.
*/
const promise = new Promise((resolve, reject) => {
    // 주로 네트워크 통신과 같은 작업같이 무거운 작업들을 수행한다.
    console.log('doing heavy works...');
    setTimeout(() => {
        // resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
});

/*
    3. consumer
    then, catch, finally를 사용해서 값을 받을 수 있다.
*/
promise
    .then((value) => { // value는 resolve 값이 들어온다.
        console.log(value);
    })
    .catch((error) => { // error는 reject 값이 들어온다.
        console.log(error);
    })
    .finally(() => { // finally는 성공, 실패와 관계없이 수행한다.
        console.log('finally');
    });


/*
    4. promise chaining
*/
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then((number) => number * 2)
    .then((number) => number * 3)
    .then((number) => { // then을 값 뿐만 아니라 promise를 전달할 수 있다.
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(number - 1), 1000);
        });
    })
    .then((number) => console.log(number));

/*
    5. error handling
*/
const getChicken = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('chicken'), 1000);
    });
const getEgg = (chicken) =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${chicken} => 'egg'`), 1000);
        setTimeout(() => reject(new Error(`error! ${chicken} => 'egg'`)), 1000);
    });
const cookEgg = (egg) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 'fried egg'`), 1000);
    });

// getChicken()
//     .then((chicken) => getEgg(chicken))
//     .then((egg) => cookEgg(egg))
//     .then((meal) => console.log(meal));

// ※ 콜백함수를 전달할 때, 값을 바로 콜백함수로 전달한다면 생략이 가능하다.
getChicken()
    .then(getEgg)
    .then(cookEgg)
    .then(console.log)
    .catch(console.log);


    