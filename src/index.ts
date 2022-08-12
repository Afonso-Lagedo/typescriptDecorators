/*
>> DECORATORS <<

Use in 
Class, Property, methods, Parameters, GETTERS and SETTERS

Use to
Add resources, monitoring...

Create 
Create the function with default parameters
*/

function setIpServer(newIp: string){
    return(target:any) =>{//target is constructor of class 
        return class extends target{
            ip = newIp;
        }
    }
}

@setIpServer("192.168.15.178")
class Server{

}

const serverOne = new Server();

console.log(serverOne);