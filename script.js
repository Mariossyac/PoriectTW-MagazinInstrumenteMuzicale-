const instrumente = [
  { id: 1, nume: "Chitară Acustică Yamaha", inStoc: true, categorie: "coarde" },
  { id: 2, nume: "Pian Digital Roland", inStoc: false, categorie: "clape" },
  { id: 3, nume: "Set Tobe Pearl", inStoc: true, categorie: "percutie" }
];

const CATEGORII = ["coarde", "clape", "percutie", "suflatori"];

function listeazaNume(lista) {
  return lista.map((i) => i.nume);
}

function numaraInStoc(lista) {
  return lista.filter((i) => i.inStoc).length;
}

function cautaDupaNume(lista, text) {
  return lista.filter((i) => i.nume.toLowerCase().includes(text.toLowerCase()));
}

function nextId(lista) {
  return lista.reduce((max, i) => Math.max(max, i.id), 0) + 1;
}

function adaugaInstrument(lista, nume, categorie) {
  const numeCurat = nume.trim();
  
  if (numeCurat === "") {
    console.log("Numele nu poate fi gol!");
    return lista;
  }
  
  if (!CATEGORII.includes(categorie)) {
    console.log("Categorie invalidă:", categorie);
    return lista;
  }
  
  const nou = {
    id: nextId(lista),
    nume: numeCurat,
    inStoc: true,
    categorie: categorie
  };
  
  return [...lista, nou];
}

function comutaStoc(lista, id) {
  return lista.map((i) => i.id === id ? { ...i, inStoc: !i.inStoc } : i);
}

function stergeInstrument(lista, id) {
  return lista.filter((i) => i.id !== id);
}

console.log("--- Citire ---");
console.log("Instrumente:", listeazaNume(instrumente).join(", "));
console.log("În stoc:", numaraInStoc(instrumente));
console.log("Căutare 'yamaha':", listeazaNume(cautaDupaNume(instrumente, "yamaha")).join(", "));

console.log("--- Adăugare ---");
let lista = adaugaInstrument(instrumente, "Saxofon Alto", "suflatori");
console.log("Lista nouă:", lista.length, "instrumente");
console.log("Originalul a rămas cu:", instrumente.length, "instrumente");

console.log("--- Modificare și ștergere ---");
lista = comutaStoc(lista, 1);
console.log("După schimbare stoc id 1, în stoc:", numaraInStoc(lista));
lista = stergeInstrument(lista, 3);
console.log("După ștergerea id 3:", listeazaNume(lista).join(", "));

console.log("--- Validare ---");
adaugaInstrument(lista, "   ", "clape");
adaugaInstrument(lista, "Vioară", "altceva");