import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import "./LoginBox.css";
import "./LoginBox.js";
import $ from "jquery";

import api from "../../service/api";

export default LoginBox => {
  const [logged, setLogged] = useState(false);

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    $(".email-signup").hide();
    $("#signup-box-link").click(function() {
      $(".email-login").fadeOut(100);
      $(".email-signup")
        .delay(100)
        .fadeIn(100);
      $("#login-box-link").removeClass("active");
      $("#signup-box-link").addClass("active");
    });
    $("#login-box-link").click(function() {
      $(".email-login")
        .delay(100)
        .fadeIn(100);
      $(".email-signup").fadeOut(100);
      $("#login-box-link").addClass("active");
      $("#signup-box-link").removeClass("active");
    });
  }, []);

  async function signIn() {
    try {
      const data = {
        email: signInEmail,
        password: signInPassword
      };

      const response = await api.post("auth", data);

      setLogged(true);
      console.log(response.data);
    } catch {}
  }

  async function signUp() {
    try {
      if (confirmPassword === signUpPassword) {
        const data = {
          email: signUpEmail,
          password: signUpPassword,
          name
        };
        const response = await api.post("users", data);
        console.log(response.data);
        window.alert("Cadastrado com sucesso");
        $(".email-login")
          .delay(100)
          .fadeIn(100);
        $(".email-signup").fadeOut(100);
        $("#login-box-link").addClass("active");
        $("#signup-box-link").removeClass("active");
      } else {
        window.alert("As senhas tem que ser iguais");
      }
    } catch {}
  }

  return !logged ? (
    <div class="login-box">
      <div class="lb-header">
        <a class="active" id="login-box-link">
          Entrar
        </a>
        <a id="signup-box-link">Cadastro</a>
      </div>
      <div class="social-login">
        <a href="https://laerte-backend.herokuapp.com/auth/facebook">
          <i class="fa fa-facebook fa-lg"></i>
          Entrar com Facebook
        </a>
        <a href="https://laerte-backend.herokuapp.com/auth/google">
          <i class="fa fa-google-plus fa-lg"></i>
          Entrar com o Google
        </a>
      </div>
      <form class="email-login">
        <div class="u-form-group">
          <input
            value={signInEmail}
            onChange={e => setSignInEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
        </div>
        <div class="u-form-group">
          <input
            value={signInPassword}
            onChange={e => setSignInPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </div>
        <div class="u-form-group">
          <button onClick={signIn}>Entrar</button>
        </div>
        <div class="u-form-group">
          <a onclick={LoginBox.forgotPasswordOnCLick} class="forgot-password">
            Esqueceu a senha?
          </a>
        </div>
      </form>
      <form class="email-signup">
        <div class="u-form-group">
          <input
            value={name}
            maxLength={40}
            onChange={e => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
        </div>
        <div class="u-form-group">
          <input
            value={signUpEmail}
            onChange={e => setSignUpEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
        </div>
        <div class="u-form-group">
          <input
            value={signUpPassword}
            onChange={e => setSignUpPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </div>
        <div class="u-form-group">
          <input
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <div class="u-form-group">
          <button onClick={signUp}>Cadastrar</button>
        </div>
      </form>
    </div>
  ) : (
    <Redirect to="/" />
  );
};
