import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import firulaLogo from '../../assets/images/firula-logo.png';

export default function Toolbar() {

  const [ selected, setSelected ] = useState(localStorage.getItem("selected") ? localStorage.getItem("selected") : "painel");

  function handleSelected(name) {
    localStorage.removeItem("selected");
    document.getElementById(selected).classList.remove("selected");
    localStorage.setItem("selected", name);
  }

  return (
    <div className="toolbar">
      <div className="logo-content">
        <h1>CORONAVÍRUS</h1>
        <img src={firulaLogo} alt="Logo covid saude"/>
        <span>BRASIL</span>
      </div>

      <div className="buttons-content">
        <button type="button">
          {selected == "painel"
            ? <Link to="/" className="selected" id="painel" onClick={() => handleSelected("painel")}>Painel Geral</Link>
            : <Link to="/" id="painel" onClick={() => handleSelected("painel")}>Painel Geral</Link>
          }
        </button>
        <button type="button">
          {selected == "srag"
            ? <Link to="/srag" className="selected" id="srag" onClick={() => handleSelected("srag")}>SRAG</Link>
            : <Link to="/srag" id="srag" onClick={() => handleSelected("srag")}>SRAG</Link>
          }
        </button>
        <button type="button">
          Painel Interativo
        </button>
        <button type="button">
          OpenDATASUS
        </button>
        <button type="button">
          {selected == "sobre"
            ? <Link to="/sobre" className="selected" id="sobre" onClick={() => handleSelected("sobre")}>Sobre</Link>
            : <Link to="/sobre" id="sobre" onClick={() => handleSelected("sobre")}>Sobre</Link>
          }
        </button>
      </div>
    </div>
  );
}