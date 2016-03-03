interface iHuman {
    name:string,
    age:number,
    gender:string,
    object:Object
}
class Human {
    constructor(
        public name:string = "No name",
        public age = 0,
        public gender = "man"
    ){};
    getHuman():string {
        "#{this.name} #{this.age} #{this.gender}";
    };
}
var alexey:Human = new Human();

console.log(alexey.getHuman());