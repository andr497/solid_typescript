var Email = /** @class */ (function () {
    function Email(email) {
        if (this.validateEmail(email)) {
            this.email = email;
        }
        else {
            throw new Error("Invalid email!!");
        }
    }
    Email.prototype.validateEmail = function (email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    };
    return Email;
}());
var Person = /** @class */ (function () {
    function Person(name, surname, email) {
        this.email = email;
        this.name = name;
        this.surname = surname;
    }
    Person.prototype.greet = function () {
        console.log("Hi");
    };
    return Person;
}());
var nombre = "Jose";
var apellido = "Munguia";
var correo = new Email('correo@gmail.com');
var persona = new Person(nombre, apellido, correo);
console.table(persona);
