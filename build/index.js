"use strict";
/*
>> DECORATORS <<

in Property
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function validateName(size) {
    //target = constructor
    //key = property
    return (target, key) => {
        let test = target[key];
        const getter = () => test;
        const setter = (value) => {
            if (value === "") {
                console.log("Can't be empty");
            }
            else if (value.length < size) {
                console.log("The minimum size is five");
            }
            else {
                test = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };
}
class Game {
    constructor(name) {
        this.name = name;
    }
}
__decorate([
    validateName(5)
], Game.prototype, "name", void 0);
//const game1 = new Game(""); //return: Can't be empty
//const game1 = new Game("GTA"); //return: The minimum size is five
const game1 = new Game("FIFA 2022"); //return: FIFA 2022
console.log(game1.name);
