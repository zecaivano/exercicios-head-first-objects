var dog = {
	name:	"Fido",
	weigth: 20.2,
	age: 4,
	breed: "misto",
	activity: "buscar a bolinha"
};
var bark;
if (dog.weigth > 20) {
	bark = "AU AU";
} else {
	bark = "au au";
}

var speak = dog.name + " diz " + bark + " quando quer " + dog.activity;
console.log (speak);
