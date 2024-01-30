import React from "react";
import "./index.css";
const AboutUsPage = () => {
  return (
    <div>
      <div className="section">
        <h2>Sobre a Formula Student</h2>
        <p>
          Formula Student é uma competição global de engenharia que desafia
          estudantes universitários a projetar, construir e correr carros no
          estilo fórmula. Organizada pela Society of Automotive Engineers (SAE)
          ou pela Institution of Mechanical Engineers (IMechE) em diferentes
          regiões, a competição tem como objetivo proporcionar aos alunos uma
          experiência prática de engenharia no mundo real.
        </p>

        <h2>Como Funciona</h2>
        <p>
          As equipes têm a tarefa de desenvolver um carro de corrida totalmente
          funcional e inovador, dentro de um conjunto de regras e regulamentos.
          Os carros são avaliados não apenas por sua velocidade, mas também por
          design, custo e desempenho em vários eventos dinâmicos e estáticos.
        </p>

        <h3>Eventos Estáticos</h3>
        <ul>
          <li>
            <strong>Design:</strong> As equipes apresentam o design de seus
            veículos a um painel de juízes, explicando suas escolhas de
            engenharia e justificando suas decisões de design.
          </li>
          <li>
            <strong>Custo:</strong> As equipes demonstram sua compreensão dos
            custos de fabricação e operacionais associados ao seu carro.
          </li>
          <li>
            <strong>Apresentação de Negócios:</strong> As equipes apresentam um
            plano de negócios para o seu carro, considerando marketing,
            patrocínio e planejamento financeiro.
          </li>
        </ul>

        <h3>Eventos Dinâmicos</h3>
        <ul>
          <li>
            <strong>Skid Pad:</strong> Mede a capacidade de aceleração lateral
            de um carro em uma pista em formato de oito.
          </li>
          <li>
            <strong>Aceleração:</strong> Testa a aceleração do carro a partir da
            imobilidade em uma curta distância.
          </li>
          <li>
            <strong>Autocross:</strong> Envolve a navegação de um percurso
            técnico marcado por cones para o tempo mais rápido.
          </li>
          <li>
            <strong>Endurance:</strong> Avalia a confiabilidade e eficiência de
            combustível do carro em uma corrida de resistência de alta tensão.
          </li>
        </ul>

        <h2>Nossa Equipa</h2>
        <p>
          Bem-vindo à nossa equipa de Formula Student! Somos um grupo de
          estudantes apaixonados dedicados a empurrar os limites da engenharia
          automotiva. Nossa equipa colabora para projetar e construir carros de
          corrida de alto desempenho, competindo em eventos nacionais e
          internacionais.
        </p>

        <h2>Membros da Equipa</h2>

        <ul>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="3em"
              viewBox="0 0 640 512"
              style={{ margin: "20px" }}
            >
              <path
                fill="#409ed4"
                d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"
              />
            </svg>
            João Silva - Capitão da Equipa
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="3em"
              viewBox="0 0 512 512"
              style={{ margin: "20px" }}
            >
              <path
                fill="#409ed4"
                d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
              />
            </svg>
            Maria Souza - Líder de Design
          </li>
          <li>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="3em"
              viewBox="0 0 640 512"
              style={{ margin: "20px" }}
            >
              <path
                fill="#409ed4"
                d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
              />
            </svg>
            Carlos Oliveira - Chefe de Mecânica
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUsPage;
