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

// console.log("Array:",animals);
// console.log("Primer Animal:",animals[0]);
// console.log("Tipo del primer Animal:",animals[0].type);

function findMamals(listaDeAnimales){
  let mamals = [];
  listaDeAnimales.map(
    function(animal){
      if(animal.mammal === true){
        return mamals.push(animal.type)
      }
    }
  )
  console.log(mamals);
  return mamals;
}

findMamals(animals);
