/*          Kintamieji
  NaN, null, undefined - egzistuojantys, bet nelabai svarbūs (kolkas)

  objektas - object - {}
    Grupuoti kintamuosius, kai nori, kad jie turėtų savo pavadinimus(raktinius žodžius); eiliškumas nesvarbus;
    objekte esantis kintamasis susideda iš 2 dalių: raktinisŽodis:reikšmė
  masyvas  - array  - []
    Grupuoti kintamuosius, bet eiliškumas yra svarbus, o kintamieji viduje neturi turėti pavadinimų (išvardinti, be jokio išskirtinumo) (tarsi sąrašas)

  Tiek objektas, tiek masyvas yra konteineriniai kintamieji (jų viduje talpinami kiti kintamieji)
*/

let asmuo1 = { 
  vardas: 'Rokas',
  pavarde: 'Banaitis',
  amzius: 26,
  vedes: false
};
let transportoPriemones = ['dviratis', 'mašina', 'lėktuvas', 'laivas', 'valtis', 'karieta', 'riedlentė'];

console.groupCollapsed('objektas simple');
console.log(asmuo1.amzius);
// asmuo1.amzius = asmuo1.amzius + 1;
asmuo1.amzius += 1;
console.log(asmuo1.amzius);
asmuo1.plaukuSpalva = 'ruda';
console.log(asmuo1);
console.groupEnd();

console.groupCollapsed('masyvas simple');
console.log(transportoPriemones);
console.log(transportoPriemones[1]);
console.log(transportoPriemones.length);
transportoPriemones[4] = 'jachta';
console.log(transportoPriemones);
// transportoPriemones[transportoPriemones.length] = 'naujas';
transportoPriemones.push('riedučiai');
console.log(transportoPriemones);
console.groupEnd();

let asmenys = [
  {
    vardas: 'Rokas',
    pavarde: 'Banaitis',
    amzius: 26,
    vedes: false,
    pomegiai: ['sportas','žaidimai','filmai','kelionės'],
    // gyvenamojiVieta0: 'Žemė Europa Lietuva Kaunas K.M. 68 12',
    gyvenamojiVieta: {
      planeta: 'Žemė',
      zemynas: 'Europa',
      salis: 'Lietuva',
      miestas: 'Kaunas',
      gatve: 'K.M.',
      pastatas: '68',
      butas: '12'
    }
  },{
    vardas: 'Petras',
    pavarde: 'Petrauskas',
    amzius: 50,
    vedes: true
  }
];
console.groupCollapsed('sudetingas');
console.log(asmenys);
console.log(asmenys[1].vardas);
console.log(asmenys[0].gyvenamojiVieta.miestas);
console.log(asmenys[0].pomegiai[2]);
asmenys[0].gyvenamojiVieta.butas = '15';
console.log(asmenys[0]);
console.groupEnd();
console.groupCollapsed('masyvas masyve');
let masyvasMasyve = ['labas', 5, true, 'haha', 10, [5,1,'hihi',3,false], false];
console.log(masyvasMasyve, masyvasMasyve[2]);
console.log(masyvasMasyve[5]);
console.log(masyvasMasyve[5][2]);
console.groupEnd();

/*                Sąlygos (condition)
    Loginiai operatoriai

      NOT - !  - apverčia reikšmę
      OR  - || - ARBA nusako, kad arba vienoje pusėje tiesa arba kitoje, kad grąžintų tiesą
      AND - && - IR nusako, kad ir vienoje ir kitoje pusėje turi būti tiesa, kad grąžintų tiesą

    Sąlygos
      if else_if else
        Pirmasis visada if, paskutinis visada else (nebūtinas), per vidurį kiek norime else_if'ų.
        Kai sąlyga yra tiesa - vykdomas jos viduje esantis kodas ir netikrinamos tolimesnės sąlygos.
        Sąlygos ribose galima rašyti kokį nori kodą.
      switch
      ternary

      Truthy ir Falsy - reikšmės grąžins tiesą arba melą kai bus įdėtos į sąlygos vidų
            Truthy        |    Falsy
      skaičiai apart 0    |      0
      netuščias string    |  tuščias string
           masyvas        |     null
          objektas        |  undefined
          funkcija        |     NaN
*/

console.groupCollapsed('loginiai operatoriai');
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
console.groupEnd();

console.groupCollapsed('if elseIf else');
let amzius = 5;
if(amzius >= 18 && amzius < 65){
  console.log('darbingo amžiaus');
} else if(amzius < 18 && amzius >= 0){
  console.log('nepilnametis');
  if(amzius >= 7){
    console.log('mokyklinukas');
  } else {
    console.log('iki mokyklinio amžiaus');
  }
} else if(amzius >= 65){
  console.log('pensijinio amžiaus');
} else {
  console.log('klaida');
}
console.log('toliau einantis kodas');
console.groupEnd();

console.groupCollapsed('truthy falsy');
if(''){
  console.log('tiesa');
} else {
  console.log('melas');
}
console.groupEnd();

/* Sąlygų užduotys */

/* 1 */
  // 4
let objektasMasyve = [{},{},{}];
  // 5
let masyvasObjekte = {
  ziema: ['Gruodis', 'Sausis', 'Vasaris'],
  pavasaris: []
}
  // 6
let objektasObjekte = {
  vardas: 'Rokas',
  lokacija: {
    
  },
  hobiai: []
}



/* 3 */
let turiVairuotojoTeises = 'Turiu';
let turiAutomobili = 'Turiu';
let arBlaivas = 'Taip';
if(turiVairuotojoTeises === 'Turiu'){
  console.log('Turi vairuotojo teises!');
  if(turiAutomobili === 'Turiu' && arBlaivas === 'Taip'){
    console.log('Turi automobilį ir esi blaivas.');
  } else if(turiAutomobili === 'Neturi' && arBlaivas === 'Taip'){
    console.log('Neturi automobilio, bet esi blaivas.');
  } else if(turiAutomobili === 'Neturi' && arBlaivas === 'Ne'){
    console.log('Neturi automobilio ir nesi blaivas.');
  } else if(turiAutomobili === 'Turiu' && arBlaivas === 'Ne'){
    console.log('Turi automobilio, bet nesi blaivas.');
  } else {
    console.log('Neteisinga įvestis');
  }
} else if(turiVairuotojoTeises === 'Neturiu'){
  console.log('Negali vairuoti');
} else {
  console.log('Neteisinga įvestis');
}

/* 5 */
let objektasAsmuo = {
  vardas: prompt('koks tavo vardas?'),
  pavarde: "Banaitis",
  amzius:26,
  lytis:"vyras"
};

/* 6 */
let menuo = 'Balandis';
if(menuo === 'Kovas' || menuo === 'Balandis' || menuo === 'Gegužė'){
  console.log('Pavasaris');
}
switch(menuo){
  case "Kovas":
  case "Balandis":
  case 'Gegužė':
    console.log('Pavasaris');
    break;
}

// let menuo = 2;
// if(menuo <= 0){
//   console.log('Tokio mėnesio nėra');
// } else if(menuo < 3 || menuo === 12){
//   console.log('Žiema');
// }
// switch(menuo){
//   case 12:
//   case 1:
//   case 2:
//     console.log('Žiema');
//     break;
//   default:
//     console.log('Tokio mėnesio nėra');
// }