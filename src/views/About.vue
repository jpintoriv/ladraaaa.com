<template>
  <div>
    <div id="works" ref="works">
      <navigator-work
        section="ABOUT"
        previous_section="Menú"
        previous_url="/index"
      />
    </div>
    <div class="content">
      <div id="left-information">
        <img src="@/assets/about/GABI_FOTOBIO.jpg" width="625" alt="" />
        <div id="contact">
          <a href="mailto:gabriela.claveria@gmail.com">gabriela.claveria@gmail.com</a>
          <br>
          <a href="https://www.instagram.com/ladraaaaa">@ladraaaaa</a>
          <br>
          <a href="https://www.soundcloud.com/ladraaa">soundcloud/ladraaa</a>
        </div>
        <div id="info-photo">
          Foto por Gonzalo Garcés
        </div>
      </div>

      <div id="right-information">
        <div id="language-text">
          ESP / ENG
        </div>
        <div class="title-text">
          BIO***
        </div>
        <div class="p-text">
          Gabriela Clavería ✦ (Chile, 1989) es diseñadora teatral, directora de arte y artista transdisciplinar en constante experimentación y cambio. Ha trabajado como diseñadora y técnico en compañías de teatro, como directora de arte en fotografía y videos, como tatuadora y DJ, pudiendo mezclar así la fotografía, video, teatro, música y moda. El trabajo colaborativo ha sido desde siempre una escuela para su trabajo y formación como artista y persona.
          <br>
          Teniendo como soportes creativos imágenes fijas, en movimiento, escultura e instalación, su constante indagación en soportes y formatos le ha permitido publicar y exponer en diversas publicaciones, fanzines, en muestras colectivas e individuales. Guiada por las emociones, lo sensible, la liviandad y el peso de la fluidez, su trabajo pretende una conexión con la naturaleza y la intuición, desestigmatizando lo vulnerable y la inconsistencia del cambio. En el año 2017 comenzó a indagar en la acumulación de desechos y basura como objetos creativos que le consuelan y le permiten resignificar una memoria cotidiana olvidada y dejada al margen, acercándose a una otredad encontrada en el espacio público. A comienzos del 2020 expuso El agua se va por la salida (BAJ Valparaíso, Chile, 2020), trabajo con el que logró materializar ideas entorno a la liberación de las emociones, encontrando la fluidez como concepto que cruza toda su obra y vida personal.
          <br>
          Actualmente reside en Lisboa, Portugal, donde ha logrado indagar en la performatividad de la materia misma y en acciones performativas, mezclando música en fiestas y otras acciones bajo el seudónimo de LADRA.
        </div>
        <div class="title-text">
          STATEMENT
        </div>
        <div class="p-text">
          Guiada por las emociones, lo sensible, la liviandad y el peso de la fluidez, experimento con lo que voy encontrando (me); basuras, rocas, hojas, agua, naturaleza e intuición. Veo mi trabajo como ejercicios de materialización de sentimientos, como un alivio que desestigmatice lo vulnerable y la inconsistencia del cambio. Trabajo con los deshechos como un acto de dar nuevas oportunidades y de encontrar belleza en lo dejado de lado.
          <br>
          Trabajo creando texturas y atmósferas como forma de encarnación y de devenir.
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
    return {
      images_1: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"],
      images_2: [
        "8.jpg",
        "9.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
        "13.jpg",
        "14.jpg",
      ],
      images_3: [
        "15.jpg",
        "16.jpg",
        "17.jpg",
        "18.jpg",
        "19.jpg",
        "20.jpg",
        "21.jpg",
      ],
      images_4: [
        "22.jpg",
        "23.jpg",
        "24.jpg",
        "25.jpg",
        "26.jpg",
        "27.jpg",
        "28.jpg",
      ],
    };
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
  background-color: #ffffff;
  margin-top: 66px;
  margin-left: 33px;
  margin-right: 33px;
  font-family: "Paprika", regular, serif;
}
a {
  color: #03ff00;
  text-decoration: none;
}

.content {
  display: flex;
  align-items: stretch;
}

#left-information {
  width: 760px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 70px;
}

#contact{
  margin-top: 38px;
  color: #03ff00;
  font-size: 18px;
  text-align: left;
}

#info-photo{
  margin-top: 20px;
  width: 625px;
  color: #03ff00;
  font-size: 10px;
  text-align: center;
}

#right-information {
  width: 900px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

#language-text{
  color: #03ff00;
  margin-bottom: 35px;
  font-size: 17px;
}

.title-text{
  color: #03ff00;
  margin-bottom: 10px;
  font-size: 13px;
}

.p-text{
  font-size: 14px;
  text-align: left;
  margin-bottom: 13px;
}

br {
   display: block;
   margin: 10px 0;
}

</style>
