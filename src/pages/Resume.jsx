import React, { useState } from "react";
import Header from "../parts/Header/Header";
import ResumePage from "../parts/ResumePage/ResumePage";
import Footer from "../parts/Footer/Footer";
const Resume = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <>
      <Header />
      {/* <button onClick={openModal}>ОТКРЫТЬ</button> */}
      <ResumePage />
      <Footer />
    </>
  );
};

export default Resume;
