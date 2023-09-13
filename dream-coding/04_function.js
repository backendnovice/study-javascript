'use strict';

/*
    1. 함수 (function)
    한 가지의 작업을 수행하는 기본적인 블록으로 서브 프로그램(subprogram)으로도 불린다.
    일반적으로 명사형을 사용하는 변수와 달리 동작과 관련되기 때문에 동사형을 사용한다.
*/
// 콘솔에 메시지를 출력하는 함수.
function printMessage(message) {
    console.log(message);
}
printMessage('Hello World');
printMessage('Goodbye World');

/*
    2. 파라미터 (parameters)
    함수에 전달되는 파라미터는 primitive는 값을 object는 참조를 저장한다.
*/
// object의 name을 변경하는 함수.
function changeName(object) {
    object.name = 'new name';
}
const username = {name: 'old name'};
changeName(username);
console.log(username);

/*
    3. 기본 파라미터(default parameters) 
    (ES6) 파라미터를 전달하지 않았을 때 기본값을 설정할 수 있다.
*/
// 콘솔에 메시지를 출력하는 함수. (with 기본값)
function sendMessage(message, from = 'anonymous') {
    console.log(`"${message}" by ${from}`);
}
sendMessage('Hello!');

/*
    3. 나머지 파라미터(Rest parameters)
    (ES6) 정해지지 않은 파라미터들을 배열로 받을 수 있다.
*/
// 배열 요소를 출력하는 함수.
function printArray(...args) {
    // 기존 for-loop
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    // for-of
    for(const arg of args) {
        console.log(arg);
    }

    // for-each
    args.forEach((arg) => console.log(arg));
}
printArray('1', '2', '3');

/*
    4. 지역 범위(local scope)
    함수 안에서 새로운 함수를 선언할 수 있으며, scope 밖에서는 호출이 불가능하다.
*/
// 메시지를 확인하고 변경하는 함수.
function setMessage(message) {
    return checkMessage(message) ? 'new message' : 'throw error';

    function checkMessage(message) {
        return message === 'old message' ? true : false;
    }
}
console.log(setMessage('old message'));

/*
    5. 반환 (return)
    return 문이 존재할 경우 값을 반환할 수 있다. 없을 경우 undefined를 반환한다. 
*/
// a와 b를 더하는 함수.
function addition(a, b) {
    return a + b;
}
console.log(addition(1, 2));

/*
    6. 빠른 return 패턴
    조건문을 사용할 경우, 종료 조건을 앞에 설정하여 빠르게 함수를 종료한다.
*/
// 포인트가 10점 이상일 때 로직을 실행하는 함수.
// 안 좋은 예. 
function executeLogic(point) {
    if (point > 10) {
        // logic...
    }
}

// 좋은 예.
function executeLogic(point) {
    if (point <= 10) {
        return;
    }
    // logic...
}

/*
    7. 함수 표현식(function expression)
    - 함수는 호출 라인 뒤에 선언될 수 있다. (function hoisting)
    - 익명 함수(anonymous function)를 사용할 수 있다.
    - 파라미터로 콜백 함수를 전달할 수 있다.
    - 화살 함수(arrow function)를 사용할 수 있다.
*/
// 'hello'를 출력하는 함수. (익명 함수 사용)
const printHello = function() {
    console.log('hello');
}
printHello();

// 'goodbye'를 출력하는 함수. (function hoisting)
printGoodbye();
function printGoodbye() {
    console.log('goodbye');
}

// 시간에 따라서 응답을 출력하는 함수. (콜백 함수 파라미터)
const sayYes = function() {
    console.log('yes!');
};
const sayNo = function() {
    console.log('no!');
};
function responseByTime(time, sayYes, sayNo) {
    if(time >= 18 || time <= 6) {
        sayNo();
    }else {
        sayYes();
    }
}
responseByTime(18, sayYes, sayNo);

// 이름을 출력하는 함수. (arrow function)
const printName = () => console.log('your name');
// a와 b를 곱하는 함수.
const multiply = (a, b) => {
    return a * b;
}

// 문제 1) 사칙연산 함수를 구현하라.
const calculate = (command, a, b) => {
    if (command === 'add') {
        return a + b;
    }
    if (command === 'substract') {
        return a - b;
    }
    if (command === 'multiply') {
        return a * b;
    }
    if (command === 'divide') {
        return a / b;
    }
    if (command === 'reminder') {
        return a % b;
    }
    return 'commend error occured.';
}
console.log(calculate('add', 1, 1));
console.log(calculate('substract', 1, 1));
console.log(calculate('multiply', 1, 1));
console.log(calculate('reminder', 1, 1));
console.log(calculate('divide', 1, 1));
console.log(calculate('reminder', 1, 1));
console.log(calculate('blank', 1, 1));