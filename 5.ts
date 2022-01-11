// #5 Операции типов и обобщения сокращают повторы.

// Все мы знаем принцип DRY, этот принцип также нужно соблюдать при формировании новых типов
 interface Person {
    name: string;
    surname: string;
    phoneNumber: number;
 }

 interface PersonWithBD {
    name: string;
    surname: string;
    phoneNumber: number;
    birthDay: Date;
 }

// Отнесемся к (3.ts) где я уже упоминал, что типизировать лучше все выражения, соответственно это очень упростит код и избавит вас от лишних дубликатов
// А проблему,которая приследует нас выше можно исправить расширением интерфейса (4.ts)


interface Person {
    name: string;
    surname: string;
    phoneNumber: number;
 }

 interface PersonWithBD extends Person {
    birthDay: Date;
 }

 //для типов 
 type TPersonWithBD =  Person & {bd: Date};

 // Использование ключевого слова Pick - пример обобщенного типа. 
 // Pick - берет два типа - T и K и возвращает третий.
 // Пример

 interface SaveAction{
     type: 'save';
 }

 interface LoadAction{
    type: 'save';
}

type Action = SaveAction | LoadAction;
// type ActionType = 'save' | 'load';
type ActionType = Action['type']

type ActionRec = Pick <Action, 'type'>  // {type : 'save' | 'load'}