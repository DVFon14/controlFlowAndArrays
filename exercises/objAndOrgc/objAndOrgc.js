const adventurer = { //object decleration
  name: "Dulce", //key name, value Dulce
  hitpoints: 10,
  belongings: ["sword", "potion", "tums"],
  companion: {
      name: "peanut",
      type: "corgi",
      companion: {
          name: "tick",
          type: "parasite",
          belongings: ["scuba tank", "rogan josh", "health insurance"]
      }
  }
}

console.log(adventurer.belongings); //access the property(right word?) belogings 
console.log(adventurer.belongings.length); //we can do this because belongings is an array
console.log(adventurer.belongings[0]);

for(let i = 0; i < adventurer.belongings.length; i++){
  console.log(adventurer.belongings[i]);
}

console.log(adventurer.companion) //access the object companion. Outputs everything in object (rw?) companion
console.log(adventurer.companion.type) //accesses one of the keys in the object. Outputs corgi 

console.log(adventurer.companion.companion.type) //will output parasite
console.log(adventurer.companion.companion.belongings[2])


//EXAMPLE
const movies = [ //movies is an array of objects
  {title: "Tokyo Story"}, //an object (inside the array) with no name
  {title: "Mall Cop"},
  {title: "L'Avventura"},
];

console.log(movies) //outputs entire array 
console.log(movies[0]) //outputs title: "Tokyo Story"
console.log(movies[0].title) //outputs "Tokyo Story"

for(let i=0; i < movies.length; i++){
  console.log(movies[i].title);//without .title, the word "title" will appear on the output

}

const foo = { //this is an object decleration
  someArray: [1, 2, 3],
  someObject: {
      someProp: "oh, hai, mark"
  }, 
  someMethod: function (){ 
      console.log("inside of method");
  }
}

console.log(foo.someArray); //will output entire array 
console.log(foo.someArray[0]); //will out put 1
console.log(foo.someObject.someProp)
console.log(foo.someMethod)

const foo2 = [
  [1, 2, 3, 4],//this is a two dimensional array 
  [5, 6, 7, 8],
  [9, 10, 11, 12, 13]
] 
console.log(foo2[1][2]); //should output 7




//STORING FUNCTIONS IN AN ARRAY 
const foo3 = [
  1,
  "hi",
  () => {
      console.log("fun")
  }
]; 

//console.log(foo3[2]() ); //outputting undefined. Why?






//EXAMPLE OF A LOT OF TYPING
/*const player = { 
  name:"Josh the great",
  health: 1000,
  power: 1000, 
  stamina: 1000
}

const bigBadBoss = { 
  name:"Magnardo the merciless",
  health: 100000000,
  power: 100000000, 
  stamina: 100000000
}

const createEnemy = (nameIs, healthIs, powerIs, staminaIs) => {
  const newEnemy = {
    name: nameIs,
    health: healthIs,
    power: powerIs,
    stamina: staminaIs
  }
  return newEnemy
}
const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
  const newPlayer = {
    name: nameIs,
    health: healthIs,
    power: powerIs,
    stamina: staminaIs
  }
  return newPlayer
}*/

//EXAMPLE OF CLASS

class Character {
  constructor (name, age, eyes, hair, lovesCats= false, lovesDogs) { // constructor is a special function 
      this.legs = 2;
      this.arms = 2;
      this.name = name;
       this.age = age;
      this.eyes = eyes;
      this.hair = hair;
      this.loveCats= lovesCats;
      this.lovesDogs = lovesDogs || false;
   }
  greet(otherCharacter){ //method?
      console.log('hi ' + otherCharacter + "!");
  }
  classyGreeting (otherClassyCharacter) {
      console.log('Greetings ' + otherClassyCharacter.name + '!');
    }
  //setter method
  setHair (hairColor) {
      this.hair = hairColor;
    }
  smite(){
      console.log("I smite thee!")
  }

}

/*const p1 = new Character("Dulce", 30, "brown", "brown", true, true); //object
const enemy = new Character//("name2", "age2," "eyes2");

console.log(typeof p1); //outputs the word objecgt
console.log(p1.greet("Bob")); //hi Bob!
console.log(enemy.greet("sauron")); //hi sauron!
console.log(p1.smite()); //I smite thee!

//p1.hair = 'supernove red'
//console.log(p1.hair); //supernove red


console.log(p1);
p1.setHair('pink');
console.log(p1);*/

//Objects interacting with other objects

//console.log(enemy.classyGreeting(p1));

//create methods to alter instances

class Hobbit extends Character {
  constructor(name, age, eyes, hair){
      super(name, age, eyes, hair)
      this.skills = ['thievery', 'speed', 'willpower'];
  }
  steal (){
      console.log("let's get away!")
  }
  smite(){
      super.smite(); //keyword used to call the construction of its parent class to access the parents properites and methods. parent smite
      this.steal();
  }
  greet(otherCharacter){
      console.log(`Hello ${otherCharacter}`)
  }
}

const frodo = new Hobbit ("Mr. Baggins", 33, 'brown', 'black')
console.log(Hobbit);
console.log(frodo.smite()); //Character class
console.log(frodo.steal()); //specic to the Hobbit class

console.log(frodo.smite());
console.log(frodo);



class Car {
    constructor(maker, serialNumber){
        this.serialNumber = serialNumber;
        this.maker = maker;
    }
    drive(){
        return 'vroom vroom'; //havent called it so it won't output
    }
}

class Factory {
    constructor (company) {
      this.company = company;
      this.cars = [];
    }
    generateCar () {
      const newCar = new Car(this.company, this.cars.length); //instantiating a new object
      this.cars.push(newCar);
    }
    findCar (index) {
      return this.cars[index]; //this.cars[1]
    }
  }

const newCar = new Car('Mazda', 12345) //goes through the class Car
console.log(newCar) //outputs Car {serialNumber: 12345, maker: 'Mazda'}

console.log(newCar.drive())

const tesla = new Factory('Tesla')
tesla.generateCar(); //every time we generate a new car, it will be pushed into this.car's array
tesla.generateCar();
tesla.generateCar();
tesla.generateCar();
console.log(tesla);

console.log(tesla.findCar(0))

const porche = new Factory ('Porche');
porche.generateCar();
porche.generateCar();
porche.generateCar();
console.log(porche);
console.log(porche.findCar(1));

