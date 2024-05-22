// Qs. You are creating a website for your college.

//Create a class User with 2 properties, name & email.It also has a method called viewData() that allows user to view website data.
class User {
  constructor(name,email) {
    this.name = name;
    this.mail = email;
    }
    viewData() {
        console.log(this.name);
        console.log(this.mail);
    }
}

let lakshya = new User("Lakshya","lakshyad1902");