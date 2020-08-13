import React from 'react';

import './styles.css';

import { FaDownload, FaArrowDown, FaExpandAlt } from 'react-icons/fa';

import celular from '../../assets/images/celular.svg';
import appStore from '../../assets/images/app-store.svg';
import appWeb from '../../assets/images/app-web.svg';
import googlePlay from '../../assets/images/google-play.svg';


//Components
import Toolbar from '../../components/Toolbar';
import BarChart from '../../components/BarChart';
import LineChart from '../../components/LineChart';

export default function Srag() {
  
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
                    <h1>SRAG</h1>
                    <span>Síndrome Respiratória Aguda Grave</span>
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
          </div>

          <div className="dashboards-container">

            <div className="grid-dashboards">

              <div className="dashboard-content">
                <div className="top-dashboard">
                  <span>SRAG hospitalizados por etiologia</span>
                  <button>
                    <FaExpandAlt size={22} color="#1DA584"/>
                  </button>
                </div>

                <div className="chart-content">
                  <BarChart labels={barChartLabelsPrimary} datasets={barChartConfigPrimary} />
                </div>
              </div>

              <div className="dashboard-content">
                <div className="top-dashboard">
                  <span>SRAG hospitalizados por faixa etária e sexo</span>
                  <button>
                    <FaExpandAlt size={22} color="#1DA584"/>
                  </button>
                </div>

                <div className="chart-content">
                  <BarChart labels={barChartLabelsSecundary} datasets={barChartConfigSecundary} />
                </div>
              </div>

              <div className="dashboard-content">
                <div className="top-dashboard">
                  <span>SRAG hospitalizados por semana epidemiológica de início dos sintomas</span>
                  <button>
                    <FaExpandAlt size={22} color="#1DA584"/>
                  </button>
                </div>

                <div className="chart-content">
                  <LineChart labels={barChartLabelsPrimary} datasets={barChartConfigPrimary} />
                </div>
              </div>

              <div className="dashboard-content">
                <div className="top-dashboard">
                  <span>SRAG hospitalizados por UF segundo etiologia</span>
                  <button>
                    <FaExpandAlt size={22} color="#1DA584"/>
                  </button>
                </div>

                <div className="chart-content">
                  <LineChart labels={barChartLabelsSecundary} datasets={barChartConfigSecundary} />
                </div>
              </div>

            </div>

          </div>

        </div>

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
        
      </main>
    </div>
  );
}