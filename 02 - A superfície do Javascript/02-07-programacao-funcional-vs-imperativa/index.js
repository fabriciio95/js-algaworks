var person = {
  age: 17,
  name: 'Lucas'
}

//funcao pura pois recebe uma informação e nao altera nenhum dado da informação recebida
function getRemainingYearsToMajorty(person) {
    return 18 - person.age;
}

// função impura - gera efeitos colaterais (altera a informação recebida)
function increasePersonAge(person) {
  person.age += 1
}

increasePersonAge(person)

var remainingYears = getRemainingYearsToMajorty(person)

console.log(remainingYears)