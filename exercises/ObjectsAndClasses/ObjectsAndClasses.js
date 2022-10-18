
//EXAMPLE OF AN OBJECT
const car = {
    make: "Toyota",
    model: "Camry",
    year: 1996,
    isLoud: true,
    isRunning: false
}

console.log(car);

//EXAMPLE 2 OF OBJECT 
const house = {
    door: 9
}
house.garden = true;
house.window = 30; //will add this property to the house object
house.bathroom = 7;

house.garden = true;
house.garden = false; // properties can be updated, garden will output false

//EXAMPLE 3
const myPet = {
    name: "Coffee",
    name: "Randy",
    age: 1,
    favoriteThing: "sitting on my lap",
    speakFrench: false,
    solveRubiksCube: true
}

console.log(myPet)

//EXAMPLE 4

const obj = {
	salutation: 'hi',
	count:4
}
if (obj.salutation === "hi") { //checking if the property exists inside object
	console.log('ok');
}

for (let i = 0; i < obj.count; i++) { 
	console.log(i);
}

//EXAMPLE 5 using example 4
let result = obj.hasOwnProperty('salutation'); //hasOwnProperty is a built in method
//to check if property exists
console.log(result); 

//EXAMPLE OF CLASS
class Vehicle{
    constructor(vin, make){ //new object will be returned by default
        this.vin = vin; //connect vin to "this" class
        this.make = make;
    }
}

const plane = new Vehicle ("3141592", "Boeing");
const myFirstCar = new Vehicle ("923874i", "Honda");

console.log(plane);



//EXAMPLE
class Vehicle2{
    constructor(vin, make, model){ //new object will be returned by default
        this.vin = vin; //connect vin to "this" class
        this.make = make;
        this.model=model;
    }
//instance method
start() {
    this.running = true;
    console.log("running")
    }
}

const car2 = new Vehicle2("dfg", "Toyota", "Prius") //instantiated a new object

car2.start();