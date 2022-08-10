"use strict";
/*
>> DECORATORS <<

Use in
Class, Property, methods, Parameters, GETTERS and SETTERS

Use to
Add resources, monitoring...

Create
Create the function with default parameters
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//target = receive the class's constructors
function logInfo(target) {
    console.log(target);
    console.log("test");
}
let System = class System {
};
System = __decorate([
    logInfo //call Decorators
], System);
//####Factory standard#####
function logInfo2(msg) {
    return (target) => {
        console.log(`${msg}, ${target}`);
    };
}
let System2 = class System2 {
};
System2 = __decorate([
    logInfo2("test factory")
], System2);
