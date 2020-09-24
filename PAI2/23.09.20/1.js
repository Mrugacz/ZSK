function Osoby(_imie, _nazwisko, _wiek, _wzrost)
{
    this.imie = _imie;
    this.nazwisko = _nazwisko;
    this.wiek = _wiek;
    this.wzrost = _wzrost;
}

let Osoba1 = new Osoby("Jan", "Nowak", 19 , 180);
let Osoba2 = new Osoby("Jan", "Kowlaski", 30, 169);
let Osoba3 = new Osoby("Bob", "Ross", 69, 420);
console.log(Osoba1.imie);
let tab = [];
tab.push(Osoba1,Osoba2,Osoba3);

function szukaj(_imie, _data)
{
    for (let i = 0; i < _data.length; i++)
    {
        if (_imie==_data[i].imie)
        {
            console.log(_data[i]);
        }
    }
}

// szukaj('Jan', tab);

function dodaj(_imie, _nazwisko, _wiek, _wzrost, _data)
{
    for (let i = 0; i < _data.length; i++)
    {
        if (_imie==_data[i].imie && _nazwisko==_data[i].nazwisko && _wiek==_data[i].wiek && _wzrost==_data[i].wzrost)
        {
            console.log('Osoba jest juz w bazie danych');
        }
        else
        {
            let nowa = new Osoby(_imie, _nazwisko, _wiek, _wzrost);
            tab.push(nowa)
            console.log(_data[i])
        }
    }
}

dodaj("xd", "+1", 69, 420, tab);