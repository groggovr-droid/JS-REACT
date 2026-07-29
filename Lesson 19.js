// const user = {
//   name: "Andrew",
//   age: 35,
//   phone: "+375291234567",
//   email: "gr@gmail.com",
//   password: "qwe123",
// };

// console.log(user);

// user.password = "qwerty";
// user.city = "Minsk";
// delete user.phone;

// console.log(user);

//создаём и заполняем объект
const product = {
  id: 7,
  name: "Ноутбук",
  factory: "Samsung",
  count: 23,
  price: "5600 р",
  totalSum: "128800 р",
};

console.log(product);

//выводим ключи и их значения
for (let key in product) {
  console.log(`Ключ: ${key}, значение: ${product[key]}`);
}

//копируем объект1
const productCopy = Object.assign({}, product);
console.log(product === productCopy);

//копируем объект2
const productClone = {};
for (let key in product) {
  productClone[key] = product[key];
}
console.log(product === productClone);
