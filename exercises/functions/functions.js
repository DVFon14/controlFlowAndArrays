console.log("Functions Lesson")

//function decleration
function one() {  
    return 'one'
}

one(); //calling a function 

//function expression
const two=() => { 
    return 2;
}

function areBothEven(n1, n2){
    return !(n1%2) && ! (n2 %2); /*we need a ! because a zero
    in JV is a falsy statement. So if we get 6 % 2 = 0, then 
    it will come out as false, even though we want it to be true
    so we need ! */
}
console.log(areBothEven( 3, 4));

let maria = getDevObject("Maria", "HTML", "CSS", "JS")
/*let maria1 =
{
    name: "Maria"
    skills: ["HTML", "CSS", "JS"]

} */

function getDevObject(name){
    let skills = [];

    for(let i= 1; i < arguments.length; i++ ){ //arguments array-like objects //we don't want Maria in our array, so start i=1 
        skills.push(arguments[i])
    } 

    return {
        devName: name, 
        jobSkills: skills
    }
}

console.log(getDevObject(maria));


function getDevObject(name, ...skills){ //rest parameter //We dont' know the number of skills, but they're gonna go here
    return{
        devName: name,
        jobSkills: skills
    }

}

const sayName = (name) => { //an arrow function with one parameter 
    console.log(`Hello, my name is ${name}`);
}

sayName("Aang");
sayName("Avatar the Last Airbender");

const calAreaOfSquare = (length, height) => {
    //console.log(length * height);
    let sqft = length * height;
    console.log(`My square or rectangle is ${sqft} square units`);
}
calAreaOfSquare(3, 5)


const planetHasWater = (planet) => {
    if (planet == 'Mars' || planet == 'Earth'){
        console.log("True"); //when I used return statements it didn't work. Why?
    }
    else
    {
        console.log("False");
    }  
}
planetHasWater('Mars')

const planetHasWater2 = (planet2) => {
    return (planet2.toLowerCase() === 'earth' || planet2.toLowerCase()=== 'mars')
}

const areaOfTri = (base, height) => {
    area = base * height
    console.log(`The area of triangle
    with a base of ${base} and a height of
    ${height} is ${area} units squared.`)
}
areaOfTri(7,4);