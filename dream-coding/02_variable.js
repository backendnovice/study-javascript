/*
    1. 'use strict'
    `strict mode(엄격 모드)'는 JS에서 default로 사용되는 'sloppy mode(느슨한 모드)'를 해제하기 위한 
    방법이다. 엄격한 parsing, error handling을 지원하여 코딩 실수를 방지할 수 있다.
*/
'use strict';

/*
    2. let
    (ES6) block scope를 범위로 갖는 변수.
*/
let globalLet = 'user in global';
{
    let blockLet = 'user in block';
    console.log(blockLet);
    blockLet = 'user in block(new)';
    console.log(blockLet);
}
console.log(globalLet);
// console.log(blockUser); // 블록을 벗어났으므로 에러 출력.

/*
    3. var
    이전에 사용되었던 scope의 영향을 받지 않는 변수. 
    scope 위치에 상관없이 사용할 수 있는 경우를 hoisting이라고 한다.
*/
{
    blockVar = 'value before declaration';
    var blockVar;
}
console.log(blockVar);

/*
    4. const
    block scope를 범위로 갖는 상수. 값을 초기화하면 변경할 수 없다.
*/
const DAYS = 7;
const MAX = 255;

/*
    5. primitive type
    number, string, boolean, null.
*/
// 숫자 예제.
const integerNumber = 17;   // number, 정수형.
const decimalNumber = 17.1; // number, 실수형.
const infinityNumber = 1 / 0;    // infinity, 무한대.
const nInfinityNumber = -1 / 0;  // negative infinity, 음의 무한대.
const notANumber = 'string' / 1; // not a number, 숫자가 아님.
console.log(`value: ${integerNumber}, type: ${typeof integerNumber}`);
console.log(`value: ${decimalNumber}, type: ${typeof decimalNumber}`);
console.log(infinityNumber);
console.log(nInfinityNumber);
console.log(notANumber);

// ※ big integer 형으로 지원하지 않는 브라우저가 있으므로, 사용하지 말 것.
const bigIntegerNumber = 1234567890123456789012345678901234567890n;
console.log(`value: ${bigIntegerNumber}, type: ${typeof bigIntegerNumber}`);

// 문자열 예제.
const character = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan; // java와 마찬가지로 문자열 연산 가능.
const helloBob = `hi ${brendan}!`; // 템플릿 리터럴, `(백틱)을 사용하여 내장 표현식을 사용할 수 있다.
console.log(`value: ${greeting}, type: ${typeof greeting}`);
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// 불리언 예제.
// false는 0, null, undefined, NaN, ''이 있으며, 나머지는 true이다.
const isTrue = true;
const isFalse = 3 < 1;
console.log(`value: ${isTrue}, type: ${typeof isTrue}`);
console.log(`value: ${isFalse}, type: ${typeof isFalse}`);

// null & undefined 예제.
let x = null;      // null은 값이 비어있다.
let y = undefined; // undefined는 값이 정해지지 않았다.
console.log(`value: ${x}, type: ${typeof x}`);
console.log(`value: ${y}, type: ${typeof y}`);

// 심볼 예제.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
const _symbol1 = Symbol.for('id');
const _symbol2 = Symbol.for('id');
console.log(symbol1 === symbol2);   // 심볼은 동일한 string에서 동일하지 않다.
console.log(_symbol1 === _symbol2); // Symbol.for()을 통해 동일하게 만들 수 있다.

// 오브젝트 예제.
const student = {
    name: 'park',
    age: 20
};
student.age = 21; // 오브젝트 안의 변수의 값을 변경할 수 있다. 
console.log(student.age);

/*
    6. dynamic typing
    변수가 별도의 지정없이 할당되는 값에서 타입을 결정한다. 
*/
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);