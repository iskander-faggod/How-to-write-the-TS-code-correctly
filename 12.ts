// #12 Для асинхронного кода используйте функции async вместо обратных вызовов

// В ранних версиях JS моделирование асинхронного поведения происходило с помощью callbacks
// **код вставлять не буду, слишком уж больно на это смотреть в 2022 году)

// В 2015 году для работы с асинхронным кодом ввели Promise, в 2017 придумали async/await
async function fetchData() {
    const response = await fetch('url')
}
// Ключевое слово await приостанавливает выполнение функции fetchData до момента завершение промиса
// В рамках async функции промис await выбрасывает исключение при отказе
// ^ это позволяет использовать try/catch

async function fetchData2() {
    try{
        const response = await fetch('url')
    } catch (e){
        //выкидываем кастомную ошибку, вывод в консоль и тд..
    }
}

// Существует несколько причин использовать promise/async + await
// 1) Промисы легче составлять
// 2) Типы легче передавать через Promise
// пример Promise.all 
async function fetchDataPromiseAll(){
    const [response1, response2] = await Promise.all([
        fetch('url1'),
        fetch('url2'),
        fetch('url3'),
    ])
}

// TS же способен вывести типы каждой из трех переменных response как Response 
function fetchDataTypes(){
    let numDone = 0;
    const responses : string[] = [];
    const done = () => {
        const [response1, response2, response3] = responses;
    }
}
const urls = [url1, url2, url3];
urls.forEach((url, index) => {
    fetchUrl() // дальше функция для получение данных с промиса 
})

// С возвращаемыми типами для Promise можно сделать код:
// 1) Более лаконичным
// 2) Функции async гарантированно возвратят промисы

async function getNumber() : Promise<number> {
    return 42;
}
