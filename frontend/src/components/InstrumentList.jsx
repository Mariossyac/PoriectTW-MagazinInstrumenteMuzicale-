// frontend/src/components/InstrumentList.jsx
import InstrumentCard from "./InstrumentCard.jsx";

export default function InstrumentList({ instrumente }) {
  if (instrumente.length === 0) {
    return <p className="empty">Nu există niciun instrument în catalog.</p>;
  }

  return (
    <ul className="instrument-list">
      {instrumente.map((instrument) => (
        <InstrumentCard key={instrument.id} instrument={instrument} />
      ))}
    </ul>
  );
}