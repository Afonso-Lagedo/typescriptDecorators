/*
>> DECORATORS <<

in method. Decorators be called when method be called
*/

function checkAge(age:number){
    return (target:any, key:string, descriptor: PropertyDescriptor) => {
        /*console.log("Target: ", target);
        console.log("Key: ", key);
        console.log("Descriptor: ", descriptor);*/

        /*Save the origin method*/
        const originMethod = descriptor.value;
        /*overwriting*/
        descriptor.value = function() {
            if (age < 18){
                console.log("children");
            }
            else{
                console.log("+18")
                return originMethod.apply(this);
            }
        }
    }
}


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