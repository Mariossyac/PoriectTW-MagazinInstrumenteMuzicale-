// frontend/src/App.jsx
import "./App.css";
import InstrumentList from "./components/InstrumentList.jsx";

const instrumente = [
  {
    id: 1,
    nume: "Chitară Acustică Yamaha",
    categorie: "corzi",
    inStoc: true,
    pret: 1200
  },
  {
    id: 2,
    nume: "Pian Digital Roland",
    categorie: "clape",
    inStoc: false,
    pret: 4500
  },
  {
    id: 3,
    nume: "Set Tobe Acustice Pearl",
    categorie: "percutie",
    inStoc: true,
    pret: 3800
  }
];

export default function App() {
  const total = instrumente.length;
  const active = instrumente.filter((i) => i.inStoc).length;

  return (
    <div className="app-wrapper">
      <header className="navbar">
        <h1 className="logo">
          ARMONICO<span className="dot">.</span>
        </h1>
        <p className="header-stats">
          Avem {total} instrumente, dintre care {active} în stoc.
        </p>
      </header>

      <main className="main-container">
        <section className="panel">
          <h2 className="panel-title">Catalogul de instrumente</h2>
          {/* AICI am scos <pre>{JSON.stringify(...)}</pre> și am pus componenta: */}
          <InstrumentList instrumente={instrumente} />
        </section>
      </main>
    </div>
  );
}