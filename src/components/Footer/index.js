import React from 'react';

import './styles.css';

import celular from '../../assets/images/celular.svg';
import appStore from '../../assets/images/app-store.svg';
import appWeb from '../../assets/images/app-web.svg';
import googlePlay from '../../assets/images/google-play.svg';

export default function Footer() {
  return(
    <div className="footer-default">
      <div className="info-title">
        <h1>Mais</h1>
        <span>Informações</span>
      </div>

      <div className="content-footer">
        <div className="info">
          <div className="corona-sus">
            <strong>CORONAVÍRUS</strong>
            <span>SUS</span>
          </div>

          <h1>Fique informado</h1>

          <p>
            Faça uma auto-avaliação da sua saúde, acompanhe dicas oficiais do Ministério da Saúde,
            últimas notícias e encontre unidades de saúde próximas.
          </p>

          <div className="available-in">

            <div className="box">
              <img src={googlePlay} alt=""/>
              <div>
                <span>DISPONÍVEL NO</span>
                <strong>Google Play</strong>
              </div>
            </div>

            <div className="box">
              <img src={appStore} alt=""/>
              <div>
                <span>DISPONÍVEL NO</span>
                <strong>App Store</strong>
              </div>
            </div>

            <div className="box">
              <img src={appWeb} alt=""/>
              <div>
                <span>DISPONÍVEL NO</span>
                <strong>Web App</strong>
              </div>
            </div>

          </div>
          
        </div>
        <div className="image-content">
          <img src={celular} alt="Celular"/>
        </div>
      </div>
    </div>
  );
}