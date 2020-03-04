class User{
    public username : string; //This member is publicly accessible
    constructor() //default member of the class/ Super method
    {
        //When new object is created (memory is alo), first constructor is called
        console.log("Hello Deepa");
    }
    getUserDetails()
    {
        if(this.username) //when you want to one class member into another class member, we use "this" keyword.
        {
            //this is current object reference here.

            console.log(`username : ${this.username}`);
        }
    }
};

//let user : User = new User(); //new instance is created
let user = new User();
user.username = "Deepa";
user.getUserDetails();
//user.username = "Deepa";