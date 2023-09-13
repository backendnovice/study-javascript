'use strict';

/*
    1. 배열의 선언(array declaration)
*/
const array1 = new Array();
const array2 = [1, 2];

/*
    2. 배열에 접근
*/
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits[0]);                 // 첫 인덱스.
console.log(fruits[fruits.length - 1]); // 마지막 인덱스.

/*
    3. 배열의 순환
*/
// a. for 문
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for-of 문
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach 문
fruits.forEach((fruit) => console.log(fruit));

/*
    4. 배열 요소 조작
*/
// 1) 요소 삽입
// unshift: 배열 요소 삽입. (앞)
fruits.unshift('strawberry', 'peach');
console.log(fruits);

// push: 배열 요소 삽입. (끝)
fruits.push('strawberry', 'peach');
console.log(fruits);

// 2) 요소 제거
// shift 배열 요소 제거. (앞)
fruits.shift();
fruits.shift();
console.log(fruits);

// pop: 배열 끝 요소 제거. (끝)
fruits.pop();
fruits.pop();
console.log(fruits);

// ※ shift / unshift는 기존 인덱스에 변화가 생기므로 속도가 느리다.

// 3) 특정 인덱스 요소 제거.
fruits.splice(1, 1); // 인덱스가 1인 요소부터 하나만 제거.
fruits.splice(1, 1, 'greenapple', 'watermelon'); // 추가적인 데이터를 삽입.

// 4) 배열 합치기.
const _fruits = ['pear', 'coconut'];
const fruitBasket = fruits.concat(_fruits);
console.log(fruitBasket);

// 5) 배열 요소 검색.
console.log(fruits.indexOf('apple'));       // apple의 인덱스 반환.
console.log(fruits.includes('watermelon')); // watermelon의 존재 여부 반환.
console.log(fruits.lastIndexOf('apple'));   // 마지막 apple의 인덱스 반환.