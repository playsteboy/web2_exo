import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Part11() {
  return (
    <div>
      <section className="bgc_blue h-100 py-20 flex justify-around items-cente gap-10 pb-30">
        <div className="color_white text-xl leading-normal">
          <img
            src="https://hei.school/wp-content/uploads/2022/09/cropped-Logo-e1662790239183.png"
            alt=""
            className="pb-5 w-20"
          />
          <p>Formation habilitée </p>
          <p>par l’Etat suivant</p>
          <p className="pb-4">le système LMD</p>
          <p>Habilitation MESupRes</p>
          <p>n°31309/2023</p>
        </div>
        <div className="color_white text-xl leading-loose pt-20">
          <h1 className="text-2xl text-white">Adresse</h1>
          <p>II J 161 R Ambodivoanjo</p>
          <p>Ivandry, Antananarivo</p>
        </div>
        <div className="color_white text-xl leading-loose pt-20">
          <h1 className="text-2xl text-white">Navigation</h1>
          <p className="color_yellow">Acceuil</p>
          <p>Actualités</p>
          <p>Bourse d'études</p>
          <p>Inscription</p>
        </div>
        <div className="color_white text-xl leading-relaxed pt-20">
          <h1 className="text-2xl text-white">Réseaux sociaux</h1>
          <div className="flex gap-4 mt-4 text-white text-2xl ">
            <FaFacebookF className="rounded-full bgc_yellow px-2 py-2 text-4xl"/>
            <FaLinkedinIn className="rounded-full bgc_yellow px-2 py-2 text-4xl"/>
            <FaInstagram className="rounded-full bgc_yellow px-2 py-2 text-4xl"/>
          </div>
        </div>
      </section>
      <section className="pl-96 ml-96 text-xl  text-gray-500">
        <h1>© HEI Madagascar</h1>
      </section>
    </div>
  );
}
