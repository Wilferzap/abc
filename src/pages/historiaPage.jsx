import React from "react";
import NavGeneral from "../components/general/NavGeneral";
import TextAnimationAutores from "../components/autores/textAnimationAutores";

const HistoriaPage = () => {
  return (
    <div className="general">
      <div style={{ position: "fixed", width: "100%" }}>
        <NavGeneral></NavGeneral>
      </div>
      <div
        style={{
          width: "100%",
          maxWidth: "1500px",
          margin: "auto",

          // padding: "0px 50px",
        }}
      >
        <div className="fondoSm"></div>
        <div className="container1 row">
          <div className="animationText">
            <TextAnimationAutores></TextAnimationAutores>
          </div>
          <div className="textHistoria">
            <h3 className="textTitle">Orígenes de la Ilustración Realista</h3>
            <p>
              El realismo en el arte se desarrolló como una reacción contra los
              estilos artísticos más idealizados y románticos. En el siglo XIX,
              artistas comenzaron a buscar una representación más fiel de la
              realidad, explorando técnicas que capturaran detalles minuciosos y
              expresiones auténticas.
            </p>
            <br></br>
            <h3 className="textTitle">Ilustración Realista y el Carboncillo</h3>
            <p>
              La técnica del carboncillo, con su capacidad para crear sombras y
              detalles precisos, se convirtió en una herramienta esencial para
              los artistas realistas. Se destacó en la representación de
              texturas y la creación de contrastes intensos, permitiendo la
              creación de obras que parecieran fotográficas en su nivel de
              detalle.
            </p>
            <br></br>
            <h3 className="textTitle">Contribuciones de Artistas Clásicos</h3>
            <p>
              Maestros del Renacimiento como Leonardo da Vinci y Michelangelo
              realizaron estudios anatómicos detallados, sentando las bases para
              la representación precisa del cuerpo humano. A lo largo de los
              siglos, artistas como Rembrandt y Dürer también dejaron huella en
              la tradición de la ilustración realista.
            </p>
          </div>
          {/* <div className="imgHistoria col-4 "></div> */}
        </div>
        <div>
          <h1
            style={{
              padding: "50px",
            }}
          >
            Escuela Rusa
          </h1>
        </div>

        <div className="container2 row">
          <div className="imgHistoria2 col-4 "></div>
          <div className="textHistoria2 col-8 ">
            <h3 className="textTitle">Auge de la Escuela Rusa</h3>
            <p>
              A finales del siglo XIX y principios del XX, la escuela rusa
              desempeñó un papel crucial en el desarrollo de la ilustración
              realista. Artistas rusos se distinguen por su enfoque detallado y
              a menudo emotivo de la realidad.
            </p>
            <br></br>
            <h3 className="textTitle">
              Ilya Repin y la Escuela Rusa de Pintura Realista
            </h3>
            <p>
              Ilya Repin, un destacado pintor ruso del realismo, fue una figura
              clave en la Escuela Rusa de Pintura Realista. Sus obras, como "Los
              zaporogos escriben una carta al Sultán", destacan por la
              representación detallada y la intensidad emocional.
            </p>
            <br></br>
            <h3 className="textTitle">
              La Importancia de Repin en el Carboncillo
            </h3>
            <p>
              Repin y otros artistas de la escuela rusa a menudo experimentaron
              con el carboncillo para lograr efectos dramáticos y detallados en
              sus obras. La técnica del carboncillo se convirtió en una
              herramienta esencial para transmitir la atmósfera y los matices
              emocionales de sus temas.
            </p>
            <br></br>
            <h3 className="textTitle"> Legado y Influencia Continua</h3>
            <p>
              La tradición de la ilustración realista, especialmente en el uso
              del carboncillo, ha perdurado a lo largo del tiempo. La influencia
              de la escuela rusa se puede observar en artistas contemporáneos
              que buscan capturar la realidad con una atención meticulosa a los
              detalles y la expresión. La historia de la ilustración realista,
              en particular con la aplicación del carboncillo, es una narrativa
              rica en evolución artística y técnica, con la escuela rusa
              desempeñando un papel significativo en su desarrollo y difusión.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoriaPage;
