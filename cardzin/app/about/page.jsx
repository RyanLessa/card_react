"use client";
import { useRouter } from 'next/navigation';

export default function About() {
  const router = useRouter();

  const goToHome = () => {
    router.push('/');
  };

  return (
    <div id="about-page">
      <h1>Sobre mim</h1>
      <p>Sou um desenvolvedor apaixonado por tecnologia, jogos e rock'n roll. Estudo na ETE Porto Digital e sou conhecido por ser introvertido, preferindo passar a maior parte do meu tempo no computador. Gosto de conversar mais pela internet e saio apenas para casos específicos, como ir ao cinema, à praia ou para um rolê com os amigos.</p>

      <button onClick={goToHome}>Voltar</button>
    </div>
  );
}