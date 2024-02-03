import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faTag,
  faPenRuler,
  faChartLine,
  faGaugeHigh,
  faCarSide,
  faBatteryHalf,
  faFlagCheckered,
  faRoad,
  faCar,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
const AboutUsPage = () => {
  return (
    <div className="page-about">
      <div className="section">
        <h1 style={{ textAlign: "center" }}>Nossa Equipa</h1>
        <p>
          Bem-vindo à nossa equipa de Formula Student! Somos um grupo de
          estudantes apaixonados dedicados a empurrar os limites da engenharia
          automotiva. Nossa equipa colabora para projetar e construir carros de
          corrida de alto desempenho, competindo em eventos nacionais e
          internacionais.
        </p>

        <h2>Membros da Equipa</h2>
        <ul style={{}}>
          <li>
            Ricardo Cutileiro - Team Leader
          </li>
          <li>
            João Balbino - Technical Director
          </li>
          <li>Sergiu Nica - Business & Strategy Director</li>
        </ul>
        <h1 style={{ textAlign: "center" }}>FORMULA STUDENT</h1>

        <h3>
          <strong>OBJETIVO</strong>
        </h3>
        <p>
          Os alunos constroem um carro de corrida de fórmula com um único
          assento, com o qual competem contra equipas de todo o mundo. A
          competição não é vencida apenas pela equipa com o carro mais rápido,
          mas sim pela equipa com o melhor pacote geral de construção,
          desempenho e planeamento financeiro e de vendas.
        </p>
        <p>
          As equipas assumem que são um fabricante a desenvolver um protótipo a
          ser avaliado para produção. O carro deve apresentar características de
          direção muito boas, como aceleração, travagem e dirigibilidade. Deve
          ser oferecido a um custo muito razoável e ser fiável. Além disso, o
          valor de mercado do carro aumenta por meio de outros fatores, como
          estética, conforto e o uso de componentes de compra prontamente
          disponíveis.
        </p>
        <h3>
          <strong>EVENTOS</strong>
        </h3>
        <p>
          Os pontos são ganhos em uma série de eventos estáticos (fora da pista)
          e dinâmicos (na pista). A equipa com mais pontos ao final da
          competição vence. ​ Existem três categorias diferentes:
          <ul>
            <li>Motores de combustão interna (CV)</li>
            <li>Motores elétricos (EV)</li>
            <li>Driverless (DV)</li>
          </ul>
          Este último podendo ser movido tanto eletricamente como com motor de
          combustão interna.
        </p>
        <br></br>
        <br></br>
        <h3 style={{ textAlign: "center" }}>
          <strong>EVENTOS ESTÁTICOS</strong>
        </h3>
        <br></br>
        <p style={{ display: "flex" }}>
          <FontAwesomeIcon
            icon={faPenRuler}
            size="5x"
            color="#419ed4"
            style={{ padding: "0rem 2rem" }}
          />
          <span>
            <h4>ENGINEERING DESIGN</h4>
            <span>
              Os estudantes devem apresentar os seus conhecimentos sobre o carro
              e conceitos de engenharia a um painel de juízes. Na maioria dos
              eventos há múltiplas rondas de design, cada uma com perguntas cada
              vez mais difíceis e sessões mais longas. A primeira ronda envolve
              todas as equipas, e centra-se nos conhecimentos fundamentais.
              Apenas as melhores equipas chegam às finais.
            </span>
          </span>
        </p>
        <p style={{ display: "flex" }}>
          <FontAwesomeIcon
            icon={faTag}
            size="5x"
            color="#419ed4"
            style={{ padding: "0rem 2rem" }}
          />
          <span>
            <h4>COST AND MANUFACTURING</h4>
            <span>
              Os estudantes criam um relatório detalhado de todos os custos
              associados aos materiais, processos e montagem do carro. Os pontos
              são atribuídos com base no custo total da viatura e na qualidade
              do relatório. Finalmente, os estudantes devem completar um cenário
              de "caso real" para reduzir os custos em áreas específicas com
              base na contribuição dos organizadores do evento.
            </span>
          </span>
        </p>
        <p style={{ display: "flex" }}>
          <FontAwesomeIcon
            icon={faChartLine}
            size="5x"
            color="#419ed4"
            style={{ padding: " 0rem 2rem" }}
          />
          <span>
            <h4>BUSINESS PLAN </h4>
            <span>
              Cada equipa apresenta o seu plano de negócios para o protótipo
              construído a uma empresa fictícia representada por juízes. Durante
              uma apresentação de dez minutos, a equipa deve demonstrar porque é
              que o seu desenho satisfaz melhor as exigências do seu grupo alvo
              e mostrar como o seu desenho pode ser comercializado com sucesso.
            </span>
          </span>
        </p>
        <br></br>
        <h3 style={{ textAlign: "center" }}>
          <strong>EVENTOS DINÂMICOS</strong>
        </h3>
        <br></br>

        <p style={{ display: "flex" }}>
          <FontAwesomeIcon
            icon={faGaugeHigh}
            size="5x"
            color="#419ed4"
            style={{ padding: "0rem 2rem" }}
          />
          <span>
            <h4>ACCELERATION</h4>
            <span>
              O evento Acceleration avalia a aceleração do carro em linha reta,
              desde um arranque parado, numa distância de 75 metros.
            </span>
          </span>
        </p>
        <br></br>
        <p style={{ display: "flex" }}>
          <FontAwesomeIcon
            icon={faCarSide}
            size="5x"
            color="#419ed4"
            style={{ padding: "0rem 1.4rem" }}
          />
          <span>
            <h4>SKID PAD</h4>
            <span>
              O objectivo do evento Skid Pad é medir a aderência lateral do
              carro numa superfície plana enquanto se faz uma curva de raio
              constante (em 8).
            </span>
          </span>
        </p>
        <br></br>
        <p style={{ display: "flex" }}>
          <FontAwesomeIcon
            icon={faCar}
            size="5x"
            color="#419ed4"
            style={{ padding: "0rem 2rem" }}
          />
          <span>
            <h4>AUTOCROSS</h4>
            <span>
              O Autocross testa a capacidade dinâmica dos carros num sprint de
              uma volta. Dois condutores são submetidos a duas tentativas no
              percurso. O objectivo do evento de autocross é avaliar a
              capacidade de manobra e as qualidades de manuseamento do carro num
              percurso apertado, sem o impedimento de carros concorrentes. O
              evento de autocross combina as características de desempenho da
              aceleração, travagem e curva num único evento.
            </span>
          </span>
        </p>
        <br></br>
        <p style={{ display: "flex" }}>
          <FontAwesomeIcon
            icon={faFlagCheckered}
            size="5x"
            color="#419ed4"
            style={{ padding: "0rem 2.3rem" }}
          />
          <span>
            <h4>ENDURANCE</h4>
            <span>
              O evento Endurance tem 22 km de comprimento, conduzido numa pista
              semelhante à do evento de Autocross. Dois condutores conduzem cada
              um metade da distância com uma paragem obrigatória a meio. O carro
              deve parar e arrancar com a sua própria potência e não é permitido
              reabastecer ou reparar. Uma equipa deve terminar o Endurance a fim
              de ganhar quaisquer pontos de Effiency ou Endurance. Consistência
              e fiabilidade são fundamentais para este evento.
            </span>
          </span>
        </p>
        <br></br>
        <p style={{ display: "flex" }}>
          <FontAwesomeIcon
            icon={faRoad}
            size="5x"
            color="#419ed4"
            style={{ padding: "0rem 1.7rem" }}
          />
          <span>
            <h4>TRACKDRIVE</h4>
            <span>
              Oferecendo o maior número de pontos dinâmicos, Trackdrive é um dos
              principais eventos da Driverless Cup. Ao longo de uma distância de
              10 voltas, os carros têm de provar a sua durabilidade sem um
              condutor em condições de longo prazo. Os carros têm de completar a
              distância numa só etapa. Os cones não serão substituídos.
            </span>
          </span>
        </p>
        <br></br>
        <p style={{ display: "flex" }}>
          <FontAwesomeIcon
            icon={faBatteryHalf}
            size="5x"
            color="#419ed4"
            style={{ padding: "0rem 1.7rem" }}
          />
          <span>
            <h4>EFFICIENCY</h4>
            <span>
              Durante a prova de Endurance, o consumo de combustível (CV) ou de
              energia (EV) é registado com precisão. O consumo de
              combustível/electricidade e os tempos de volta são combinados para
              determinar a eficiência do carro. Aqui, deve ser encontrado um
              compromisso entre velocidade e potência.
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
