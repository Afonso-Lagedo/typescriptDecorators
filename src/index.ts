/*
>> DECORATORS <<

Use in 
Class, Property, methods, Parameters, GETTERS and SETTERS

Use to
Add resources, monitoring...

Create 
Create the function with default parameters
*/

//target = receive the class's constructors
function logInfo(target:any){
    console.log(target);
    console.log("test");
}

@logInfo//call Decorators
class System{

}

//####Factory standard#####
function logInfo2(msg:string){
    return (target:any) => {
        console.log(`${msg}, ${target}`)
    }
}

@logInfo2("test factory")
class System2{

}


