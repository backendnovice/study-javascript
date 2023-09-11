/*
    1. String 연결하기(concatenation)
*/
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`); // 백틱을 사용하면 특수기호 제한없이 사용이 가능하다.

/*
    2. 숫자 연산자(numeric operators)
*/
console.log(1 + 1);  // 덧셈.
console.log(1 - 1);  // 뺄셈.
console.log(1 * 1);  // 곱셈.
console.log(1 / 1);  // 나눗셈.
console.log(5 % 2);  // 나머지.
console.log(2 ** 3); // 제곱.

/*
    3. 증감 연산자(increment & decrement operators)
*/
let counter = 1;
const preIncrement = ++counter;  // 전위 연산.
const postDecrement = counter--; // 후위 연산.


/*
    4. 대입 연산자(assignment operators)
*/
let x = 3;
let y = 3;
console.log(x += y);
console.log(x -= y);
console.log(x *= y);
console.log(x /= y);

/*
    5. 비교 연산자(comparison operators)
*/
console.log(10 < 6);
console.log(10 > 6);
console.log(10 <= 6);
console.log(10 >= 6);

/*
    6. 논리 연산자(logical operators)
*/
const isTrue = true;
const isFalse = false;
console.log(`and: ${isTrue && isFalse}`);
console.log(`or: ${isTrue || isFalse}`);

/*
    7. 동등 연산자(equality operators)
*/
const stringFive = '5';
const numberFive = 5;
console.log(isTrue == isFalse);
console.log(isTrue != isFalse);

// ※ 타입과 치환하여 값을 비교한다.
console.log(stringFive == numberFive);
console.log(stringFive === numberFive);

// null과 undefined의 관계.
console.log(null == undefined);  // 빈 값이므로 같다.
console.log(null === undefined); // 타입이 다르므로 다르다.

/*
    8. 조건 연산자(conditional operators)
*/
const httpCode = 200;
if (httpCode === 200) {
    console.log('200, OK');
} else if (httpCode === 302) {
    console.log('302, Redirection');
} else {
    console.log('400, Error');
}

/*
    9. 삼항 연산자(ternary operator)
*/
console.log(httpCode === 200 ? '200, OK' : '400, Error');

/*
    10. 스위치 문(switch statement)
*/
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('unsupported');
        break;
    case 'Chrome':
        console.log('supported');
        break;
    case 'Chrome':
        console.log('supported');
        break;
    default:
        console.log('something else');
        break;
}

/*
    11. 반복문(loops)
    for, while, do-while 등이 있다.
*/
// while-loop, 5 -> 1 까지 출력.
let value = 5;
while (value > 0) {
    console.log(`while, value: ${value}`);
    value--;
}

// do-while-loop, 1 -> 5 까지 출력.
value = 1;
do {
    console.log(`do-while, value: ${value}`);
    value++;
} while (value <= 5);

// for-loop, 5 -> 1 까지 출력.
for(value = 5; value > 0; value--) {
    console.log(`for, value: ${value}`);
}

// 문제 1) 0 ~ 10까지 짝수만 출력하시오.
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 문제 2) 0 ~ 10 범위에서 break 문을 사용하여, 8까지 출력하시오.
for (let i = 0; i <= 10; i++) {
    if (i > 8) {
        break;
    }
    console.log(i);
}