 //sual 1
// var fullname =prompt("adinzi soyadiniz daxil edin");
// var herifler =fullname.split("") ;
// for (var i=0 ; i< herifler.length; i++) {
//     console.log(i+ ": " + herifler[i] ) ;
// }

 //sual 2

 
// function fullNameToSurnameFirst(fullName) {
   
//     const names = fullName.split(' ');

//        const reversedFullName = names[1] + ' ' + names[0];

//     return reversedFullName;
// }


// const adSoyad = "Adiniz Soyadiniz";
// const yeniString = fullNameToSurnameFirst(adSoyad);
// console.log(yeniString);

// sual 3
// const myArray = ["element1", "element2", "element3"];


// const myString = myArray.join(', '); // Burada ',' simvolu ilə ayrılaraq string təşkil edilir

// console.log(myString);

//sual 4

// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];


// const countOfFive = arr.filter(item => item === 5).length;

// console.log("5 ədədi " + countOfFive + " dəfə təkrarlanıb.");

// //sual 5 
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// const sum = arr.reduce((total, current) => total + current, 0);

// console.log("Array-dəki bütün elementlərin cəmi: " + sum);


// //sual 6

// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];


// const counts = {};
// arr.forEach(num => {
//     counts[num] = (counts[num] || 0) + 1;
// });


// const uniqArray = [...new Set(arr.filter(num => counts[num] > 1))];


// uniqArray.sort((a, b) => a - b);

// console.log("Təkrarlanan ədədlər artan sıra ilə: " + uniqArray);

// //sual 7
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];


// const maxNumber = Math.max(...arr);


// const countOfMaxNumber = arr.filter(num => num === maxNumber).length;

// console.log("Ən böyük ədəd: " + maxNumber);
// console.log("Ən böyük ədəd " + countOfMaxNumber + " dəfə təkrarlanıb.");









//sual 8
// // let ad = "Orxan"; 


// let herfler = ad.split('');
// let herfSayi = {};

// for (let i = 0; i < herfler.length; i++) {
//     let herf = herfler[i].toLowerCase(); 

//     if (herfSayi[herf]) {
//         herfSayi[herf]++;
//     } else {
//         herfSayi[herf] = 1;
//     }
// }

// console.log("Adınızdakı hərflərin sayı:", herfSayi);


// let array = ["O", "r", "x", "a", "n"]; 
// let hamisiVar = true;

// for (let i = 0; i < array.length; i++) {
//     let arrayHerf = array[i].toLowerCase(); 

//     if (!herfSayi[arrayHerf] || herfSayi[arrayHerf] === 0) {
//         hamisiVar = false;
//         break;
//     }
// }

// console.log("Array-də olan bütün hərflər var mı?", hamisiVar);

//sual 10
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// let foundIndex = -1;
// let foundNumber;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 2) {
//         foundNumber = arr[i];
//         foundIndex = i;
//         break;  
//     }
// }

// console.log("Tapılan Rəqəm:", foundNumber);
// console.log("Rəqəmin İndeksi:", foundIndex);

//sual 11
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// function findIndexes(arr, target) {
//     let indexes = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             indexes.push(i);
//         }
//     }
//     return indexes;
// }

// let result = findIndexes(arr, 4);
// console.log("4 rəqəmi array-in bu indexlərindədir: " + result);


//sual 12
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// function findMinMaxIndexes(arr, target) {
//     let indexes = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             indexes.push(i);
//         }
//     }

//     if (indexes.length === 0) {
//         return "Belə bir element tapılmadı.";
//     }

//     let minIndex = Math.min(...indexes);
//     let maxIndex = Math.max(...indexes);

//     return { minIndex, maxIndex };
// }

// let result = findMinMaxIndexes(arr, 5);
// console.log("5 rəqəmi array-dəki ən kiçik və ən böyük indexlər: ", result);


//sual 13

// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];


// let newArr = arr.filter(num => num > 2);

// let lengthDifference = newArr.length - arr.length;

// console.log("Yeni array (2-dən böyük olanlar):", newArr);
// console.log("Yeni array ilə 'arr' arrayi arasındakı uzunluq fərqi:", lengthDifference);

//sual 14 
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];


// function findIndexes(arr, target) {
//     let indexes = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             indexes.push(i);
//         }
//     }
//     return indexes;
// }


// let sevenIndexes = findIndexes(arr, 7);


// let sumOfSevenIndexes = sevenIndexes.reduce((sum, index) => sum + index, 0);

// console.log("7 rəqəmi array-dəki indexlərinin cəmi:", sumOfSevenIndexes);

//sual 16

// function Tobyekti(arr) {
    
//     let filterArray = arr.filter(obj => obj.name.startsWith('t'));
//     return filterArray;
// }

