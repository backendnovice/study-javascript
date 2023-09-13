'use strict';

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
]


// Q1. 주어진 배열을 문자열 형태로 만들어라.
// 나의 풀이
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.toString();
    console.log(result);
}
// 해답
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
    console.log(result); 
}

// Q2. 주어진 문자열을 배열 형태로 만들어라.
// 나의 풀이
{
    const fruits = 'apple, kiwi, banana, cherry';
    const result = fruits.split(', ');
    console.log(result);
}
// 해답
{
    const fruits = 'apple, kiwi, banana, cherry';
    const result = fruits.split(',');
    console.log(result);
}

// Q3. 배열을 거꾸로 뒤집어라.
// 나의 풀이
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
}
// 해답
{
    const array = [1, 2, 3, 4, 5];
    array.reverse();
    console.log(array);
}

// Q4. 두 번째 요소까지 제외한 배열을 만들어라.
// 나의 풀이
{
    const array = [1, 2, 3, 4, 5];
    const result = array.splice(2); // 원본 배열에도 영향을 준다.
    console.log(result);
}
// 해답
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5); // 원본 배열에 영향을 주지 않음.
    console.log(result);
}

// Q5. 점수가 90점인 학생들을 검색하라.
// 나의 풀이
{
    const result = students.find((student) => student.score === 90);
    console.log(result);
}
// 해답
{
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// Q6. enrolled가 true인 학생들을 배열로 만들어라.
// 나의 풀이
{
    const result = students.filter((student) => student.enrolled === true);
    console.log(result);
}
// 해답
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. 점수만을 담고 있는 배열을 만들어라.
// 나의 풀이
{
    const result = students.map((student) => student.score);
    console.log(result);
}
// 해답
{
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. 점수가 50점 아래인 학생의 존재 여부를 반환하라.
// 나의 풀이
{
    const result = students.some((student) => student.score < 50);
    console.log(result);
}
// 해답
{
    const result = students.some((student) => student.score < 50);
    console.log(result);
    // ※ 모든 값을 비교할 때는 Array.prototype.every()를 사용할 것.
}

// Q9. 점수의 평균을 계산하라.
// 나의 풀이
{
    const scores = students.map((student) => student.score);
    const result = scores.reduce((prev, curr) => prev + curr, 0) / scores.length;
    console.log(result);
}
// 해답
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
    // 오른쪽부터 순회할 때는 Array.prototype.reduceRight()를 사용할 것.
}

// Q10. 학생들의 점수를 문자열로 만들어라.
// 나의 풀이
{
    const result = students.map((student) => student.score).join(', ');
    console.log(result);
}
// 해답
{
    const result = students
        .map((student) => student.score)
        .join();
    console.log(result);
}

// BONUS. Q10의 배열을 오름차순으로 정렬하라.
// 나의 풀이
{
    const result = students.map((student) => student.score).sort().join(', ');
    console.log(result);
}
// 해답
{
    const result = students
        .map((student) => student.score)
        .sort((a, b) => a - b) // 내림차순은 b - a.
        .join();
    console.log(result);
}