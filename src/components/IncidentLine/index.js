import React from 'react';

import './styles.css';

import { FaAngleDown } from 'react-icons/fa';


import firulaLogo from '../../assets/images/firula-logo.png';

export default function IncidentLine(props) {
  return (
    <div className="line-table">

      <div className="specific-region">
        <button>
          <FaAngleDown size={15} color="#1DA584"/>
        </button>
        <strong>{props.name}</strong>
      </div>

      <div className="grid-column-in-line-table" style={{ gridArea: 'primeiro' }}>
        <div className="column-in-line-table">
          <span>Casos</span>
          <strong>{props.cases}</strong>
        </div>

        <div className="column-in-line-table" style={{ gridArea: 'segundo' }}>
          <span>Mortalidade/100mil hab</span>
          <strong>{props.mortality}</strong>
        </div>

        <div className="column-in-line-table" style={{ gridArea: 'terceiro' }}>
          <span>Óbitos</span>
          <strong>{props.deaths}</strong>
        </div>

        <div className="column-in-line-table" style={{ gridArea: 'quarto' }}>
          <span>Incidência/100mil hab.</span>
          <strong>{props.incidents}</strong>
        </div>

        <div className="column-in-line-table" style={{ gridArea: 'quinto' }}>
          <span>Atualização</span>
          <strong>{props.updated}</strong>
        </div>

      </div>

    </div>
  );
}