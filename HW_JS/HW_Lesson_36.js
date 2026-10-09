"use strict";
const users = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true,
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true,
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false,
    },
];
// 1. Создать строку из имен пользователей через запятую
function joinStrName(items, key) {
    return items.map((item) => item[key]).join(", ");
}
const strUserNames = joinStrName(users, "name");
console.log("1. strUserNames:", strUserNames);
// 2. Подсчитать общее количество машин у пользователей
function getTotalCars(items, key) {
    return items.reduce((acc, currentUser) => {
        return acc + (currentUser[key] ? currentUser[key].length : 0);
        // return acc + (currentUser[key]?.length || 0);
    }, 0);
}
const totalCars = getTotalCars(users, "cars");
console.log("2. totalCars:", totalCars);
// 3. Создать функцию, которая бы принимала массив пользователей и
// отфильтровывала пользователей на наличие образования
function isHasEducation(items, key) {
    return items.filter((item) => Boolean(item[key]));
}
const usersWithEducation = isHasEducation(users, "hasEducation");
console.log("3. usersWithEducation:", usersWithEducation);
// 4. Создать функцию, которая бы принимала массив пользователей и
// отфильтровывала пользователей на наличие животных
function isHasAnimals(items, key) {
    return items.filter((item) => (item[key]?.length ?? 0) > 0);
}
const usersWithAnimals = isHasAnimals(users, "animals");
console.log("4. usersWithAnimals:", usersWithAnimals);
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы
// строку с названиями марок автомобилей через запятую
function getAutoBrands(items, key) {
    return items.flatMap((item) => item[key] ?? []).join(", ");
}
const allAuto = getAutoBrands(users, "cars");
console.log("5. allAuto:", allAuto);
