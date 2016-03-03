interface iHuman {
    name:string,
    age:number,
    gender:string,
    object?:Object
}
class Human implements iHuman {
    constructor(
        public name:string = "No name",
        public age = 0,
        public gender = "man"
    ){};
    getHuman():string {
        return "#{this.name} #{this.age} #{this.gender}";
    };
}
var alexey = new Human();

console.log(alexey.getHuman());