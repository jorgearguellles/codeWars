animals = [ 
  {
    type: 'Dog',
    mammal: true,
  },
  {
    type: 'Snake',
    mammal: false,
  }, 
  {
    type: 'Cheetah',
    mammal: true,
  },
  ];


//Lista compuesta por mamals
//let mamals = [];

//Verificación si el animal es Mamal, para agregarlos a la lista 
function isMamal(animal){
  if(animal[mammal] === true){
    mamals = animal.push(animals[type])
  }
}

//Funciñon que pregunta animal por animla verificado si es mamal, y si SI, los agrega a la lista
function findMamals(lista){
  let mamals = [];
  lista.map(isMamal)
  console.log(mamals)
}

