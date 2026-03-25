'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [code, setCode] = useState('');
  const router = useRouter();

  const join = () => { if(code) router.push(`/room/${code.toUpperCase()}`) };
  const create = () => {
    const newCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    router.push(`/room/${newCode}`);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#424242]">
      <h1 className="text-5xl font-black bg-yellow-400 text-black p-4 mb-10 uppercase">TEXT.MEET</h1>
      <div className="w-full max-w-sm flex flex-col gap-6">
        <button onClick={create} className="bg-white text-black text-xl font-bold p-5 hover:bg-yellow-400 transition-none">
          СОЗДАТЬ КОМНАТУ
        </button>
        <input 
          value={code} 
          onChange={(e) => setCode(e.target.value)}
          placeholder="КОД КОМНАТЫ"
          className="bg-black text-white p-5 text-xl border-none placeholder-gray-600"
        />
        <button onClick={join} className="bg-yellow-400 text-black text-xl font-bold p-5 transition-none">
          ВОЙТИ
        </button>
      </div>
    </main>
  );
}
