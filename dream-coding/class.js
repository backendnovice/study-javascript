'use strict';

/*
    1. 클래스 (class)
    (ES6) 클래스는 객체를 생성하기 위한 템플릿으로 OOP에서 사용하는 개념이다.
*/
// 1. 클래스 선언(class declarations)
// 커피를 표현하는 클래스.
class Coffee {
    // 생성자(constructor).
    constructor(name, value) {
        this.name = name; // 필드(field).
        this.value = value;
    }

    // 메소드(method).
    introduce() {
        console.log(`This coffee is ${this.name}, value is ${this.value}.`);
    }
}

const americano = new Coffee('americano', 4000);
console.log(americano.name);
console.log(americano.value);
americano.introduce();

/*
    2. getter / setter 메소드.
    get과 set을 사용하여 property의 값을 읽고 할당할 수 있다.
*/
// 사람을 표현하는 클래스.
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    // Getter, 데이터를 가져올 때 호출된다. 
    get name() {
        return this._name;
    }

    // Setter, 데이터를 변경할 때 호출한다.
    set name(name) {
        if (name === null) { // 이름이 null이면 error를 throw한다.
            throw Error('name cannot be null');
        }
        this._name = name;
    }

    // ※ Getter와 Setter를 사용하면 번갈아가며 무한으로 호출한다.
    // 때문에, 
}

const person = new Person('james', 28, 'male');
person.name = 'steve';
console.log(person.name);

/*
    3. public / private 접근 지정자
    외부에서 필드에의 접근 가능 여부를 설정할 수 있다.
    강의시기와 달리 현재 대부분의 브라우저가 support한다.
*/
class Experiment {
    publicField = 0;
    #privateField = 0; // private는 #로 설정한다.
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // undefined

/*
    4. static
    객체를 생성하지 않고 프로퍼티에 액세스할 수 있다.
*/
// 글을 표현하는 클래스.
class Article {
    static publisher = `Book's PUB`;
    constructor(number) {
        this.number = number;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}
Article.printPublisher();

/*
    5. 상속 (Inheritance)
    클래스를 다른 클래스들이 확장할 수 있다.
*/
// 모양을 표현하는 부모 클래스.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color}`);
    }

    getArea() {
        return this.width * this.height;
    }
}

// 사각형을 표현하는 자식 클래스.
class Rectangle extends Shape {}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

// 삼각형을 표현하는 자식 클래스. (overriding)
class Triangle extends Shape {
    draw() {
        super.draw(); // 부모의 draw()를 호출한다.
        console.log('△');
    }

    getArea() {
        return this.width * this.height / 2;
    }
}
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

/*
    6. 인스턴스 확인 (instanceOf)
    어느 클래스의 인스턴스인지 확인할 수 있다.
*/
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);