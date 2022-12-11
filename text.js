let string;
const INTEGER = 3;
let float = 4.5;
let boolean = false // true
let array = [1, 2, 3, 4, 5]; // array[1]
let student = {}; // { key: value};
const class2b = [
	{
		firstname: 'Sara',
		lastname: 'Leinweber',
		born: '??.??.????',
	},
	{
		firstname: 'Simona',
		lastname: 'Leinweber',
		born: '??.??.????',
	},
];
// falsey values / neplatné hodnoty
// false, 0, '', undefined, null, NaN (not a number)

// Operators
// > vetsi, < mensi, === rovna se, >= vetsi nebo rovno, <= mensi nebo rovno,
// && a, || nebo

// zku si provest blok kodu {}
try {
	PI = 'neco';
} catch (eror) {
	// pokud se blok nepovede provest, provede se blok codu v catch {}
}

// funkce
function sum(a, b) {
	// navratova hodnota funkce
	return a + b;
}
function compare(a, b) {
	let result = '';
	// if statement = zkouma jestli je splnena dana podminka
	if (
		(Number.isNaN(parseInt(a))) ||
		(Number.isNaN(parseInt(b)))
	) {
		// Number.isNaN(x) vraci jestli x je nebi neni NaN
		// parseInt(x) vraci x prevedene na integer nebo NaN
		result = `Chyba! vlozili jste spatnou hodnotu.`;
	} else {
		if (a > b) {
			result = `${a} je vetsi nez ${b}`;
		} else if ( a === b) {
			result = 'Cisla jsou stejne velka';
		} else if (b > a) {
			result = `${b} je vetsi nez ${a}`;
		}
	}
	return result;
}
// LOOP / SMYCLA
// for (start pocitadla, konec pocitadla, inkrementace v kazdem kole) {}
let totalSum = 0;
for (let i = 0; i < array.length; i++) {
	console.log(`prubeh smyckou: ${i}`);
	totalSum = totalSum + array[i];
}


console.log(`soucet cisel v poli: ${totalSum}`);

let comparedNumbers = compare(8, totalSum);
console.log(`${comparedNumbers}`);