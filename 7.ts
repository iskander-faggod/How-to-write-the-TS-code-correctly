// #7 Не засоряйте код лишними аннотациями типов

// Обычно многие люди как только начинают работать с TS,
// начинают максимально подробно указывать типы

// Но обьявление типов для абсолютно каждой строки является плохим тоном
// Например:

let num : number = 12;
// В подобных случаях типы лучше вовсе не учитывать

// Когда вы описываете обьекты,
// лучше тоже избежать лишних строчек с указанием типов,
// это делает код менее читаемым


// Пример : вместо этого куска кода, достаточно будет просто написать:
const person : {
    name : string;
    born : {
        where: string;
        when: Date;
    },
    died : {
        where: string;
        when: Date;
    }
} = 
{
    name : 'Iskander',
    born : {
        where: "Surgut",
        when: new Date(1642792222762),
    },
    died : {
        where: "Saint-Petersbutg",
        when: new Date(1842792222762),
    }
}

const iskander : {
    name : 'Iskander',
    born : {
        where: "Surgut",
        when : new Date('2021 10 3'),
    },
    died : {
        where: "Saint-Petersbutg",
        when: new Date(1842792222762),
    }
}

// Что работет для обьектов, также работает и для массивов
const square = (nums: number[]) => {
    return nums.map(x => x * x);
}

const squaresWithType : number[] = square([1,2,3,4,5]) // тип number[]
const squares = square([1,2,3,4,5]) // тип number[]
// лишний раз указывать тип просто не имеет смысла

// Приведу еще один простой пример:
interface Product {
    id : string;
    name : string; 
    amount : number;
}

const logProduct = (product : Product) => {
    const id : string = product.id;
    const name : string = product.name;
    const amount : number = product.amount;

    console.log(id, name, amount)
}

// Излишняя аннотация опять загрязнает код, лучше сделать так

const logProduct2 = (product : Product) => {
    const {id, name, amount} :
         {id: string, name: string, amount: number} = product;
    console.log(id, name, amount)
}

// Избегайте аннотации типов, когда TS может сделать их вывод
// Код должен содержать аннотации типов для сигнатур функций и методов, но не для местных переменных в их телах
// Чтобы избегать явных ошибок реализации в коде пользователя, попробуйте применить явные
// аннотации типов для обьектных литералов и возвращаеммых типов функций, даже если они могут быть выведены