// let arr2 = [
//     {
//         name: 'test',
//         key: 1
//     },
//     {
//         name: 'task',
//         key: 2
//     },
//     {
//         name: 'tanqo',
//         key: 3
//     },
//     {
//         name: 'like',
//         key: 4
//     },
//     {
//         name: 'task',
//         key: 5
//     },
//     {
//         name: 'trust',
//         key: 6
//     },
//     {
//         name: 'test',
//         key: 7
//     },
//     {
//         name: 'last',
//         key: 8
//     },
//     {
//         name: 'tanqo',
//         key: 9
//     },
//     {
//         name: 'elephant',
//         key: 10
//     },
//     {
//         name: 'love',
//         key: 11
//     },
//     {
//         name: 'small',
//         key: 12
//     },
//     {
//         name: 'little',
//         key: 13
//     },
// ];

// let filterArray = Tobyekti(arr2);
// console.log(filterArray);


//sual 17
// let arr2 = [
//     { name: 'test', key: 1 },
//     { name: 'task', key: 2 },
//     { name: 'tanqo', key: 3 },
//     { name: 'like', key: 4 },
//     { name: 'task', key: 5 },
//     { name: 'trust', key: 6 },
//     { name: 'test', key: 7 },
//     { name: 'last', key: 8 },
//     { name: 'tanqo', key: 9 },
//     { name: 'elephant', key: 10 },
//     { name: 'love', key: 11 },
//     { name: 'small', key: 12 },
//     { name: 'little', key: 13 },
// ];


// function tIleBashlayanVeBitenSayiTap(arr) {
//     let tIleBashlayanVeBitenSayi = arr.filter(obj => obj.name.toLowerCase().startsWith('t') && obj.name.toLowerCase().endsWith('t')).length;
//     return tIleBashlayanVeBitenSayi;
// }


// console.log("T hərfi ilə başlayan və bitən obyekt sayı:", tIleBashlayanVeBitenSayiTap(arr)

//sual 18

// let arr2 = [
//     { name: 'test', key: 1 },
//     { name: 'task', key: 2 },
//     { name: 'tanqo', key: 3 },
//     { name: 'like', key: 4 },
//     { name: 'task', key: 5 },
//     { name: 'trust', key: 6 },
//     { name: 'test', key: 7 },
//     { name: 'last', key: 8 },
//     { name: 'tanqo', key: 9 },
//     { name: 'elephant', key: 10 },
//     { name: 'love', key: 11 },
//     { name: 'small', key: 12 },
//     { name: 'little', key: 13 },
// ];


// function tIleBashlayanVeBitenKeyCemiTap(arr) {
//     let tIleBashlayanVeBitenKeyCemi = arr
//         .filter(obj => obj.name.toLowerCase().startsWith('t') && obj.name.toLowerCase().endsWith('t'))
//         .reduce((total, obj) => total + obj.key, 0);

//     return tIleBashlayanVeBitenKeyCemi;
// }

// console.log("T hərfi ilə başlayan və bitən obyekt key-lərinin cəmi:", tIleBashlayanVeBitenKeyCemiTap(arr2));


//sual 19
// let arr2 = [
//     { name: 'test', key: 1 },
//     { name: 'task', key: 2 },
//     { name: 'tanqo', key: 3 },
//     { name: 'like', key: 4 },
//     { name: 'task', key: 5 },
//     { name: 'trust', key: 6 },
//     { name: 'test', key: 7 },
//     { name: 'last', key: 8 },
//     { name: 'tanqo', key: 9 },
//     { name: 'elephant', key: 10 },
//     { name: 'love', key: 11 },
//     { name: 'small', key: 12 },
//     { name: 'little', key: 13 },
// ];


// function eIleBitenNameDeyeriEvezle(arr) {
//     arr.forEach(obj => {
//         if (obj.name.toLowerCase().endsWith('e')) {
//             obj.name = 'SuperDev';
//         }
//     });
// }


// eIleBitenNameDeyeriEvezle(arr2);


// console.log(arr2);

//sual 20
// let arr2 = [
//     { name: 'test', key: 1 },
//     { name: 'task', key: 2 },
//     { name: 'tanqo', key: 3 },
//     { name: 'like', key: 4 },
//     { name: 'task', key: 5 },
//     { name: 'trust', key: 6 },
//     { name: 'test', key: 7 },
//     { name: 'last', key: 8 },
//     { name: 'tanqo', key: 9 },
//     { name: 'elephant', key: 10 },
//     { name: 'love', key: 11 },
//     { name: 'small', key: 12 },
//     { name: 'little', key: 13 },
// ];


// function enUzunNameKeyTap(arr) {
//     let enUzunNameObyekt = arr.reduce((prev, current) => (prev.name.length > current.name.length) ? prev : current);
//     return enUzunNameObyekt.key;
// }


// console.log("Ən uzun 'name'-i olan obyektin 'key'-i:", enUzunNameKeyTap(arr2));



