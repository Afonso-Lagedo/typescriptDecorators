export function checkAge(age:number){
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