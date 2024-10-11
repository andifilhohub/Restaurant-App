import React, { useState } from "react";
import "./LoginSignUp.css";

import user_icon from "../Assets/person.png";
import password_icon from "../Assets/password.png";
import email_icon from "../Assets/email.png";

const LoginSignUp = ({ onLogin }) => {
  const [action, setAction] = useState("Registrar-se");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <img src={user_icon} alt="user_icon" />
            <input type="text" placeholder="Nome" />
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="email_icon" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="password_icon" />
          <input type="password" placeholder="Senha" />
        </div>
      </div>
      {action === "Registrar-se" ? null : (
        <div className="forgot-password">
          Lost Password? <span>Click Here</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Logar" ? "submit gray" : "submit"}
          onClick={() => setAction("Registrar-se")}
        >
          Registrar-se
        </div>
        <div
          className={action === "Registrar-se" ? "submit gray" : "submit"}
          onClick={() => {
            if (action === "Login") {
              onLogin(); // Chama a função onLogin quando o botão de login for clicado
            } else {
              setAction("Login");
            }
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
