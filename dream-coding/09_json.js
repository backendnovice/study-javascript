'use strict';

/*
    1. 직렬화(serialize)
    object를 JSON으로 stringify 하는 방법.
*/
// boolean => JSON
let json = JSON.stringify(true);
console.log(json);

// array => JSON
json = JSON.stringify(['apple', 'banana']);
console.log(json);

// object => JSON
const rabbit = {
    name: 'rabbit',
    color: 'white',
    size: null,
    birth: new Date(),
    // symbol: Symbol('id'), // 심볼은 JSON에 포함되지 않는다.
    jump: () => {         // 함수 또한 포함되지 않는다.
        console.log(`${this.name} can jump!`);
    },
}
json = JSON.stringify(rabbit);
console.log(json);
json = JSON.stringify(rabbit, ['name', 'color']); // key에 해당하는 데이터만 받을 수 있다.
console.log(json);
json = JSON.stringify(rabbit, (key, value) => {   // 콜백 함수로 다양한 조작을 할 수 있다.
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'mouse' : value;
});
console.log(json);

/*
    2. 역직렬화(deserialize)
    JSON을 object로 parse 하는 방법.
*/
// JSON => object
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
// obj.jump();                          // 함수는 JSON에 포함되지 않는다.
// console.log(rabbit.birth.getDate()); // stringify 되었기 때문에 사용할 수 없다.
const objWithReviver = JSON.parse(json, (key, value) => { // reviver를 사용하여 birth를 살린다.
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birth' ? new Date(value) : value;
});

/*
    3. 유용한 사이트 목록
    - JSON Diff      : 서버로 보낸 JSON 데이터와 받은 JSON 데이터를 비교하여 디버깅 작업에 유용하다.
    - JSON Beautifier: JSON의 포맷을 알아보기 쉽게 만들어준다.
    - JSON Parser    : JSON을 object로 확인하고 싶을 때 사용한다.
    - JSON Validator : JSON 코드가 올바른지 여부를 검사한다.
*/