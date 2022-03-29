<template>
  <div>
    <navigator-work
      section="Obra"
      previous_section="Home"
      previous_url="/index"
    />
    <draggable v-model="works">
      <div v-for="(list, i) in works" :key="i" class="item">
        <div>
        <h3>
        {{list}}
        </h3>
        <img :src=resolve_img_url(list) height="235px" width="235px" alt="hola" />
        </div>
      </div>
    </draggable>
  </div>
</template>

<script>
import NavigatorWork from "@/components/NavigatorWork.vue";
import draggable from "vuedraggable";

export default {
  name: "Works",
  components: { NavigatorWork, draggable },
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
