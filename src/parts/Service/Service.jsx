/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from "react";

import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";

export default function Service({ data }) {
  const { t } = useTranslation();

  return (
    <div>
      <div className="container mx-auto pt-6 pb-10">
        <Fade bottom>
          <h1 className="text-5xl text-theme-blue text-center font-bold">
            {t("h1Service")}
          </h1>

          <p className="font-light text-lg text-gray-400 text-center mb-12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, quos?
          </p>
        </Fade>

        <div className="grid grid-rows-3 px-10 gap-8 sm:grid-cols-3 sm:grid-rows-1 sm:gap-6 xl:gap-16">
          {data.map((item, index) => (
            <Fade bottom delay={15 * index}>
              <div>
                <div className="bg-white group rounded-2xl shadow-2xl border border-light-theme-purple transform transition duration-500 hover:scale-105">
                  {/* <img
                    src={item.imageUrl}
                    alt="Service"
                    className="w-full rounded-t-2xl"
                  /> */}
                  <h2 className="cursor-pointer text-theme-blue text-center text-xl py-2 rounded-b-2xl">
                    {item.school}
                  </h2>
                  <h2 className="text-theme-blue text-center text-xl py-2 rounded-b-2xl">
                    {item.title}
                  </h2>
                  <h2 className="text-theme-blue text-center text-xl py-2 rounded-b-2xl">
                    {item.salary} с
                  </h2>
                  <h2 className="text-theme-blue text-center text-xl py-2 rounded-b-2xl">
                    {item.city}
                  </h2>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}