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

function solution(n) {
    var answer = 0;

    n += '';
    n = n.split('').sort();

    while(n.length > 0) {
        answer += n.pop();
    }
    return parseInt(answer);
}
//
// let num = 429;
// console.log(num.toString(16));
// console.log(num.toString(8));
// console.log(num.toString(2))
//
// null처리에도 차이가 있어요.
// console.log(String(null)); // "null"
// console.log(null.toString()); // TypeError: Cannot read property 'toString' of null

