const eatsPlants = true;
const eatsAnimals = false;

/*
 * 
 */
const category = eatsPlants && eatsAnimals 
    ? "omnivore" 
    : eatsPlants 
        ? "herbivore" 
        : eatsAnimals 
            ? "carnivore" 
            : "undefined";

console.log(category);
