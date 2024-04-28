/*
Задание 1: ""Управление библиотекой книг""

Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

Свойство title (название) - строка, название книги.
Свойство author (автор) - строка, имя автора книги.
Свойство pages (количество страниц) - число, количество страниц в книге.
Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).
*/

class Book {
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    };
    displayInfo1() {
        console.log(`    Название книги: ${this.title},
    Автор: ${this.author},
    Кол-во страниц: ${this.pages}`);
    }
}

const book1 = new Book('Война и мир', 'Толстой', '400');
book1.displayInfo1();

function BookOne(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.displayInfo1 = function() {
        console.log(`    Название книги: ${this.title},
    Автор: ${this.author},
    Кол-во страниц: ${this.pages}`);
    }
}
const bookFunc = new BookOne('Преступление и наказание', 'Достоевский', 200);
bookFunc.displayInfo1();
/*
Задание 2: ""Управление списком студентов""
Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

Свойство name (имя) - строка, имя студента.
Свойство age (возраст) - число, возраст студента.
Свойство grade (класс) - строка, класс, в котором учится студент.
Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
*/

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    };
    displayInfo() {
        console.log(`    Name: ${this.name}
    Age: ${this.age}
    Grade: ${this.grade}`);
    }
}
const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();
const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();