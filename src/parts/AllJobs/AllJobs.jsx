import React from "react";
import Form from "../../elements/Form";
import { useTranslation } from "react-i18next";


export default function AllTeam({ data }) {
  const { t } = useTranslation();

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };
  return (
    <section className="container mx-0 sm:mx-auto">
      {/* <Fade bottom> */}
      <Form  placeholder={t("placeholder")} />

      <div className="grid grid-rows-6 px-10 gap-8 sm:grid-cols-3 sm:grid-rows-1 sm:gap-6 xl:gap-16">
        {data.map((item, index) => (
            <div>
              <div className="bg-white group rounded-2xl shadow-2xl border border-light-theme-purple transform transition duration-500 hover:scale-105">
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
        ))}
      </div>
      {/* </Fade> */}
    </section>
  );
}