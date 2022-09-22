<template>
  <div>
    <div id="works" ref="works">
      <navigator-work
        section="Photo Phone"
        previous_section="Menú"
        previous_url="/index"
      />
    </div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>1 of 2</b-col>
        <b-col>2 of 2</b-col>
      </b-row>

      <b-row>
        <b-col>1 of 3</b-col>
        <b-col>2 of 3</b-col>
        <b-col>3 of 3</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavigatorWork from "@/components/NavigatorWork.vue";

export default {
  name: "PhotoPhone",
  components: { NavigatorWork },
  data: function () {
    return {
      works: [
        { name: "encarnacao.jpg" },
        { name: "pendrive.jpg" },
        { name: "riso.jpg" },
        { name: "simulacro_obra.jpg" },
      ],
      carousel: [
        { name: "expogabi_1.jpg" },
        { name: "expogabi_2.jpg" },
        { name: "expogabi_3.jpg" },
        { name: "expogabi_4.jpg" },
        { name: "expogabi_5.jpg" },
      ],
      image: {
        visible: false,
        name: "encarnacao.jpg",
        description: "lorem ipsum",
      },
      top_image: "",
      right_image: "expogabi_1.jpg",
      actual_image_index: 0,
    };
  },
  methods: {
    resolve_img_url: function (path) {
      if (path === "") {
        return "";
      }
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
@import url("https://fonts.googleapis.com/css2?family=Paprika&display=swap");

body {
  background-color: #252323;
  margin-top: 66px;
  margin-left: 33px;
  margin-right: 33px;
}
</style>
