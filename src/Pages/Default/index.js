import React, { useState, useEffect } from 'react';

import './styles.css';

import cardBackground from '../../assets/images/card-background.png';
import chartsImage from '../../assets/images/img-charts.png';

import { FaDownload, FaArrowDown, FaExpandAlt } from 'react-icons/fa';

//Components
import Toolbar from '../../components/Toolbar';
import IncidentLine from '../../components/IncidentLine';
import BarChart from '../../components/BarChart';
import LineChart from '../../components/LineChart';
import LeaftMap from '../../components/Map';
import Footer from '../../components/Footer';

export default function Default() {

  const [ content, setContent ] = useState(null);
  
  const barChartLabelsPrimary = [
    '26/02','27/02','28/02','29/02',

    '01/03','02/03','03/03','04/03','05/03','06/03','07/03','08/03','09/03','10/03','11/03','12/03','13/03','14/03','15/03',
    '16/03','17/03','18/03','19/03','20/03','21/03','22/03','23/03','24/03','25/03','26/03','27/03','28/03','29/03','30/03',
    
    '01/04','02/04','03/04','04/04','05/04','06/04','07/04','08/04','09/04','10/04','11/04','12/04','13/04','14/04','15/04',
    '16/04','17/04','18/04','19/04','20/04','21/04','22/04','23/04','24/04','25/04','26/04','27/04','28/04','29/04','30/04',

    '01/05','02/05','03/05','04/05','05/05','06/05','07/05','08/05','09/05','10/05','11/05','12/05','13/05','14/05','15/05',
    '16/05','17/05','18/05','19/05','20/05','21/05','22/05','23/05','24/05','25/05','26/05','27/05','28/05','29/05','30/05',

    '01/06','02/06','03/06','04/06','05/06','06/06','07/06','08/06','09/06','10/06','11/06','12/06','13/06','14/06','15/06',
    '16/06','17/06','18/06','19/06','20/06','21/06','22/06','23/06','24/06','25/06','26/06','27/06','28/06','29/06','30/06',

    '01/07','02/07','03/07','04/07','05/07','06/07','07/07','08/07','09/07','10/07','11/07','12/07','13/07','14/07','15/07',
    '16/07','17/07','18/07','19/07','20/07','21/07','22/07','23/07','24/07','25/07','26/07','27/07','28/07','29/07','30/07',

    '01/08','02/08','03/08','04/08','05/08'
  ];

  const barChartConfigPrimary = [
    {
      label: 'Data da notificação',
      data: [
              10520, 17, 102, 1007, 2784, 6386, 10520, 15921, 22234, 37586, 59380, 77203, 114256, 151042, 174406,
              177668, 217065, 246088, 263337, 262846, 235010, 319653, 313364, 304535, 114256, 151042, 174406,
              10520, 17, 102, 1007, 2784, 6386, 10520, 15921, 22234, 37586, 59380, 77203, 114256, 151042, 174406,
              177668, 217065, 246088, 263337, 262846, 235010, 319653, 313364, 304535, 114256, 151042, 174406,
              10520, 17, 102, 1007, 2784, 6386, 10520, 15921, 22234, 37586, 59380, 77203, 114256, 151042, 174406,
              177668, 217065, 246088, 263337, 262846, 235010, 319653, 313364, 304535, 114256, 151042, 174406,
              10520, 17, 102, 1007, 2784, 6386, 10520, 15921, 22234, 37586, 59380, 77203, 114256, 151042, 174406,
              177668, 217065, 246088, 263337, 262846, 235010, 319653, 313364, 304535, 114256, 151042, 174406,
              10520, 17, 102, 1007, 2784, 6386, 10520, 15921, 22234, 37586, 59380, 77203, 114256, 151042, 174406,
              177668, 217065, 246088, 263337, 262846, 235010, 319653, 313364, 304535, 114256, 151042, 174406,
              23514, 12314, 12451, 23511, 121211
          ],
      backgroundColor: [
        '#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584',
        '#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584',
        '#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584',
        '#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584',
        '#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584',
        '#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584',
        '#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584',
        '#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584',
        '#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584',
        '#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584',
        '#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584','#1da584'
      ],
      borderWidth: 4
    }
  ];

  const barChartLabelsSecundary = [
    '9','10','11','12','13','14','15','16',
    '17','18','19','20','21','22','23','24',
    '25','26','27','28','29','30','31','32',
  ];

  const barChartConfigSecundary = [
    {
      label: 'Semana Epidemiológica',
      data: [0, 17, 102, 1007, 2784, 6386, 10520, 15921, 22234, 37586, 
            59380, 77203, 114256, 151042, 174406, 177668, 217065, 
            246088, 263337, 262846, 235010, 319653, 313364, 304535
          ],
      backgroundColor: [
        '#1da584','#1da584','#1da584','#1da584','#1da584',
        '#1da584','#1da584','#1da584','#1da584','#1da584',
        '#1da584','#1da584','#1da584','#1da584','#1da584',
        '#1da584','#1da584','#1da584','#1da584','#1da584',
        '#1da584','#1da584','#1da584','#1da584',
      ],
      borderWidth: 4
    }
  ]

  function OpenView() {
    return <h1>Visualização</h1>
    /*( 
      <div className="dashboard-content" style={{ position: 'absolute', width: '700px', height: "500px", top: '10%' }}>
        <div className="top-dashboard">
          <span>Casos novos de COVID-19 por data de notificação</span>
            <button
              onClick={element => handleViewChart(element.target)}
            >
              <FaExpandAlt size={22} color="#1DA584"/>
            </button>
        </div>

        <div className="chart-content">
          <BarChart labels={barChartLabelsPrimary} datasets={barChartConfigPrimary} />
        </div>
      </div>
    );*/
  }

  async function handleViewChart(element) {
    //document.getElementById("view-card").classList.add("dashboard-content");
    //setContent(true);
    return;
  }


  return (
    <div className="container">

      <Toolbar />

      <main>
        <div className="scroll-container">
          <div id="main-panel">
            <div className="top-panel">

              <div>
                <span className="covid">COVID19</span>
                <div>
                  <h1>Painel</h1>
                  <span>Coronavírus</span>
                </div>
                <p>Atualizado em: 06/08/2020 18:30</p>
              </div>

              <div>
                <button type="button">
                  <FaDownload size={28}/>
                  Arquivo CSV
                </button>
              </div>
              
            </div>

            <div className="bottom-panel">

              <div className="info-card">
                <div className="recovered">
                  <span>Casos recuperados</span>
                  <strong>2.047.660</strong>
                </div>
                <div className="supervision">
                  <span>Em acompanhamento</span>
                  <strong>766.059</strong>
                </div>
              </div>

              <div className="info-card">
                <div className="grid-title">
                  <span id="title-confirmed">CASOS CONFIRMADOS</span>
                  <button style={{ backgroundColor: 'rgba(29, 165, 132, 0.1)', boxShadow: '0px 0px 6px 0px rgba(29, 165, 132, 0.1)' }}>
                    <FaArrowDown size={14} color="#1DA584"/>
                  </button>
                </div>
                <div className="grid-values">
                  <div>
                    <strong>2.912.212</strong>
                    <span>Acumulado</span>
                  </div>

                  <div>
                    <strong>53.139</strong>
                    <span>Casos novos</span>
                  </div>

                  <div>
                    <strong>1385,8</strong>
                    <span>Incidência*</span>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <div className="grid-title">
                  <span id="title-obitos">ÓBITOS CONFIRMADOS</span>
                  <button
                    style={{ 
                      backgroundColor: 'rgba(154, 54, 187, 0.1)',
                      boxShadow: '0px 0px 6px 0px rgba(154, 54, 187, 0.1)' 
                    }}>
                    <FaArrowDown size={14} color="#9A36BB"/>
                  </button>
                </div>
                <div className="grid-values">
                  <div style={{ gridArea: "primeiro" }}>
                    <label>98.493</label>
                    <span>Óbitos acumulados</span>
                  </div>

                  <div style={{ gridArea: "segundo" }}>
                    <label>1.237</label>
                    <span>Casos novos</span>
                  </div>

                  <div style={{ gridArea: "terceiro" }}>
                    <label>3,4 %</label>
                    <span>Letalidade</span>
                  </div>

                  <div style={{ gridArea: "quarto" }}>
                    <label>46,9</label>
                    <span>Mortalidade*</span>
                  </div>

                </div>
              </div>

              <div className="info-card" 
                style={{ 
                  backgroundImage: "url(" + cardBackground + ")", 
                  backgroundRepeat: 'no-repeat', 
                  backgroundSize: '100%' }}
              >
                <div className="interative-panel">
                  <strong>Painel Interativo</strong>
                </div>
                <div className="interative-panel-content">
                  <p>
                    Navegue pelos dados do Sistema Único de
                    Saúde - SUS, com informações estratégicas e
                    conheça tudo sobre a COVID-19 de forma
                    transparente e analítica.
                  </p>
                  <div>
                    <button type="button">Acesse</button>
                    <img src={chartsImage} alt="Charts"/>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="table-cases">
            <div className="top-table">
              <div className="left-menu-cases">
                <span>Síntese de casos, óbitos, incidência e mortalidade</span>
              </div>
              <div className="right-menu-cases">
                <input type="text" name="locality" id="locality" value="Pesquise uma localidade" />
                <select name="region" id="region">
                    <option value="Brasil">Brasil</option>
                </select>
              </div>
            </div>

            <div className="table-content">
              <IncidentLine name="Brasil" cases="3.012.412" mortality="47,8" deaths="100.477" incidents="1433,5"  updated="06/08 18:30" />
              <IncidentLine name="Centro-Oeste" cases="3.012.412" mortality="47,8" deaths="100.477" incidents="1433,5"  updated="06/08 18:30" />
              <IncidentLine name="Sul" cases="3.012.412" mortality="47,8" deaths="100.477" incidents="1433,5"  updated="06/08 18:30" />
              <IncidentLine name="Norte" cases="3.012.412" mortality="47,8" deaths="100.477" incidents="1433,5"  updated="06/08 18:30" />
              <IncidentLine name="Nordeste" cases="3.012.412" mortality="47,8" deaths="100.477" incidents="1433,5"  updated="06/08 18:30" />
              <IncidentLine name="Sudeste" cases="3.012.412" mortality="47,8" deaths="100.477" incidents="1433,5"  updated="06/08 18:30" />
            </div>

          </div>

          <div className="dashboards-container">

            <div className="confirmed-title-content">
              <h1>Casos</h1>
              <span>Confirmados</span>
            </div>

            <div className="grid-dashboards">

              <div className="dashboard-content">
                <div className="top-dashboard">
                  <span>Casos novos de COVID-19 por data de notificação</span>
                  <button
                    onClick={element => handleViewChart(element.target)}
                  >
                    <FaExpandAlt size={22} color="#1DA584"/>
                  </button>
                </div>

                <div className="chart-content">
                  <BarChart labels={barChartLabelsPrimary} datasets={barChartConfigPrimary} />
                </div>
              </div>

              <div className="dashboard-content">
                <div className="top-dashboard">
                  <span>Casos novos de COVID-19 por Semana Epidemiológica de notificação</span>
                  <button
                    onClick={element => handleViewChart(element.target)}
                  >
                    <FaExpandAlt size={22} color="#1DA584"/>
                  </button>
                </div>

                <div className="chart-content">
                  <BarChart labels={barChartLabelsSecundary} datasets={barChartConfigSecundary} />
                </div>
              </div>

              <div className="dashboard-content">
                <div className="top-dashboard">
                  <span>Casos acumulados de COVID-19 por data de notificação</span>
                  <button
                    onClick={element => handleViewChart(element.target)}
                  >
                    <FaExpandAlt size={22} color="#1DA584"/>
                  </button>
                </div>

                <div className="chart-content">
                  <LineChart labels={barChartLabelsPrimary} datasets={barChartConfigPrimary} />
                </div>
              </div>

              <div className="dashboard-content">
                <div className="top-dashboard">
                  <span>Casos acumulados de COVID-19 por Semana Epidemiológica de notificação</span>
                  <button
                    onClick={element => handleViewChart(element.target)}
                  >
                    <FaExpandAlt size={22} color="#1DA584"/>
                  </button>
                </div>

                <div className="chart-content">
                  <LineChart labels={barChartLabelsSecundary} datasets={barChartConfigSecundary} />
                </div>
              </div>

              <div className="dashboard-content">
                <div className="top-dashboard">
                  <span>Casos acumulados de COVID-19 por Semana Epidemiológica de notificação</span>
                  <button
                    onClick={element => handleViewChart(element.target)}
                  >
                    <FaExpandAlt size={22} color="#1DA584"/>
                  </button>
                </div>

                <div className="chart-content">
                  <LineChart labels={barChartLabelsSecundary} datasets={barChartConfigSecundary} />
                </div>
              </div>

              <div className="dashboard-content">
                <div className="top-dashboard">
                  <span>Casos acumulados de COVID-19 por Semana Epidemiológica de notificação</span>
                  <button
                    onClick={element => handleViewChart(element.target)}
                  >
                    <FaExpandAlt size={22} color="#1DA584"/>
                  </button>
                </div>

                <div className="chart-content">
                  <LineChart labels={barChartLabelsSecundary} datasets={barChartConfigSecundary} />
                </div>
              </div>

              <div className="dashboard-content">
                <div className="top-dashboard">
                  <span>Casos de COVID-19 por UF de notificação</span>
                  <button
                    onClick={element => handleViewChart(element.target)}
                  >
                    <FaExpandAlt size={22} color="#1DA584"/>
                  </button>
                </div>

                <div className="chart-content" style={{overflow: 'hidden', maxHeight: '300px'}}>
                  <LeaftMap />
                </div>
              </div>

              <div className="dashboard-content">
                <div className="top-dashboard">
                  <span>Casos de COVID-19 por Município de notificação</span>
                  <button
                    onClick={element => handleViewChart(element.target)}
                  >
                    <FaExpandAlt size={22} color="#1DA584"/>
                  </button>
                </div>

                <div className="chart-content" style={{overflow: 'hidden', maxHeight: '300px'}}>
                  <LeaftMap />
                </div>
              </div>

              <div className="dashboard-content">
                <div className="top-dashboard">
                  <span>Coeficiente de Incidência de COVID-19 por UF de notificação</span>
                  <button
                    onClick={element => handleViewChart(element.target)}
                  >
                    <FaExpandAlt size={22} color="#1DA584"/>
                  </button>
                </div>

                <div className="chart-content" style={{overflow: 'hidden', maxHeight: '300px'}}>
                  <LeaftMap />
                </div>
              </div>

              <div className="dashboard-content">
                <div className="top-dashboard">
                  <span>Coeficiente de Incidência de COVID-19 por Região de Saúde de notificação</span>
                  <button
                    onClick={element => handleViewChart(element.target)}
                  >
                    <FaExpandAlt size={22} color="#1DA584"/>
                  </button>
                </div>

                <div className="chart-content" style={{overflow: 'hidden', maxHeight: '300px'}}>
                  <LeaftMap />
                </div>
              </div>

            </div>

          </div>

        </div>

        <Footer />
        
      </main>
      <div id="view-card" style={{position: 'fixed', top: 0, left: 0 }}>
        { content != null &&
          <div style={{ width:"100vw", height: "100vh", backgroundColor: "#b1b1b1b1", opacity: "0.3" }}>
            <OpenView />
          </div>
        }
      </div>
    </div>
  );
}