//sual 21
// let arr2 = [
//     { name: 'test', key: 1 },
//     { name: 'task', key: 2 },
//     { name: 'tanqo', key: 3 },
//     { name: 'like', key: 4 },
//     { name: 'task', key: 5 },
//     { name: 'trust', key: 6 },
//     { name: 'test', key: 7 },
//     { name: 'last', key: 8 },
//     { name: 'tanqo', key: 9 },
//     { name: 'elephant', key: 10 },
//     { name: 'love', key: 11 },
//     { name: 'small', key: 12 },
//     { name: 'little', key: 13 },
// ];


// function enUzunNameIndexKvadratHesabla(arr) {
//     let enUzunNameIndex = arr.findIndex(obj => obj.name.length === Math.max(...arr.map(item => item.name.length)));
//     return enUzunNameIndex ** 2;
// }


// console.log("Ən uzun 'name'-i olan obyektin index-inin kvadratı:", enUzunNameIndexKvadratHesabla(arr2));


//sual 22
// let arr2 = [
//     { name: 'test', key: 1 },
//     { name: 'task', key: 2 },
//     { name: 'tanqo', key: 3 },
//     { name: 'like', key: 4 },
//     { name: 'task', key: 5 },
//     { name: 'trust', key: 6 },
//     { name: 'test', key: 7 },
//     { name: 'last', key: 8 },
//     { name: 'tanqo', key: 9 },
//     { name: 'elephant', key: 10 },
//     { name: 'love', key: 11 },
//     { name: 'small', key: 12 },
//     { name: 'little', key: 13 },
// ];


// function uzunluquDortOlanlar(arr) {
//     let uzunluquDortOlanlarArray = arr.filter(obj => obj.name.length === 4);
//     return uzunluquDortOlanlarArray;
// }


// console.log("Name uzunluğu 4 olan obyekt array-i:", uzunluquDortOlanlar(arr2));


//sual 23
// let arr2 = [
//     { name: 'test', key: 1 },
//     { name: 'task', key: 2 },
//     { name: 'tanqo', key: 3 },
//     { name: 'like', key: 4 },
//     { name: 'task', key: 5 },
//     { name: 'trust', key: 6 },
//     { name: 'test', key: 7 },
//     { name: 'last', key: 8 },
//     { name: 'tanqo', key: 9 },
//     { name: 'elephant', key: 10 },
//     { name: 'love', key: 11 },
//     { name: 'small', key: 12 },
//     { name: 'little', key: 13 },
// ];


// function enBoyukKeyNameTap(arr) {
//     let enBoyukKeyObyekt = arr.reduce((prev, current) => (prev.key > current.key) ? prev : current);
//     return enBoyukKeyObyekt.name;
// }

// console.log("Ən böyük 'key' - i olan obyektin 'name'-i:", enBoyukKeyNameTap(arr2));




//sual 24
// let arr2 = [
//     { name: 'test', key: 1 },
//     { name: 'task', key: 2 },
//     { name: 'tanqo', key: 3 },
//     { name: 'like', key: 4 },
//     { name: 'task', key: 5 },
//     { name: 'trust', key: 6 },
//     { name: 'test', key: 7 },
//     { name: 'last', key: 8 },
//     { name: 'tanqo', key: 9 },
//     { name: 'elephant', key: 10 },
//     { name: 'love', key: 11 },
//     { name: 'small', key: 12 },
//     { name: 'little', key: 13 },
// ];


// function ikiLHerkfiIndexTap(arr) {
//     let ikiLHerkfiIndexler = [];
    
//     arr.forEach((obj, index) => {
//         let lCount = (obj.name.toLowerCase().match(/l/g) || []).length;
//         if (lCount === 2) {
//             ikiLHerkfiIndexler.push(index);
//         }
//     });

//     return ikiLHerkfiIndexler;
// }


// console.log("Terkibində 2 'L' hərfi olan obyekt(ler)in index(leri):", ikiLHerkfiIndexTap(arr2));

//sual 25
// let arr2 = [
//     { name: 'test', key: 1 },
//     { name: 'task', key: 2 },
//     { name: 'tanqo', key: 3 },
//     { name: 'like', key: 4 },
//     { name: 'task', key: 5 },
//     { name: 'trust', key: 6 },
//     { name: 'test', key: 7 },
//     { name: 'last', key: 8 },
//     { name: 'tanqo', key: 9 },
//     { name: 'elephant', key: 10 },
//     { name: 'love', key: 11 },
//     { name: 'small', key: 12 },
//     { name: 'little', key: 13 },
// ];

// function ikiTHerkfiKeyTap(arr) {
//     let ikiTHerkfiKeyler = [];
    
//     arr.forEach(obj) => {
//         let tCount = (obj.name.toLowerCase().match(/t/g) || []).length;
//         if (tCount === 2) {
//             ikiTHerkfiKeyler.push(obj.key);
//         }
//     };

//     return ikiTHerkfiKeyler;
// }


// console.log("Terkibində 2 't' hərfi olan obyekt(ler)in key(leri):", ikiTHerkfiKeyTap(arr2));


