import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl mb-4">Bienvenue sur la page d&apos;accueil</h1>
      <Image
        src="/react.jpg"
        alt="Une belle image"
        width={800}
        height={600}
        priority
        className="rounded-lg shadow-lg"
      />
    </div>
  );
}
