//#10 Старайтесь сужать типы
// Сужение является процессом, обратным расширению.
// С его помощью TypeScript переходит от более широкого типа к более узкому
// Простой пример этого процесса - проверка на null

const el = document.getElementById('foo'); // тип HTMLElement | null
if (el) {
    el.innerHTML = 'El is not null'
} else {
    console.log("el is null")
}

// Можно сузить тип переменной для оставшийся части блока отбросом или возвращением из ветки
const el1 = document.getElementById('foo'); // тип HTMLElement | null
if (!el1) throw new Error('el is null')
el1.innerHTML = 'El is not null'

//С помощью instanseOf
const contains = (text: string, search: string | RegExp) => {
    if (search instanceof RegExp){
        //search типа RegExp
        return !!search.exec(text)
    }
    //search тип string
    return text.includes(search)
}

// Или проверка свойств
interface A {
    a: number;
}

interface B {
    b: number;
}

const pickAB = (ab : A | B) => {
    if ('a' in ab){
        // ab типа A
        console.log(ab.a)
    }
    else {
        //ab тип B
        console.log(ab.b)
    }
    // ab типа A | B
}

// Некоторые встроенные функции по типу .isArray тоже способен сжимать типы

// Еще один распространенный способ помочь модулю 
// проверки в сужении типа - добавление к ниму явного тега
interface UploadEvent {
    type : 'UploadEvent';
    fileName: string; 
    contents: string;
}
interface DownloadEvent {
    type : 'DownloadEvent';
    fileName: string; 
    contents: string;
}

type AppEvent = UploadEvent | DownloadEvent;
const handleEvent = (event: AppEvent) =>{
    switch(event.type){
        case 'DownloadEvent': 
            console.log('DownloadEvent type');
        case 'UploadEvent':
            console.log('UploadEvent type')
    }
}