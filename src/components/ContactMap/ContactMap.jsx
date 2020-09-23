import React from "react";
import { ReactBingmaps } from "react-bingmaps";
import "./ContactMap.css";

export default ContactMap => (
  <div id="contact" className="form-2">
    <ReactBingmaps
      zoom={18}
      bingmapKey="AnzqHklo_lvZR_czqcvXPo-hrYNQ6qElpbIAOWL0U6fgDrJxdvdKazPtBPlFklpu"
      center={[-19.9187872, -43.9414561]}
    />
    <div className="contactMap">
      <div className="row">
        <div className="col-lg-12">
          <ul className="list-unstyled li-space-lg">
            <li>
              <i className="fas fa-map-marker-alt"></i>
              {ContactMap.adress}
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <a className="green">{ContactMap.phone}</a>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <a className="green">{ContactMap.mail}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <form id="contactForm" data-toggle="validator" data-focus="false">
            <div className="form-group">
              <input
                type="text"
                className="form-control-input"
                id="cname"
                required
              />
              <label className="label-control" for="cname">
                Nome
              </label>
              <div className="help-block with-errors"></div>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control-input"
                id="cemail"
                required
              />
              <label className="label-control" for="cemail">
                Email
              </label>
              <div className="help-block with-errors"></div>
            </div>
            <div className="form-group">
              <textarea
                className="form-control-textarea"
                id="cmessage"
                required
              ></textarea>
              <label className="label-control" for="cmessage">
                Sua menssagem
              </label>
              <div className="help-block with-errors"></div>
            </div>
            <div className="form-group checkbox">
              <input
                type="checkbox"
                id="cterms"
                value="Agreed-to-Terms"
                required
              />
              Eu concordo com os termos e politicas de privacidade de Laerte
              Silva.<a href="privacy-policy.html">Privacy Policy</a> and{" "}
              <a href="terms-conditions.html">Terms Conditions</a>
              <div className="help-block with-errors"></div>
            </div>
            <div className="form-group">
              <button type="submit" className="form-control-submit-button">
                ENVIAR MENSSAGEM
              </button>
            </div>
            <div className="form-message">
              <div id="cmsgSubmit" className="h3 text-center hidden"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);
