/*
>> DECORATORS <<

in Property
*/

function validateName(size:number){
    //target = constructor
    //key = property
    return (target: any, key: string)=>{
        let test = target[key];

        const getter = () => test;

        const setter = (value: string) => {
            if(value === ""){
                console.log("Can't be empty");
            } else if(value.length < size){
                console.log("The minimum size is five");
            } else{
                test = value;
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        })
    }
}

class Game {

    @validateName(5)
    name:string;

    constructor(name:string){
        this.name=name;
    }
}

//const game1 = new Game(""); //return: Can't be empty
//const game1 = new Game("GTA"); //return: The minimum size is five
const game1 = new Game("FIFA 2022"); //return: FIFA 2022

console.log(game1.name);
