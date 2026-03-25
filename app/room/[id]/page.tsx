'use client';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function Room() {
  const { id } = useParams();
  const router = useRouter();
  const [msgs, setMsgs] = useState<{t: string, s: string}[]>([]);
  const [val, setVal] = useState('');

  const send = (e: any) => {
    e.preventDefault();
    if(!val) return;
    setMsgs([...msgs, {t: val, s: 'Я'}]);
    setVal('');
  };

  return (
    <div className="h-screen flex flex-col bg-[#424242]">
      <div className="bg-black text-yellow-400 p-4 flex justify-between items-center">
        <span className="font-bold text-xl uppercase">ROOM: {id}</span>
        <button onClick={() => router.push('/')} className="bg-white text-black px-3 py-1 font-bold">EXIT</button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
        {msgs.map((m, i) => (
          <div key={i} className="bg-white text-black p-3 self-start max-w-[90%] border-l-8 border-yellow-400">
            <div className="text-[10px] font-black uppercase mb-1">{m.s}</div>
            <div className="text-lg font-bold leading-tight">{m.t}</div>
          </div>
        ))}
      </div>

      <form onSubmit={send} className="p-4 bg-black flex gap-2">
        <input 
          value={val} 
          onChange={(e) => setVal(e.target.value)}
          placeholder="СООБЩЕНИЕ..."
          className="flex-1 bg-[#424242] text-white p-4 border-none"
        />
        <button className="bg-yellow-400 text-black px-6 font-black text-2xl"> {'>'} </button>
      </form>
    </div>
  );
}
