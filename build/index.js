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
function setIpServer(newIp) {
    return (target) => {
        return class extends target {
            constructor() {
                super(...arguments);
                this.ip = newIp;
            }
        };
    };
}
let Server = class Server {
};
Server = __decorate([
    setIpServer("192.168.15.178")
], Server);
const serverOne = new Server();
console.log(serverOne);
