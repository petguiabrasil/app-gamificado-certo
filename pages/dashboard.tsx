import MissaoDia from "../components/MissaoDia";

export default function Dashboard() {
  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Missão do Dia</h1>
      <MissaoDia />
    </div>
  );
}
