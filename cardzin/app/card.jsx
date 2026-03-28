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
            <h1>Ryan Lima Lessa</h1>
            <p>Sou desenvolvedor, estudante da ETE Porto Digital. Entusiasta de jogos, rock'n roll e tecnologia, introvertido. Geralmente passo a maior parte do meu tempo no computador, conversando mais pela internet, saindo apenas para casos bem específicos, ir no cinema, praia, ou rolê com os amigos. </p>
            <button onClick={goToDescription}>Ver descrição</button>
        </div>
    );
}