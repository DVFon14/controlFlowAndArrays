
class Governor {
    constructor(name, money, law, age){
        this.name = name;
        this.money = money;
        this.law = law;
        this.age = age;
    }
    takeTax(personName){
        console.log(personName + " will take your taxes!" );
        
       }
}

const governor1 = new Governor ('Nhan', 26900, "veto", 26); //if i don't create this variable, then i need "Static" in the method takeTax
governor1.takeTax("Nhan"); //if i put "static takeTax(personName), then I could do Governor.takeTax("Nhan") and it will output the word Nhan in the correct place 







class Person{
 constructor (party, legalAge, county){
    this.party = party;
    this.legalAge = legalAge;
    this.county = county
  }
    static vote(name1){
        console.log(name1, "will vote for himself in this years election")}

    static reside(county){
        console.log(county, "is in the United States")}
   
    static drive(age) {
        if (age >= 16){
            console.log("You can drive!")
        }
        else {
            console.log("You cannot drive!")
        }
    }
     
  
}

const person1 = new Person ('democrat', 21, "Aurora");


console.log(person1)
Person.vote("Nhan")
Person.reside("Orange County")
Person.drive(35)







class PostalWorker extends Person {
    constructor (letters, miles,){
        this.letters = letters;
        this.miles = miles;
      }
    static workOvertime(){
        console.log("Do you REALLY need to work over time?")
    }
}




class Chef extends Person {
    constructor (knives, cuttingBoards,){
        this.knives = knives;
        this.cuttingBoards = cuttingBoards;
      }
    static plates(dishes){
        console.log('wow, you know how to make ' + dishes + ' dishes!')
    }
}

Chef.plates(8)