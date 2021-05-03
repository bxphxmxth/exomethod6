// - ## Créer une variable qui reçois un array avec 3 éléments -> ex: coding 11, coding 12, coding 13

let coding = ["coding 11", "coding 12", "coding 13" ];


// - ##  Afficher les éléments de l'array

console.log(coding);

// - ## Afficher le nombre d'éléments de l'array

console.log(coding.length);

// - ## Afficher les éléments de l'array 1 par 1

console.log(coding[0]);
console.log(coding[1]);
console.log(coding[2]);

// # Exercice 2 JavaScript -> Array

//     - ## Créer une variable qui reçois un array avec 3 éléments -> ex: coding 11, coding 12, coding 13

let coding2 = ["coding 17", "coding 18", "coding 19"];

//     - ## Afficher les éléments de l'array

console.log(coding2);

//     - ## Ajouter et afficher votre prénom a l'array

coding2.push("Nasila");
console.log(coding2);

// - # Exercice 3 JavaScript -> Array

//     - ## Créer une variable qui reçois un array avec 3 éléments -> ex: coding 11, coding 12, coding 13

let coding3 = ["coding 20", "coding 21", "coding 22"];


//     - ## Afficher les éléments de l'array

console.log(coding3);


//     - ## Ajouter derrière et afficher votre prenom a l'array

coding3.push("Nasila");
console.log(coding3);

// ajouter devant

coding3.unshift("Nasila");
console.log(coding3);

//     - ## Remplacer et afficher un élément de l'array par autre chose

coding3.splice(1,1,"Wesh bien ou bien");
console.log(coding3)


// - # Exercice 4 JavaScript -> Array

//     - ## Créer une variable qui reçois un array avec 3 éléments -> ex: coding 11, coding 12, coding 13

let fruits = ["topinambour", "legume", "tbete"];


//     - ## Afficher les éléments de l'array

console.log(fruits);

//     - ## Ajouter et afficher votre prenom a l'array
// (push au debut)
fruits.push("Aala");
console.log(fruits);

//     - ## Remplacer et afficher un élément de l'array par autre chose

fruits.splice(1,1,"Tonpere");
console.log(fruits);

// ou pour remplacer le dernier element du tableau : 

fruits.splice(fruits.length-1,1,"youuuhou");
console.log(fruits);



//     - ## Effacer un élément de l'array

fruits.pop();

//     - ## Afficher le contenu le d'array

console.log(fruits);
