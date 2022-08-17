import { checkAge } from './decorators/checkAge'
/*
>> DECORATORS <<

in method. Decorators be called when method be called
*/


class Person {
    name: string;

    constructor (name:string){
        this.name=name;
    }

    @checkAge(21)
    newPerson(){
        console.log(`Hello ${this.name}`)
    }

}

const personOne = new Person("Afonso")

personOne.newPerson();