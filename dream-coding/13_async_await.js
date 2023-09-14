'use strict';

/*
    1. async & await
    promise를 깔끔하게 사용할 수 있는 방법.
*/
// 기존 promise를 사용.
function fetchUser() {
    return new Promise((resolve, reject) => {
        // return 'ellie'; // resolve와 reject를 호출하지 않았기 때문에, pending 상태.
        resolve('ellie');  // resolve를 호출했기 때문에 fulfuilled.
    }); 
}
const user1 = fetchUser();
console.log(user1);

// async 키워드 사용.
async function fetchUserWithAsync() { // async를 사용하면 promise를 만들 수 있다.
    return 'ellie';
}
const user2 = fetchUserWithAsync();
console.log(user2);

// await 키워드 사용.
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() { // await은 async 안에서만 사용할 수 있다.
    await delay(1000);      // await은 기다려준다.
    return 'apple';
}

async function getBanana() {
    await delay(1000);
    return 'banana';
}

// 사과와 바나나를 쉽게 출력하기. (async-await)
async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

// pickFruits() 병렬처리하기.
async function pickFruitsParallel() {
    return Promise.all([getApple(), getBanana()]) // promise.all() 사용.
        .then(fruits => fruits.join(', '));
}
pickFruitsParallel().then(console.log);

// 먼저 호출되는 과일 출력하기.
async function getPear() {
    await delay(500);
    return 'pear';
}
async function pickFruitsRace() {
    return Promise.race([getApple(), getPear()]);
}
pickFruitsRace().then(console.log);