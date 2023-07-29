type Sex = 'male' | 'female'

interface Animal {
    sex: Sex,
    hungry: boolean,
    age: number
}


interface Mammal extends Animal {
    weaned: boolean
}

const animal: Mammal = {
    hungry: false,
    sex: "female",
    weaned: true,
    age: 6
}

type Person = Mammal &  {
    name: string
}

const person: Person = {
    hungry: false,
    sex: "female",
    weaned: true,
    age: 6, 
    name: 'Tiago'
}

type Animal2 = {
    sex: Sex,
}

interface Mammal2 extends Animal2 {
    weaned: boolean
}

const animal2: Mammal2 = {
    sex: "male",
    weaned: false
}

interface Greet {
    (name: string) : string
}

const greet: Greet = name => `Hello, ${name}`

type GreetMethod = (name: string) => string

const greet2: GreetMethod = name => `Hello, ${name}`

const greet3 = (name: string) => `Hello, ${name}`

greet3('Tulio').toUpperCase