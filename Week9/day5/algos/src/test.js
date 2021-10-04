//1. access captneyepatch

//2. change wonderwoman to diana prince

//3. use an array method to delete the last superhero in the justice league

//4. use an array method to add the word "member" to every hero in the theOtherHeroes array. (ex. crimsonmechdudemember)

//5. combine the justice league members and the other heroes together in a crosserOver array

//6. delete all heroes in the justice league who have the word "man" in their title

//7. iterate over both arrays so that they are no longer just strings but they are objects that are structured like this
//combine them so they are all heroes in one array
const object = [
	{
		name: "spiderman",
		league: "otherHeroes",
	},
	{
		name: "batman",
		league: "Justice league",
	},
];

const justiceLeague = [
	"batman",
	"wonderwoman",
	"cyborg",
	"flash",
	"aquaman",
	"spiderman",
	"superman",
	"greenlantern",
];

const theOtherHeroes = [
	"crimsonmechdude",
	"hammerboy",
	"greenguy",
	"hawkguy",
	"blackassassin",
	"shieldbro",
	"captneyepatch",
];

console.log(theOtherHeroes[6]);

justiceLeague[1] = "diana prince";
console.log(justiceLeague[1]);

justiceLeague.splice(-1, 1);
console.log(justiceLeague);

for (let index = 0; index < theOtherHeroes.length; index++) {
	let element = theOtherHeroes[index];
	element += "member";
	console.log(element);
}
let crossover = [];
for (let index = 0; index < justiceLeague.length; index++) {
	const element = justiceLeague[index];
	crossover.push(element);
}
for (let index = 0; index < theOtherHeroes.length; index++) {
	const element = theOtherHeroes[index];
	crossover.push(element);
}
console.log(crossover);

for (let index = 0; index < justiceLeague.length; index++) {
	const element = justiceLeague[index];
	if (element.includes("man")) {
		justiceLeague.splice(index, 1);
	}
}
console.log(justiceLeague);

// Object.assign({}, justiceLeague);
