// console.log('Katalog warsztatów uruchomiony');
// console.log('Hello World!');
// console.log(typeof 2137);
// console.log(typeof false);
// console.log(typeof '420');
// console.log(typeof undefined);
// console.log(typeof NaN);
// console.log(typeof []);
// console.log(typeof {});

function makeHeader()
{
    console.log(title);
    console.log(`Zajęte ${enrolled}/${seats} miejsc`);
    console.log(slogan);
}

const seats=12;
const title="Kurs JavaScript";

let enrolled=10;
let slogan="Zapisz się na nasz Kurs!";
let course;
let warunek=1;

console.log(typeof seats);
console.log(typeof title);
console.log(typeof enrolled);
console.log(typeof slogan);
console.log(typeof course);

console.log(`W mojej opinii ten ${title} jest ${enrolled}/10.`); //fajny ten sposób, ciekawe, że człowiek codziennie dowiaduje się jak to sobie usprawnić życie

console.log("Za to inny był -"+enrolled+"/10, bardzo mi się nie podobał");

console.log("Natomiast ${enrolled} razy bardziej wolę programowanie w C#");

if(warunek==1)
{
    console.log(title);
} else if(warunek==2)
{
    console.log("Kurs TypeScript");
} else {
    console.log("Kurs w przygotowaniu");
}

warunek=2;

switch(warunek)
{
    case 1:
        console.log(title);
        break;

    case 2:
        console.log("Kurs TypeScript");
        break;

    default:
        console.log("Kurs w przygotowaniu");
}

warunek=3;

console.log((warunek==1) ? title : ((warunek==2) ? "Kurs JavaScript" : "Kurs w przygotowaniu"));

makeHeader();