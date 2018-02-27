function Cat(name, age) {
  this.name = name;
  this.age = age;
  this.type = "MyCat";
  this.image = "cat.jpg";
}

function Guineapig(name, age) {
  this.name = name;
  this.age = age;
  this.type = "Guineapig";
  this.image = "guineapig.jpg";
}

function Chipmunk(name, age) {
  this.name = name;
  this.age = age;
  this.type = "Chipmunk";
  this.image = "chipmunk.jpg";
}

var animal = [new Cat(), new Guineapig(), new Chipmunk()];

var names = ["Anika", "Selina", "Tracy", "Andrew", "Chris", "Ji An"];

function generateRandomIndex(maxIndex) {
	return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
	return names[generateRandomIndex(names.length)];
}

function generateRandomAge() {
	return Math.floor(Math.random() * 6);
}

function generateRandomAnimal() {
	var randomIdx = generateRandomIndex(animal.length);
	var randomAnimal = animal[randomIdx];
	var randomName = generateRandomName();
	var randomAge = generateRandomAge();
	if (randomAnimal instanceof Cat) {
		return new Cat(randomName, randomAge);
	} else if (randomAnimal instanceof Guineapig) {
		return new Guineapig(randomName, randomAge);
	} else if (randomAnimal instanceof Chipmunk) {
		return new Chipmunk(randomName, randomAge);
	}
}

$(document).ready(function() {
	var animal = generateRandomAnimal();
	$("#title").text("The cute " + animal.name + " is "+ animal.age + " years old!");
  	$("#image").attr("src", "img/" + animal.image);
});
