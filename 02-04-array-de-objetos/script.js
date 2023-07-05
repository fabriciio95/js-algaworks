var person1 = {
  name: 'Fabricio',
  age: 28
}

var person2 = {
  name: 'Agatha',
  age: 27
}

var list = [
  person1, person2
]


for(var person of list) {
  console.log(person.name)
}