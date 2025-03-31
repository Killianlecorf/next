"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function NotFound() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("https://lottie.host/6f4ee854-3625-4849-8985-e423a0752949/hZWZsrb0zk.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Erreur de chargement de l'animation :", error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-red-500">Erreur 404</h1>
      <p className="text-lg text-gray-600 mb-4">La page que vous cherchez n&apos;existe pas.</p>
      {animationData ? (
        <Lottie animationData={animationData} className="w-64 h-64" loop />
      ) : (
        <p>Chargement de l&apos;animation...</p>
      )}
    </div>
  );
}
