class Email{
    public email: string;
    constructor(email: string){
        if(this.validateEmail(email)){
            this.email=email;
        } else {
            throw new Error("Invalid email!!");
        }
    }
    validateEmail(email: string){
        let re=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    }
}

class Person{
    public name: string;
    public surname: string;
    public email: Email;
    constructor(name: string, surname: string, email: Email){
        this.email=email
        this.name=name;
        this.surname=surname;
    }
    
    greet(){
        console.log("Hi")
    }
}

let nombre: string="Jose";
let apellido: string="Munguia";
let correo: Email= new Email('correo@gmail.com')

const persona = new Person(nombre, apellido, correo);

console.table(persona)