// const name = 'じゃけぇ';
// const age = 31;

// const message2 = `私の名前は${name}です。年齢は${age}です。`;

// console.log(message2);

// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1('func1です'));
// const func2 = (str) => str;
// console.log(func2('func2です'));

// const func3 = (num1, num2) => ({
//   hoge: num1,
//   fuga: num2,
// });
// console.log(func3(10, 20));

// const myProfile = {
//   name: 'じゃけぇ',
//   age: 31,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ['じゃけぇ', 31];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

// const sayHello = (name = 'ゲスト') => console.log(`こんにちは！${name}さん！`);
// sayHello();

// const myProfile = {
//   age: 31,
// };
// const { age, name = 'ゲスト' } = myProfile;
// console.log(age);
// console.log(name);

// const name = 'じゃけぇ';
// const age = 31;

// const myProfile = { name, age };
// console.log(myProfile);

// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// // console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const nameArr = ['田中', '山田', 'じゃけぇ'];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// // const nameArr2 = nameArr.map((name) => {
// //   return name;
// // });
// // console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === 'じゃけぇ') {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// const num = 1300;

// const formattedNum =
//   typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています!!' : '許容範囲内です';
// };
// console.log(checkSum(60, 50));

// const val = {};
// if (val) {
//   console.log('valはtruthyです');
// } else {
//   console.log('valはfalsyです');
// }

// ||は左側がtruthyの時その時点で返却する
// const num = 100;
// const fee = num || '金額未設定です';
// console.log(fee);

// && は左側がfalsyの時その時点で返却する
// const num2 = 100;
// const fee2 = num2 && '何か設定されました';
// console.log(fee2);
