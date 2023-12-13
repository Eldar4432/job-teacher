/* eslint-disable react/jsx-filename-extension */
import React from "react";

import Fade from "react-reveal/Fade";

import Team from "../../assets/images/team.png";
import { useTranslation } from "react-i18next";


export default function HeroTeam() {
  const { t } = useTranslation();

  
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row">
      <Fade bottom>
        <div className="w-full sm:w-1/2 flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
          <h1 className="text-6xl text-theme-blue font-bold leading-tight mb-5">
          {t("job")}
          </h1>
          <p className="font-light text-xl text-gray-700 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            dicta excepturi quia inventore, quis cum obcaecati eius tenetur
            magni. Temporibus illo doloremque magnam deserunt officia incidunt
            excepturi quisquam corporis inventore.
          </p>
        </div>
        <div className="w-full sm:w-1/2 sm:pr-12">
          <img src={Team} alt="Hero" />
        </div>
      </Fade>
    </section>
  );
}
