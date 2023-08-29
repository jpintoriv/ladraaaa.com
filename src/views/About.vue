<template>
  <div>
    <div id="works" ref="works">
      <navigator-work
        section="ABOUT"
        previous_section="Menú"
        previous_url="/index"
      />
    </div>
    <div class="about-content">
      <div class="contact">
        <div class="contact-item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:gabriela.claveria@gmail.com"
            >gabriela.claveria@gmail.com
          </a>
        </div>
        <div class="contact-item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/ladraaaaa"
            >@ladraaaaa
          </a>
        </div>
        <div class="contact-item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.soundcloud.com/ladraaa"
            >soundcloud/ladraaa
          </a>
        </div>
      </div>
    </div>
    <div class="content">
      <div id="left-information">
        <p class="p-text">
          <em class="title-text">BIO✦</em>
          Gabriela Clavería (Chile, 1989) es diseñadora teatral, directora de arte y artista transdisciplinar en constante experimentación y cambio. Ha trabajado como diseñadora y técnico en compañías de teatro, como directora de arte en fotografía y videos, como tatuadora y DJ, pudiendo mezclar así la fotografía, video, teatro, música y moda. El trabajo colaborativo ha sido desde siempre una escuela para su trabajo y formación como artista y persona.
          <br>
          Teniendo como soportes creativos imágenes fijas, en movimiento, escultura e instalación, su constante indagación en soportes y formatos le ha permitido publicar y exponer en diversas publicaciones, fanzines, en muestras colectivas e individuales. Guiada por las emociones, lo sensible, la liviandad y el peso de la fluidez, su trabajo pretende una conexión con la naturaleza y la intuición, desestigmatizando lo vulnerable y la inconsistencia del cambio. En el año 2017 comenzó a indagar en la acumulación de desechos y basura como objetos creativos que le consuelan y le permiten resignificar una memoria cotidiana olvidada y dejada al margen, acercándose a una otredad encontrada en el espacio público. A comienzos del 2020 expuso El agua se va por la salida (BAJ Valparaíso, Chile, 2020), trabajo con el que logró materializar ideas entorno a la liberación de las emociones, encontrando la fluidez como concepto que cruza toda su obra y vida personal.
          <br>
          Actualmente reside en Lisboa, Portugal, donde ha logrado indagar en la performatividad de la materia misma y en acciones performativas, mezclando música en fiestas y otras acciones bajo el seudónimo de LADRA.
        </p>
        <div class="p-text">
        <em class="title-text">
          STATEMENT
        </em>
          Guiada por las emociones, lo sensible, la liviandad y el peso de la fluidez, experimento con lo que voy encontrando (me); basuras, rocas, hojas, agua, naturaleza e intuición. Veo mi trabajo como ejercicios de materialización de sentimientos, como un alivio que desestigmatice lo vulnerable y la inconsistencia del cambio. Trabajo con los deshechos como un acto de dar nuevas oportunidades y de encontrar belleza en lo dejado de lado.
          <br>
          Trabajo creando texturas y atmósferas como forma de encarnación y de devenir.
        </div>
      </div>

      <div id="right-information">
        <div id="language-text">
          ESP / ENG
        </div>
        <div id="section-text">
          BIO
        </div>
        <div id="section-text">
          STATEMENT
        </div>
        <div id="section-text">
          CV
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import NavigatorWork from "@/components/NavigatorWork.vue";

export default {
  name: "PhotoPhone",
  components: { NavigatorWork },
  data: function () {
  },
  methods: {
    resolve_img_url: function (path) {
      if (path === "") {
        return "";
      }
      let images = require.context(
        "../assets/photophone/images/",
        false,
        /\.png$|\.jpg$|\.gif/
      );
      return images(`./${path}`);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Paprika&display=swap");

body {
  background-color: #B1B2B5;
  margin-top: 66px;
  margin-left: 33px;
  margin-right: 33px;
  font-family: "Paprika", regular, serif;
}
a {
  color: #03ff00;
  text-decoration: none;
}
.about-content {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-right: 120px;
}

.content {
  padding-top: 70px;
  display: flex;
  align-items: stretch;
}

#left-information {
  width: 1400px;
  display: flex;
  flex-direction: column;
  margin-left: 80px;
}

.contact{
  color: #03ff00;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-right: 200px;
}

.contact-item{
  font-size: 24px;
  font-family: "Paprika", regular, serif;
}

#info-photo{
  margin-top: 20px;
  width: 625px;
  color: #03ff00;
  font-size: 10px;
  text-align: center;
}

#right-information {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 70px;
}

#language-text{
  color: #03ff00;
  margin-bottom: 35px;
  font-size: 17px;
  font-family: "Paprika", regular, serif;
}
#section-text{
  color: #03ff00;
  font-size: 17px;
  font-family: "Paprika", regular, serif;
}

.title-text{
  color: #03ff00;
  font-size: 20px;
}

.p-text{
  font-size: 30px;
  text-align: left;
  margin-bottom: 13px;
  font-family: "Paprika", regular, serif;
}

br {
  display: block;
  margin: 10px 0;
}
</style>
