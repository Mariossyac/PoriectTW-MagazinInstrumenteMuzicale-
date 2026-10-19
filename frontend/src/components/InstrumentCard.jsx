// frontend/src/components/InstrumentCard.jsx

const ETICHETE_CATEGORIE = {
  corzi: "Instrument cu corzi",
  clape: "Claviaturi & Piane",
  percutie: "Percuție & Tobe",
  suflat: "Instrument de suflat"
};

export default function InstrumentCard({ instrument }) {
  return (
    <li className={instrument.inStoc ? "instrument-card" : "instrument-card done"}>
      <div className="card-info">
        <h3>{instrument.nume}</h3>
        <div className="card-badges">
          {instrument.categorie && (
            <span className={`badge badge-${instrument.categorie}`}>
              {ETICHETE_CATEGORIE[instrument.categorie] || instrument.categorie}
            </span>
          )}
          <span className="price-badge">{instrument.pret} RON</span>
        </div>
      </div>

      <span className={`status ${instrument.inStoc ? "status-activ" : "status-epuizat"}`}>
        {instrument.inStoc ? "În stoc" : "Stoc epuizat"}
      </span>
    </li>
  );
}