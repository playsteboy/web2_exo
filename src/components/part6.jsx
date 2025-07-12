import React from "react";

export default function Part6() {
  return (

        <section className="bgc_blue_sky py-12 px-4 text-white text-center w-full h-screen  ">
          <h1 className="text-5xl font-bold mb-4">Admission</h1>
          <p className="max-w-3xl  mx-auto text-xl mb-12 ">
            Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se fait par test de niveau :
            une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D.
          </p>
    
          <div className="flex flex-col md:flex-row max-w-6xl mx-auto text-black h-80">
            
            <div className="flex-1 bg-[#edd7bf] p-6 relative">
              <h1 className="text-5xl font-bold text-white mb-2">01</h1>
              <p className="color_blue text-xl">
                <span className="font-bold ">Dépôt de dossiers :</span> pour les bacheliers de toutes séries sans limite d’âge
              </p>
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden md:block">
                <span className="text-5xl text-white">→</span>
              </div>
            </div>
    
            <div className="flex-1 bg-[#ddc7a4] p-6 relative">
              <h1 className="text-5xl font-bold text-white mb-2">02</h1>
              <p className="color_blue text-xl">
                <span className="font-bold ">Test de niveau :</span> composé d’une épreuve de français niveau B2 et d’une
                épreuve de mathématiques niveau Terminale D
              </p>
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden md:block">
                <span className="text-5xl text-white">→</span>
              </div>
            </div>
    
            <div className="flex-1 bg-[#e7cc91] p-6">
              <h1 className="text-5xl font-bold text-white mb-2">03</h1>
              <p className="color_blue text-xl">
                <span className="font-bold ">Inscription définitive</span> (si test réussi)
              </p>
            </div>
          </div>
    
          <div className="flex flex-col md:flex-row justify-center mt-10 gap-4">
            <button className="border border-white px-6 py-2 text-white hover:bg-white hover:text-blue-500 transition text-xl">
              Inscrivez-vous ici
            </button>
            <button className="bgc_blue px-6 py-2 text-white hover:bg-blue-700 transition text-xl">
              Résultat concours
            </button>
          </div>
        </section>
  );
}
