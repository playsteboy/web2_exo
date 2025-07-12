import React from "react";
export default function Part5() {
  return (
    <div className="w-full h-screen color_blue bg-neutral-100 text-center font-semibold flex flex-col gap-5">
      <section className="h-1/6 flex flex-col gap-5">
        <h1 className="text-5xl font-semibold pt-14">Domaines</h1>
        <p>
          Au cours de vos trois ans de formation, naviguez entre les domaines
          les plus porteurs du numérique du présent et de l’avenir :
        </p>
      </section>
      <section className="w-full h-5/6 flex flex-row items-center justify-center gap-6 text-center">
        <div className="w-1/4 h-5/6 flex flex-col items-center bg-white rounded-2xl p-5 gap-5">
          <img
            src="https://hei.school/wp-content/uploads/2024/05/Cloud-et-cybersecurite_Plan-de-travail-1-150x150.png"
            alt=""
          />
          <h1 className="color_yellow font-bold text-xl">
            Cloud et cybersecurite
          </h1>
          <p>
            Maîtrisez les engrenages des outils en ligne interconnectés sur les
            nuages (comme sur AWS). Ou encore, devenez maître de la sécurisation
            des données en ligne ou des programmes et applications contre les
            cybermenaces. Chez HEI, vous allez vous former dans le domaine du
            cloud et de la cybersécurité.
          </p>
        </div>
        <div className="w-1/4 h-5/6 flex flex-col items-center bg-white rounded-2xl p-5 gap-5">
          <img
            src="https://hei.school/wp-content/uploads/2024/05/Intelligence-artificielle_Plan-de-travail-1-150x150.png"
            alt=""
          />
          <h1 className="color_yellow font-bold text-xl">
            Intelligence artificielle
          </h1>
          <p>
            Le monde de la reconnaissance faciale ou la détection d’obstacles
            par les voitures semi-autonomes vous fascinent ? Ce n’est pas
            sorcier, cela s’apprend. Apprenez les bases de l’intelligence
            artificielle lors de vos cours chez HEI.
          </p>
        </div>
        <div className="w-1/4 h-5/6 flex flex-col items-center bg-white rounded-2xl p-5 gap-5">
          <img
            src="https://hei.school/wp-content/uploads/2024/05/Ingenierie-logicielle_Plan-de-travail-1-1-150x150.png"
            alt=""
          />
          <h1 className="color_yellow font-bold text-xl">
            Ingenerie logicielle
          </h1>
          <p>
            Apprenez les principes de la conception ou le développement de
            programmes et d’applications web et mobile et explorez le monde
            fascinant des “codes”. A la fin de votre formation, vous serez aptes
            à proposer des solutions pratiques, créatives et innovantes à des
            particuliers ou des entreprises pour leurs besoins numériques.
          </p>
        </div>
      </section>
    </div>
  );
}
