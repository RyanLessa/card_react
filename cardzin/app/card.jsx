"use-client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import './card.css';

export default function Card () {
  const router = useRouter();

  const goToDescription = () => {
    router.push('/about');
  };

    return (
        <div className="card" id="my-card">
            <Image src="/ryan.jpg" alt="Foto de ryan" width={100} height={100} className='card-image'/>
            <h1>Nome</h1>
            <p>Descrição muito bem detalhada</p>
            <button onClick={goToDescription}>Ver descrição</button>
        </div>
    );
}