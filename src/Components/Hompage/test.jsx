import React, { useEffect } from "react";
import { gsap } from "gsap";

const AnimatedLines = () => {
  useEffect(() => {
    const lines = document.querySelectorAll(".line");

    // Fonction pour animer les lignes
    const animateLines = () => {
      gsap.to(lines, {
        y: -100, // Déplacez les lignes vers le haut de 100px (ajustez selon vos besoins)
        stagger: 0.2, // Décalage entre les animations de chaque ligne
        duration: 0.5, // Durée de l'animation
        onComplete: () => {
          // Réinitialisez les lignes à leur position d'origine
          gsap.set(lines, { y: 0 });
        },
      });
    };

    // Ajoutez un écouteur d'événement de défilement pour déclencher l'animation
    window.addEventListener("scroll", animateLines);

    // Nettoyez l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", animateLines);
    };
  }, []);

  return (
    <div className="lines-container ml-12">
      {/* Créez autant de lignes que nécessaire */}
      {/* <div className=" bg-C22E2E w-1 h-96"></div> */}
      {/* ... */}
    </div>
  );
};

export default AnimatedLines;
