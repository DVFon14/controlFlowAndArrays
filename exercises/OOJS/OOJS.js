/*var names= ["ryu", "crystal", "mario"]
names.sort() //will sort in alphabetical order

window //gives us a list of methods available in our screen's window

var name100 = 'mario' //name100 is not an object, it is a primitive type. No action to call on it
name100.length //

var name100 = new String


var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login: function(){ //alternate format is login(){}
        console.log(this.email, 'has logged in')
},
logout(){
    console.log(this.email, 'has logged out');
}    
};

console.log(userOne.name); 
userOne.name = 'Yoshi'; //this will change the name in the object userOne
userOne['name']; //same as line above

var prop = 'name'
userOne[prop] //prop is a dynamic, changing VARIABLE 
userOne.prop //will give an error because prop is not in our object

userOne.age = 25 //will add this to the object

userOne.logInfor = function (){}; //not sure what this does


//What if we wanted to do this with more than one user???

class User{
    constructor(email, name){ //when a user creates a new user, we are expecting two variable
        this.email = email; //the variable we passed in
        this.name = name; // the variable name we passed in
        this.score = 0;
    } // function will create the new User object
    login(){
        console.log(this.email, 'just logged in'); //adding login method to the user class
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score)
        return this;
    }

}
 
class Admin extends User { //whenever we create a new admin, it will still have all the functionalities that User does
    //if we do not have a constructor in this new one, it will jsut use the ones in the other class
    deleteUser(user){ //user is an arugment
            users = users.filter(u => { //filter works only on arrays and remove from arrays//u is referencing users = [userOne, userTwo]. We could use currentUser in place of u
                return u.email != user.email //if the email of userTwo is not equal to the parameter user, then it will return true
            })
    }
}

var userOne = new User('email1', 'name 1') //the 'new' keyword creates a new empty object. Sets the value of 'this' to be the new empty object
var userTwo = new User('email2', 'user2')
console.log(userOne);
console.log(userTwo);


userOne.login();
userTwo.logout();
userOne.updateScore()
userOne.updateScore()
userOne.login().updateScore().updateScore().logout() //we are method chaining. This is possible by the return statements in the class


var admin = new Admin('shawn@aol', 'Shawn') //we still need to pass name and email because Admin is an extensin of User
console.log(admin)
var users = [userOne, userTwo, admin];
admin.deleteUser(userTwo) //will delete userTwo from the array, but will not delete userTwo from the program
console.log(users)
//userOne.delteUser() //this will give an error because userOne does not have the access to delete

*/

function User(email, name){ //we are emulating a class. This is waht we did before the class update
    this.email = email;
    this.name = name;
    this.online = false; 
    //this.login = function (){ //we don't need this when we do the prototype
      //  console.log(this.email, "has logged in");
    //}
}

User.prototype.login =function (){ //we can't call proptorype on the instances of the object such as userONE
    this.online =true;
    console.log(this.email, "has logged in");
}

User.prototype.logout =function (){ //we can't call proptorype on the instances of the object such as userONE
    this.online =true;
    console.log(this.email, "has logged out");
}

function Admin(...arg){ //will take in 'shawn@aol.com', 'Shawn' as array
    User.apply(this,arg) //will run the function User. Arg will pass in [email, name]
    this.role = 'super admin'; //User will not have this access. 
}

Admin.prototype = Object.create(User.prototype)// inherets the prototypes

Admin.prototype.deleteUser = function(u){ //adding additional functionallity to just the admin prototype
    user = users.filter(user =>{
        return user.email != u.email;
    });
}


var userOne = new User('email1', 'name 1') //the 'new' keyword creates a new empty object. Sets the value of 'this' to be the new empty object
var userTwo = new User('email2', 'user2')
var admin = new Admin('shawn@aol.com', 'Shawn');


console.log(userOne)
userTwo.login();

var users =[ userOne, userTwo, admin];