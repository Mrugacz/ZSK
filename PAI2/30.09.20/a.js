function Osoby(_imie, _nazwisko, _wiek, _wzrost)
{
    this.imie = _imie;
    this.nazwisko = _nazwisko;
    this.wiek = _wiek;
    this.wzrost = _wzrost;
}

function Osoby_toString()
{
    let s = String(this.imie);
    s = s.concat(" ",this.nazwisko, ", ", this.wiek);
    return s;
}
Osoby.prototype.toString = Osoby_toString;
let o1 = new Osoby("Jan", "Kowalski", "30", "1000");
console.log(o1.toString());

console.log(o1.hasOwnProperty('imie'));
console.log(Object.prototype.isPrototypeOf(o1));
console.log(String.prototype.isPrototypeOf(o1));

var person = {};
Object.defineProperty(
    person,

    "legs",
    {
        value: 2,
        writable: true,
        configurable: true,
        enumerable: true,
    }
)

Object.defineProperty(
    person,

    "legs1",
    {
        value: 2,
        writable: true,
        configurable: true,
        enumerable: false,
    },
)

console.log(Object.keys(o1));
for(let i = 0; i < Object.keys(o1).length; i++)
    console.log(Object.keys(o1)[i]);


console.log(Object.keys(person));
for(let i = 0; i < Object.keys(person).length; i++)
    console.log(Object.keys(person)[i]);    

var worker = {
    work: "copy-pasting",
    speak: function () {
        console.log("My job is " + this.work);
    },
}

var developer = {
    work: "coding apps",
    speak: function () {
    },
}

worker.speak();
worker.speak.call(developer);