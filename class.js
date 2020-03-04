var User = /** @class */ (function () {
    function User() {
        //When new object is created (memory is alo), first constructor is called
        console.log("Hello Deepa");
    }
    User.prototype.getUserDetails = function () {
        if (this.username) //when you want to one class member into another class member, we use "this" keyword.
         {
            //this is current object reference here.
            console.log("username : " + this.username);
        }
    };
    return User;
}());
;
//let user : User = new User(); //new instance is created
var user = new User();
user.username = "Deepa";
user.getUserDetails();
user.username = "Deepa";
