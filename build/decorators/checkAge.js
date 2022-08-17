"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAge = void 0;
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
exports.checkAge = checkAge;
