
import React from 'react';
import ReactDOM from 'react-dom';
import './LoginBox.css';
import './LoginBox.js';
import $ from 'jquery';

class LoginBox extends React.Component {
  componentDidMount() {
    $(".email-signup").hide();
    $("#signup-box-link").click(function(){
    $(".email-login").fadeOut(100);
    $(".email-signup").delay(100).fadeIn(100);
    $("#login-box-link").removeClass("active");
    $("#signup-box-link").addClass("active");
    });
    $("#login-box-link").click(function(){
    $(".email-login").delay(100).fadeIn(100);;
    $(".email-signup").fadeOut(100);
    $("#login-box-link").addClass("active");
    $("#signup-box-link").removeClass("active");
    });
  }
  render() {
    return (
      <div class="login-box">
      <div class="lb-header">
        <a onclick={LoginBox.loginOnClick} class="active" id="login-box-link">Entrar</a>
        <a onclick={LoginBox.signUpOnClick} id="signup-box-link">Cadastro</a>
      </div>
      <div class="social-login">
        <a onclick={LoginBox.facebookOnClick}>
          <i class="fa fa-facebook fa-lg"></i>
          Entrar com Facebook
        </a>
        <a onclick={LoginBox.googleOnClick}>
          <i class="fa fa-google-plus fa-lg"></i>
          Entrar com o Google
        </a>
      </div>
      <form class="email-login">
        <div class="u-form-group">
          <input type="email" placeholder="Email"/>
        </div>
        <div class="u-form-group">
          <input type="password" placeholder="Password"/>
        </div>
        <div class="u-form-group">
          <button>Entrar</button>
        </div>
        <div class="u-form-group">
          <a onclick={LoginBox.forgotPasswordOnCLick} class="forgot-password">Esqueceu a senha?</a>
        </div>
      </form>
      <form class="email-signup">
        <div class="u-form-group">
          <input type="email" placeholder="Email"/>
        </div>
        <div class="u-form-group">
          <input type="password" placeholder="Password"/>
        </div>
        <div class="u-form-group">
          <input type="password" placeholder="Confirm Password"/>
        </div>
        <div class="u-form-group">
          <button>Cadastrar</button>
        </div>
      </form>
      </div>
  )
};
}

export default LoginBox;