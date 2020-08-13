import React from 'react';

import './styles.css';

import chartsImg from '../../assets/images/img-charts-2.png';
import coronaImg from '../../assets/images/icon-corona.png';
import chartsBackground from '../../assets/images/background-charts.png';
import coronaBackground from '../../assets/images/background-corona.png';

import Toolbar from '../../components/Toolbar';

export default function About() {
  return(
    <div className="container">

      <Toolbar />

      <main>
          <div className="scroll-container">

            <div id="main-panel">
              <div className="top-panel">

                <div>
                  <span className="covid">COVID19</span>
                  <div>
                    <h1>Sobre</h1>
                    <span>o Painel</span>
                  </div>
                  <p>Atualizado em: 06/08/2020 18:30</p>
                </div>
              </div>
            </div>

            <div className="about-content">
              <div>
                <div>
                  <strong>Introdução</strong>
                  <p>
                    Este painel foi desenvolvido para ser o veículo oficial de comunicação sobre a situação epidemiológica da COVID-19 no Brasil.
                  </p>
                </div>

                <div>
                  <strong>Atualizações</strong>
                  <p>
                    O processo de atualização dos dados sobre casos e óbitos confirmados por COVID-19 no Brasil é realizado diariamente pelo 
                    Ministério da Saúde através das informações oficiais repassadas pelas Secretarias Estaduais de Saúde das 27 Unidades Federativas 
                    brasileiras. Os dados fornecidos pelos estados são consolidados e disponibilizados publicamente todos os dias, em torno das 19h.
                  </p>
                </div>

                <div>
                  <strong>Limitações</strong>
                  <p>
                    O processo de atualização das informações nos municípios, estados e na esfera federal é dinâmico e complexo. Os dados informados
                    diariamente são sujeitos a alterações. Considerando a pluralidade de cada município brasileiro no que diz respeito a porte 
                    populacional, infraestrutura e organização dos serviços de saúde, além de todos os desafios que a pandemia de COVID-19 impõe, 
                    é possível que haja mudanças no número de casos ou óbitos em decorrência de erros ou atrasos no repasse das informações.<br/><br/>
                    Em nível municipal, o dado do dia atual pode ser menor que o do dia anterior: isso acontece porque o município de notificação 
                    não é necessariamente o mesmo local de residência do caso ou óbito notificado. Assim, ao concluir o processo de investigação de 
                    cada ocorrência individualmente, as Secretarias Municipais e Estaduais de Saúde possuem autonomia para corrigir a informação e 
                    repassá-la ao Ministério da Saúde.<br/><br/>
                    Os casos e óbitos são atualizados por data de notificação. O Ministério da Saúde vem trabalhando em conjunto com as 
                    Secretarias Estaduais e Municipais de Saúde para divulgação desses indicadores.
                  </p>
                </div>

                <div>
                  <strong style={{ color: "#1DA584" }}>Conceitos básicos:</strong><br/>
                  <strong>Casos novos</strong>
                  <p>
                    Número de casos novos confirmados por COVID-19 que foram registrados pelas Secretarias Municipais e Estaduais de Saúde em relação ao 
                    dia anterior.<br/><br/>
                    Reflete o número de casos diagnosticados e registrados pelas secretarias de saúde, não significando a data de início dos sintomas. 
                    Para análise dos casos por data de início dos sintomas, deve-se utilizar os dados do sistema e-SUS VE e do Sistema de Vigilância 
                    Epidemiológica da Gripe (SIVEP-Gripe), para os casos de Síndrome Respiratória Aguda Grave (SRAG) Hospitalizados, além dos dados 
                    provenientes dos sistemas de informação de Síndrome Gripal implantados em alguns estados.
                  </p>
                </div>

                <div>
                  <strong>Casos acumulados</strong>
                  <p>
                    Número total de casos confirmados por COVID-19 que foram registrados pelas Secretarias Municipais e Estaduais de Saúde no período considerado.
                  </p>
                </div>

                <div>
                  <strong>Óbitos novos</strong>
                  <p>
                    Número de óbitos novos confirmados por COVID-19 que foram registrados pelas Secretarias Municipais e Estaduais de Saúde em 
                    relação ao dia anterior.<br/><br/>
                    Reflete o número de óbitos reportados pelas secretarias de saúde na data em que tiveram a confirmação laboratorial ou clínico 
                    epidemiológica. Não reflete a data de ocorrência do óbito. Para análise de óbitos por data de ocorrência, deve-se utilizar os 
                    dados registrados no Sistema de Vigilância Epidemiológica da Gripe (SIVEP-Gripe), onde devem ser notificados todos os casos de 
                    Síndrome Respiratória Aguda Grave (SRAG) Hospitalizados ou óbitos por SRAG, independente de hospitalização. Também devem ser 
                    observados os registros de óbitos no Sistema de Informação sobre Mortalidade (SIM).                
                  </p>
                </div>

                <div>
                  <strong>Óbitos acumulados</strong>
                  <p>
                    Número total de óbitos confirmados por COVID-19 que foram registrados pelas Secretarias Municipais e Estaduais de Saúde no período considerado.                
                  </p>
                </div>

                <div>
                  <strong style={{ color: "#1DA584" }}>Coeficiente de Incidência de COVID-19</strong><br/>
                  <strong>Conceituação</strong>
                  <p>
                    Número de casos confirmados de COVID-19 por 100.000 habitantes, na população residente em determinado espaço geográfico, 
                    no período considerado.<br/><br/>
                    A definição de caso confirmado de COVID-19 baseia-se em critérios adotados pelo Ministério da Saúde para orientar as ações 
                    de vigilância epidemiológica da doença em todo o país.                
                  </p>
                </div>

                <div>
                  <strong>Interpretação</strong>
                  <p>
                    Estima o risco de ocorrência de casos de COVID-19 numa determinada população num período considerado.
                  </p>
                </div>

                <div>
                  <strong>Usos</strong>
                  <p>
                    Analisar variações populacionais, geográficas e temporais da distribuição dos casos confirmados de COVID-19, como parte do 
                    conjunto de ações de vigilância epidemiológica da doença.<br/><br/>
                    Contribuir na avaliação dos níveis de saúde da população, prestando-se para comparações nacionais e internacionais.<br/><br/>
                    Subsidiar processos de planejamento, gestão e avaliação de políticas e ações de saúde direcionadas para a o enfrentamento do 
                    COVID-19 no contexto da prevenção e controle das doenças.                
                  </p>
                </div>

                <div>
                  <strong>Limitações</strong>
                  <p>
                    Depende das condições técnico-operacionais do sistema de vigilância epidemiológica, em cada área geográfica, para detectar, 
                    notificar, investigar e realizar testes laboratoriais específicos para a confirmação diagnóstica de casos de COVID-19.
                  </p>
                </div>

                <div>
                  <strong>Fonte</strong>
                  <p>
                    Ministério da Saúde. Secretaria de Vigilância em Saúde (SVS): Guia de Vigiläncia Epidemiológica do COVID-19.<br/><br/>
                    Secretarias Municipais e Estaduais de Saúde.<br/><br/>
                    *População: Estimativas de 2019 utilizadas pelo TCU para determinação das cotas do FPM (sem sexo e faixa etária). 
                    Disponível em<br/> <a style={{ color: "#1DA584", cursor: "pointer", textDecoration: "underline" }}>https://datasus.saude.gov.br/populacao-residente/</a>
                  </p>
                </div>

                <div>
                  <strong>Método de cálculo</strong>
                  <p>
                    Número de casos confirmados de COVID-19 em residentes X 100.000
                    População* total residente no período determinado.
                  </p>
                </div>

                <div>
                  <strong style={{ color: "#1DA584" }}>Coeficiente de Mortalidade por COVID-19</strong><br/>
                  <strong>Conceituação</strong>
                  <p>
                    Número de óbitos por doenças COVID-19, por 100 mil habitantes, na população residente em determinado espaço geográfico, 
                    no ano considerado.
                  </p>
                </div>

                <div>
                  <strong>Interpretação</strong>
                  <p>
                    Estima o risco de morte pela COVID-19 consideradas e dimensiona a sua magnitude como problema de saúde pública.<br/><br/>
                    Reflete também a efetividade de medidas de prevenção e controle, bem como as condições de diagnóstico e da assistência 
                    médica dispensada.<br/><br/>
                    A taxa de mortalidade específica não padronizada por idade está sujeita à influência de variações na composição etária da população, 
                    o que exige cautela nas comparações entre áreas geográficas e para períodos distintos.
                  </p>
                </div>

                <div>
                  <strong>Usos</strong>
                  <p>
                    Analisar variações populacionais, geográficas e temporais da mortalidade por COVID-19 em segmentos populacionais, 
                    identificando situações de desigualdade e tendências que demandem ações e estudos específicos.<br/><br/>
                    Contribuir para comparações nacionais e internacionais.<br/><br/>
                    Subsidiar processos de planejamento, gestão e avaliação de políticas públicas de promoção, proteção e recuperação da saúde, 
                    concernentes à COVID-19.
                  </p>
                </div>

                <div>
                  <strong>Limitações</strong>
                  <p>
                    Requer correção da subenumeração de óbitos captados pelo sistema de informação sobre mortalidade, especialmente nas regiões Norte 
                    e Nordeste.<br/><br/>
                    Apresenta restrição de uso sempre que ocorra elevada proporção de óbitos sem assistência médica ou por causas mal definidas.<br/><br/>
                    Requer análise de tendências das causas específicas que compõem o indicador, as quais seguem padrões epidemiológicos próprios e 
                    diferenciados.
                  </p>
                </div>

                <div>
                  <strong>Fonte</strong>
                  <p>
                    Ministério da Saúde. Secretaria de Vigilância à Saúde (SVS): Guia de vigilância Epidemiológica.<br/><br/>
                    Secretarias Estaduais e Municipais de Saúde<br/><br/>
                    *População: Estimativas de 2019 utilizadas pelo TCU para determinação das cotas do FPM (sem sexo e faixa etária) Disponível em<br/>
                    <a style={{ color: "#1DA584", cursor: "pointer", textDecoration: "underline" }}>https://datasus.saude.gov.br/populacao-residente/</a>
                  </p>
                </div>

                <div>
                  <strong>Método de cálculo</strong>
                  <p>
                    Número de óbitos confirmados de COVID-19 em residentes X 100.000<br/>
                    População* total residente no período determinado.
                  </p>
                </div>

                <div>
                  <strong style={{ color: "#1DA584" }}>Taxa de Letalidade por COVID-19</strong><br/>
                  <strong>Conceituação</strong>
                  <p>
                    Número de óbitos confirmados de COVID-19 em relação ao total de casos confirmados, na população residente em determinado 
                    espaço geográfico, no período considerado.                
                  </p>
                </div>

                <div>
                  <strong>Interpretação</strong>
                  <p>
                    Esta taxa dá a idéia de gravidade da doença, pois indica o percentual de pessoas que morreram dentre os casos confirmados da doença.
                  </p>
                </div>

                <div>
                  <strong>Usos</strong>
                  <p>
                    Relacionar o número de óbitos por determinada causa e o número de pessoas que foram acometidas por tal doença.
                    Acompanhar a qualidade da assistência médica oferecida à população.
                  </p>
                </div>

                <div>
                  <strong>Limitações</strong>
                  <p>
                    Depende necessariamente do número de casos diagnosticados, que no caso do COVID-19, depende da quantidade de exames diagnósticos realizados.
                  </p>
                </div>

                <div>
                  <strong>Fonte</strong>
                  <p>
                    Ministério da Saúde. Secretaria de Vigilância à Saúde (SVS): Guia de vigilância Epidemiológica.
                    Secretarias Estaduais e Municipais de Saúde.
                  </p>
                </div>

                <div>
                  <strong>Método de cálculo</strong>
                  <p>
                    Número de óbitos confirmados de COVID-19 em determinada área e período X 100
                    Número de casos confirmados de COVID-19 em determinada área e período.
                  </p>
                </div>

                <div>
                  <strong style={{ color: "#1DA584" }}>Estimativa de casos recuperados e em acompanhamento</strong><br/>
                  <strong>Casos recuperados</strong>
                  <p>
                    Segundo a Organização Mundial da Saúde, para os casos de COVID-19 confirmados por critério laboratorial, considera-se como recuperados
                    aqueles que tiveram dois resultados negativos para SARS-CoV-2 com pelo menos 1 dia de intervalo. Para os casos leves, a OMS estima 
                    que tempo entre o início da infecção e a recuperação dure até 14 dias.<br/><br/>
                    Como ainda há uma carência no quantitativo de testes laboratoriais disponíveis no mundo, em vários países não tem sido possível 
                    aplicar esse critério, já que o foco é identificar casos novos e isolá-los, tentando conter a transmissão.<br/><br/>
                    No Brasil, o número de recuperados é estimado por um cálculo composto que leva em consideração os registros de casos e óbitos 
                    com confirmação de COVID-19, reportados pelas Secretarias Estaduais de Saúde, e o número de pacientes hospitalizados registrados 
                    no Sistema de Vigilância Epidemiológica da Gripe (SIVEP Gripe).<br/><br/>
                    Inicialmente, são identificados os pacientes que se encontram hospitalizados por SRAG, sem registro de óbito ou alta no sistema. De 
                    forma complementar, são considerados os casos leves com início dos sintomas há mais de 14 dias, que não estão hospitalizados e que 
                    evoluíram para óbito. A estimativa de recuperados inclui o número de pacientes hospitalizados com registro de alta no SIVEP Gripe.
                  </p>
                </div>

                <div>
                  <strong>Casos em acompanhamento</strong>
                  <p>
                    São considerados como “em acompanhamento” todos os casos notificados nos últimos 14 dias pelas Secretarias Estaduais de Saúde e 
                    que não evoluíram para óbito. Além disso, dentre os casos que apresentaram SRAG e foram hospitalizados, considera-se 
                    “em acompanhamento” todos aqueles que foram internados nos últimos 14 dias e que não apresentam registro de alta ou óbito no 
                    SIVEP Gripe.
                  </p>
                </div>
              </div>

              <div className="cards">
                <div
                  style={{ 
                    backgroundImage: "url(" + chartsBackground + ")", 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: '100%',
                    backgroundColor: "#1ca180" }}
                >
                  <div>
                    <img src={chartsImg} alt="Charts"/>
                  </div>
                  <strong>Portal do COVID-19</strong>
                  <p>
                    Diariamente, o Ministério da Saúde, por meio da Secretaria de Vigilância em Saúde (SVS/MS) divulga dados consolidados 
                    sobre o COVID-19. Saiba mais sobre o painel.
                  </p>
                </div>

                <div
                  style={{ 
                    backgroundImage: "url(" + coronaBackground + ")", 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: '100%',
                    backgroundColor: "#9748b1" }}
                >
                  <div>
                    <img src={coronaImg} alt="Corona"/>
                  </div>
                  <strong>Portal do COVID-19</strong>
                  <p>
                    Diariamente, o Ministério da Saúde, por meio da Secretaria de Vigilância em Saúde (SVS/MS) divulga dados consolidados 
                    sobre o COVID-19. Saiba mais sobre o painel.
                  </p>
                </div>
                
              </div>
                
            </div>

          </div>
      </main>

    </div>

  );
}