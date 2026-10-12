const instrumente = [
  { id: 1, nume: "Chitară Acustică Yamaha", inStoc: true, pret: 1200 },
  { id: 2, nume: "Pian Digital Roland", inStoc: false, pret: 4500 },
  { id: 3, nume: "Set Tobe Pearl", inStoc: true, pret: 3200 }
];

export default function App() {
  const instrumenteDisponibile = instrumente.filter((inst) => inst.inStoc).length;

  return (
    <>
      <header>
        <div className="logo">Armonico<span>.</span></div>
        <nav>
          <ul>
            <li>
              Avem {instrumente.length} instrumente, dintre care {instrumenteDisponibile} în stoc.
            </li>
          </ul>
        </nav>
      </header>

      <main className="magazin-container">
        <h2 className="sectiune-titlu">Lista Instrumentelor</h2>
        
        {/* Afișarea temporară a datelor */}
        <div className="card-produs" style={{ padding: '20px', textAlign: 'left' }}>
           <pre>{JSON.stringify(instrumente, null, 2)}</pre>
        </div>
      </main>
    </>
  );
}