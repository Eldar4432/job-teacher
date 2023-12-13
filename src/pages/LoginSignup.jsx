import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../assets/images/free-icon-user-profile-4803050.png";
import email_icon from "../assets/images/free-icon-mail-3980138.png";
import password_icon from "../assets/images/free-icon-lock-8472244.png";
import Header from "../parts/Header/Header";
import Footer from "../parts/Footer/Footer";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";

const LoginSignup = () => {
  const { t } = useTranslation();

  const [action, setAction] = useState("Login");

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (action === "Login") {
      console.log("Login:", formData);
    } else {
      console.log("Sign Up:", formData);
    }
  };

  return (
    <>
      <Header />
      <Fade bottom>
        <div className="login_container">
          <div className="login_header">
            <div className="login_text">{action}</div>
            <div className="login_underline"></div>
          </div>
          <div className="login_inputs">
            {action === "Login" ? (
              <div></div>
            ) : (
              <div className="login_input">
                <img src={user_icon} alt="" srcset="" />
                <input type="text" placeholder="Name" />
              </div>
              
            )}

            <div className="login_input">
              <img src={email_icon} alt="" srcset="" />
              <input type="email" placeholder="Email Id" />
            </div>
            
            <div className="login_input">
              <img src={password_icon} alt="" srcset="" />
              <input type="password" placeholder="Password" />
            </div>
          </div>
          <div className="login_submit_button_container">
          <div className="login_submit_button" onClick={handleSubmit}>
            Submit
          </div>
          </div>

          {action === "Sign Up" ? (
            <div></div>
          ) : (
            <div className="login_forgot_password">
              {t("forgotLogin")} <span>{t("clickForgot")}</span>
            </div>
          )}

          <div className="login_submit_container">
            <div
              className={
                action === "Login" ? "login_submit login_gray" : "login_submit"
              }
              onClick={() => {
                setAction("Sign Up");
              }}
            >
              Sign Up
            </div>
            <div
              className={
                action === "Sign Up"
                  ? "login_submit login_gray"
                  : "login_submit"
              }
              onClick={() => {
                setAction("Login");
              }}
            >
              Login
            </div>
          </div>
        </div>
      </Fade>
      <Footer />
    </>
  );
};

export default LoginSignup;
