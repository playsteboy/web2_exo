import React from "react";
export default function Part4() {
  return (
    <div className="flex flex-row justify-evenly gap-2 w-full h-screen color_blue text-lg pt-10">
      <section className="w-1/2 flex flex-col gap-5 pt-24 pl-20">
        <h1 className="text-5xl font-semibold">Quelques débouchés</h1>
        <div className="flex flex-col h-full gap-10">
          <p>
            Formez-vous à une panoplie de métiers du numérique avec nous et
            venez acquérir les fondements de la programmation (qui vous servira
            pour les différents métiers) ! Ce sont des métiers porteurs, des
            métiers du présent, des métiers du futur…
          </p>
          <p>
            Développeur back end, développeur front end, développeurs mobile,
            chefs de projet, exploitants cloud, analystes cybersécurité,
            pentesters, auditeur technique SSI, auditeur organisationnel SSI,
            administrateur système et réseau, développeur de sécurité…
          </p>
        </div>
      </section>
      <section className="w-1/3">
        <img
          src="https://hei.school/wp-content/uploads/2024/11/IMG-02-e1720543344824-987x1024-1.webp"
          className="w-full h-3/4"
          alt=""
        />
      </section>
    </div>
  );
}
