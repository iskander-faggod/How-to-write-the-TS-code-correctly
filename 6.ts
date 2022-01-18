// Используйте readonly против ошибок, которые связаны с изменяемостью

// Когда вы обьявляете readonly в TS, происходит следующее
//      1) TS убеждается, что параметр не изменен в теле функции
//      2) Инициаторы вызова убеждаются, что функция не изменяет параметр
//      3) Инициаторы функции получают возможность передать функции readonly массив

function arraySum(arr: readonly number[]){
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}

function arraySumWithoutReadonly(arr: readonly number[]){
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}

function printTrianglesReadonly(n: number){
    const nums : number[] = []
    for (let i = 0; i < n; i++) {
        nums.push(i);
        console.log(arraySum(nums))
    }
} 

function printTriangles(n: number){
    const nums : number[] = []
    for (let i = 0; i < n; i++) {
        nums.push(i);
        console.log(arraySum(nums))
    }
} 

printTrianglesReadonly(10)
printTriangles(10)

// PRINT: 
// 0
// 1
// 3
// 6
// 10
// 15
// 21
// 28
// 36
// 45

// Если ваша функция не менят параметры - используйте readonly,
// так упадет вероятность непредусмотренных изменений при ее реализациях

// Используйте readonly против ошибок, связанных с изменениями и для обнаружения мест в коде, где изменения происходят
