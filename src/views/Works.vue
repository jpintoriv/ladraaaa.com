<template>
  <div>
    <navigator-work
      section="Obra"
      previous_section="Home"
      previous_url="/index"
    />
    <DraggableDiv image_="encarnacao.jpg" alt="hola" />
    <DraggableDiv image_="pendrive.jpg" alt="hola" />
    <DraggableDiv image_="riso.jpg" alt="hola" />
    <DraggableDiv image_="simulacro_obra.jpg" alt="hola" />
  </div>
</template>

<script>
import NavigatorWork from "@/components/NavigatorWork.vue";
import DraggableDiv from "@/components/DraggableDiv";

export default {
  name: "Works",
  components: { NavigatorWork, DraggableDiv },
  data() {
    return {
      works: ["encarnacao.jpg", "pendrive.jpg", "riso.jpg", "simulacro_obra.jpg"],
    };
  },
  methods: {
    resolve_img_url: function (path) {
      let images = require.context(
        "../assets/works/",
        false,
        /\.png$|\.jpg$|\.gif/
      );
      return images(`./${path}`);
    },
  },
};
</script>

<style>
body {
  background-color: #3b3c42;
  margin-top: 66px;
  margin-left: 33px;
  margin-right: 33px;
}
</style>
