"use client";

import { useRouter } from 'next/navigation';
import './page.css';

export default function Home() {
  const router = useRouter();

  const goToDescription = () => {
    router.push('/about');
  };

  return (
    <div>
        <div className="card">
            <h1>Foto de ryan</h1>
            <h1>Nome</h1>
            <p>Descrição muito bem detalhada</p>
            <button onClick={goToDescription}>Ver descrição</button>
        </div>
    </div>
  );
}