// 일주일동안 100+솔을 빠르게 해서
// js코테를 대비한다...!!


// // function solution(s) {
// //     let pCount = 0;
// //     let yCount = 0;
// //
// //     for (let i = 0; i < s.length; i++) {
// //         if (s[i].toLowerCase() === 'p') {
// //             pCount++;
// //         } else if (s[i].toLowerCase() === 'y') {
// //             yCount++;
// //         }
// //     }
// //
// //     return pCount === yCount;
// // }
//
// let result = '3' + 2;  // '32'
//
// let value = String(123);
// let number = Number('123')
//
//
// let integer = parseInt('123abc')
//
//
// console.log(result, value, number, integer)
//
//
// let변수를 선언하는데 사용됨
// 블록 스코프 변수를 선언
// 선택적으로 초기 값을 할당
//
// var와의 차이가 중요
//
// 변수의 범위에서 차이가 있다
//
// var는 함수 범위를 가진다
//
// let은 블록 범위를 가진다
//
// let x = 1;
//
// if (x === 1) {
//     let x = 2;
//
//     console.log(x)  // x : 2
//     // if 블록 내에서만 유효하다!!!!!!
// }

// 그러나 동일한 변수가 다른 범위 내에서 정의된다면,
// 에러는 더 이상 발생하지 않습니다.
//
// console.log(x) // x : 1
//
// 그리고..
//
// let은 재선언 불가능하다
//
// let y = 1
// let y = 2 // error

// map() -> 배열에 쓰는 것
//
// 배열의 모든 요소에 대해 함수를 호출함
// 오호라
//
// map( )   ( ) <-에 또 함수가 들어간다 ㅇㅇ
// 뭐 이런것도 있어요

// let numbers = [1, 2, 3, 4, 2, 4, 6, 5,6 ,7 ,8, 9]
//
// let squares = numbers.map(number => number * number);
//
// console.log(squares)
//
// // "각 요소에 함수를 적용하고, 그 결과를 모은 새로운!!!! 배열을 반환하는 점에서 python map()이랑 매우 비슷함. "
//
// 설명 대박이네
//
// 매핑은 -> 한 집합의 요소를 다른 집합의 요소와 연결하는 과정을 의미한다

// 나는 이 코드도 좋다.

// function solution(n) {
//     var answer = 0;
//
//     n += '';
//     n = n.split('').sort();
//
//     while(n.length > 0) {
//         answer += n.pop();
//     }
//     return parseInt(answer);
// }
// //
// // let num = 429;
// // console.log(num.toString(16));
// // console.log(num.toString(8));
// // console.log(num.toString(2))
// //
// // null처리에도 차이가 있어요.
// // console.log(String(null)); // "null"
// // console.log(null.toString()); // TypeError: Cannot read property 'toString' of null
//
// // console.log(Math.sqrt(9)); // 3
//
//
//
// console.log(Number.isInteger(0)); // true
// console.log(Number.isInteger(1.1)); // false

// console.log(Math.pow(2, 3)); // 8


// function solution(arr) {
//     let sum = 0;
//     let len = arr.length
//     for (let i = 0; i < len; i++) {
//         sum += arr[i];
//     }
//     return sum / len;
// }
//
// function solution(seoul) {
//     let index = seoul.indexOf("Kim");
//     // "Kim"이라는 문자열을 찾기 위해 seoul 배열을 순회...  index0f()
//     return `김서방은 ${index}에 있다`;
// }

// function solution(arr) {
//     let stack = [];
//
//     for (let i = 0; i < arr.length; i++) {
//         if (stack.length === 0 || stack[stack.length - 1] !== arr[i]) {
//             stack.push(arr[i]);
//         }
//     }
//     return stack;
// }
//
// process.stdin.setEncoding('utf8');
// // 이렇게 하면, 입력받은 데이터를 문자열로 처리할 수 있음.
// process.stdin.on('data', data => {
//     // 'data' 이벤트를 처리하는 이벤트 핸들러를 설정합니다. 'data' 이벤트는 사용자가 표준 입력에 데이터를 입력하고 엔터를 누를 때 발생
//     const n = data.split(" ");
//     //입력받은 데이터를 공백을 기준으로 분리하여 배열로 만듭니다. 예를 들어, 사용자가 "5 3"을 입력하면, n은 ["5", "3"]이 됨
//     const a = Number(n[0]);
//     const b = Number(n[1]);
//
//     let result = "";
//
//     for (let i = 0; i < b; i++) {
//         for (let j = 0; j < a; j++) {
//             result += '*';
//         }
//         result += '\n'
//     }
//     console.log(result);
// });
//
//
// function solution(n) {
//     let pattern = "수박";
//     let result = pattern.repeat(n);
//     return result.slice(0, n);
// }

// function solution(left, right) {
//     let answer = 0
//
//     for (let i = left; i <= right; i++) {
//         let cnt = 0;  // 약수의 개수
//         for (let j = 1; j <= i; j++) {
//             if (i % j === 0) {
//                 cnt++;
//             }
//         }
//         if (cnt % 2 === 0) {
//             answer += i;
//         } else {
//             answer -= i;
//         }
//     }
//
//     return answer;
// }
//
// function solution(s, n) {
//     let result = '';
//
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === ' ') {
//             result += ' ';
//         } else {
//             let ascii = s[i].charCodeAt(0);
//             if (ascii >= 65 && ascii <= 90) {
//                 result += String.fromCharCode((ascii - 65 + n) % 26 + 65);
//             } else if (ascii >= 97 && ascii <= 122) {
//                 result += String.fromCharCode((ascii - 97 + n) % 26 + 97);
//             }
//         }
//     }
//
//     return result;
// }
