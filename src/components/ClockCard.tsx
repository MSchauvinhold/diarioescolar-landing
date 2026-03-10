import LiveClock from './LiveClock';

export default function ClockCard() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 border-t-4 border-[#2B6389]">
      <h3 className="text-xs font-semibold text-gray-900 mb-3 uppercase tracking-wide text-center">
        Paso de los Libres, Corrientes
      </h3>
      <div className="text-center">
        <LiveClock />
      </div>
    </div>
  );
}