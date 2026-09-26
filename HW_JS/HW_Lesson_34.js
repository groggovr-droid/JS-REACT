// +1. Создать строку из названий предметов написанных через запятую
// +2. Подсчитать общее количество студентов и учителей на всех предметах
// +3. Получить среднее количество студентов на всех предметах
// +4. Создать массив из объектов предметов
// 5. Получить массив из предметов и отсортировать по количеству преподавателей на
// факультете от большего к меньшему

const subjects = {
  mathematics: {
    students: 200,
    teachers: 6,
  },
  biology: {
    students: 120,
    teachers: 6,
  },
  geography: {
    students: 60,
    teachers: 2,
  },
  chemistry: {
    students: 100,
    teachers: 3,
  },
};

let countSubjects = 0;
let countStudents = 0;
let countTeachers = 0;
let arrObj = [];

//строка из названий предметов
console.log(`Строка из названий предметов: ${Object.keys(subjects).join()}`);

//считаем общее количество студентов и учителей на всех предметах
for (let subject in subjects) {
  countSubjects++;

  const infoSubj = subjects[subject];

  countStudents = countStudents + infoSubj.students;
  countTeachers = countTeachers + infoSubj.teachers;
}

console.log(`Общее количество студентов: ${countStudents}`);
console.log(`Общее количество учителей: ${countTeachers}`);
// console.log(`Общее количество предметов: ${countSubjects}`);
console.log(`Среднее количество студентов: ${countStudents / countSubjects}`);

//Создать массив из объектов предметов
const subjectsArray = Object.entries(subjects).map(([name, data]) => ({
  name,
  ...data,
}));

// console.log("Массив пар ключ-значение", Object.entries(subjects));
console.log("Массив из объектов предметов:", subjectsArray);

// Получить массив из предметов и отсортировать по количеству преподавателей на
// факультете от большего к меньшему
const sortedArray = subjectsArray.sort((a, b) => b.teachers - a.teachers);

console.log("Сортированный список:", sortedArray);
