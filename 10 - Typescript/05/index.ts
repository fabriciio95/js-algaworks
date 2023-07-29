const person: {
    name: string,
    age: number,
    contacts: string[],
    isAlive: boolean
} = { 
    age: 22,
    name: 'Lucas',
    isAlive: true,
    contacts: [
        'daniel.bonifacio@algaworks.com'
    ]
}

type Person =  {
    name: string,
    age: number,
    contacts?: string[],
    isAlive: boolean
}

const person2: Person = { 
    age: 22,
    name: 'Lucas',
    isAlive: true,
    contacts: [
        'daniel.bonifacio@algaworks.com'
    ]
}

const person3: Person = { 
    age: 22,
    name: 'Lucas',
    isAlive: true
}