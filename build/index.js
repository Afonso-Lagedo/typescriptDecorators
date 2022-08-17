"use strict";
/*
>> DECORATORS <<

in method. Decorators be called when method be called
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function checkAge(age) {
    return (target, key, descriptor) => {
        /*console.log("Target: ", target);
        console.log("Key: ", key);
        console.log("Descriptor: ", descriptor);*/
        /*Save the origin method*/
        const originMethod = descriptor.value;
        /*overwriting*/
        descriptor.value = function () {
            if (age < 18) {
                console.log("children");
            }
            else {
                console.log("+18");
                return originMethod.apply(this);
            }
        };
    };
}
class Person {
    constructor(name) {
        this.name = name;
    }
    newPerson() {
        console.log(`Hello ${this.name}`);
    }
}
__decorate([
    checkAge(21)
], Person.prototype, "newPerson", null);
const personOne = new Person("Afonso");
personOne.newPerson();
