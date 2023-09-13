'use strict';

/*
    1. Object
    연관된 데이터, 기능들의 집합 역할을 수행하는 데이터 타입이다.
    ※ JS에 존재하는 모든 오브젝트들은 Object의 인스턴스이다.
*/
const object1 = {};           // object 리터럴 구문.
const object2 = new Object(); // object 생성자 구문.

const person = {name: 'steve', age: 20};
function print(person) {
    console.log(person.name);
    console.log(person.age);
}

// 런타임(Runtime) 중, 프로퍼티 추가 및 삭제가 가능하다.
person.hasJob = true;
console.log(person.hasJob);
delete person.hasJob;

/*
    2. Computed property
    (ES6) string 타입을 사용하여 동적으로 프로퍼티명을 할당하는 방법이다.
*/
console.log(person.name);    // 키에 해당하는 값을 가져오고 싶을 때 사용한다.
console.log(person['name']); // 런타임 환경에서 정확한 키를 모를 때 사용한다.

/*
    3. 프로퍼티 단축 (property value shorthand)
    오브젝트의 키와 값의 이름이 동일하다면 단축할 수 있다.
*/
const person1 = { name: 'bob', age: 21};
const person2 = { name: 'steve', age: 22};
const person3 = { name: 'james', age: 23};
const person4 = makePerson('elile', 30);

// Person 인스턴스를 생성하는 함수.
function makePerson(name , age) {
    return {name, age}; // 숏핸드 예.
}

/*
    4. in 연산자(in operator)
    인스턴스에 특정 프로퍼티의 존재 여부를 확인하는 연산자.
*/
console.log('name' in person4);
console.log('age' in person4);
console.log('fake' in person4);

/*
    5. for-in 과 for-of 문
    레거시 for 문을 대체할 수 있는 enhanced-for 문.
*/
// 오브젝트의 프로퍼티를 출력하는 for-in 문.
for (key in person) {
    console.log(key);
}

// 배열 & 리스트 요소 순회에서 사용하는 for-of 문.
const array = [1, 2, 3, 4, 5];
for (value of array) {
    console.log(value);
}

/*
    5. 오브젝트 복사 (object cloning)
*/
// 옛날 방법, for-in 문으로 복사.
const oldClone = {};
for (key in person) {
    oldClone[key] = person[key];
}
console.log(oldClone);

// 새로운 방법, Object.assign으로 복사.
const newClone1 = Object.assign({}, oldClone);
const newClone2 = Object.assign({}, person1, person2); // 동일한 키가 있을 경우, 뒤의 오브젝트가 덮어쓴다.
console.log(newClone1);
console.log(newClone2);
