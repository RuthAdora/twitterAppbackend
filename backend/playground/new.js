class Person {
    constructor(name= "anonymous", age = 0, major) {
        this.name = name;
        this.age = age;
        this.major = major;
    }
    getGreeting(){
        return `Hi, I am ${this.name} and am ${this.age}years old`;
    }
    getDescription(){
        return `I am ${this.name} and I study ${this.major}`
    }

}
const person1 = new Person("Jeffrey", 20);
const person2 = new Person ("Reina" , 22)
console.log(person1.getGreeting());
const person4 = new Person("John",20, "Construction")
console.log(person4.getDescription())

const design = {
    place: "Kenyan",
    company: "Lakehub",
    scale: "swimming",
    niche: "fashion",
  };

  const { name, city, sport, favWrite } = design;
  console.log(scale);