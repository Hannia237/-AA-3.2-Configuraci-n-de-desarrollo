import React, { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-6 text-center space-y-4 border border-slate-200">
        <h1 className="text-2xl font-bold text-indigo-600">Control de Estilos y Estado</h1>
        <p className="text-slate-500 text-sm">Si ves este recuadro estilizado, Tailwind cargó correctamente.</p>
        <div className="bg-indigo-50 rounded-xl p-4"><span className="text-4xl font-black text-slate-800">{contador}</span></div>
        <button onClick={() => setContador(contador + 1)} className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md active:scale-95">
          Completar Toma ⭐
        </button>
      </div>
    </div>
  );
}
export default App;