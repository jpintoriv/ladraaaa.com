<template>
  <div>
    <div id="works" ref="works">
      <navigator-work
        section="Dirección de Arte"
        previous_section="Menú"
        previous_url="/index"
      />
      <div>
        <DraggableDiv
          v-for="(work, index) in works"
          v-bind:image_="work.name"
          v-bind:alt="work.name"
          v-bind:index_="index"
          v-bind:key="work.index"
          @click.native="showGallery(index)"
        />
      </div>
    </div>
    <div v-if="image.visible">
      <div class="background-gallery" @click="hideGallery" />
      <img
        id="top_image"
        :src="resolve_img_url(top_image)"
        :alt="image.description"
        height="300px"
        @click="leftImage"
      />
      <img
        id="image"
        :src="resolve_img_url(image.name)"
        :alt="image.description"
        height="600px"
        @keyup.left="leftImage"
      />
      <img
        id="right_image"
        :src="resolve_img_url(right_image)"
        :alt="image.description"
        height="300px"
        @click="rightImage"
      />
      <div class="gallery-text">{{ image.description }}</div>
    </div>
  </div>
</template>

<script>
import NavigatorWork from "@/components/NavigatorWork.vue";
import DraggableDiv from "@/components/DraggableDiv";

export default {
  name: "Arts",
  components: { NavigatorWork, DraggableDiv },
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
    showGallery: function (index) {
      this.image.name = this.works[index].name;
      this.image.visible = true;
      this.carousel.push({ name: this.image.name });
    },
    hideGallery: function () {
      this.image.visible = false;
      this.carousel.splice(this.carousel.length, 1);
    },
    leftImage: function () {
      let quantity_images = this.carousel.length;
      this.actual_image_index = (this.actual_image_index - 1) % quantity_images;

      this.image.name = this.carousel[this.actual_image_index];
      this.top_image =
        this.carousel[
          (this.actual_image_index + 1 + quantity_images) % quantity_images
        ].name;
      this.right_image =
        this.carousel[
          (this.actual_image_index - 1 + quantity_images) % quantity_images
        ].name;
    },
    rightImage: function () {
      let quantity_images = this.carousel.length;
      this.actual_image_index = (this.actual_image_index + 1) % quantity_images;

      this.image.name = this.carousel[this.actual_image_index].name;
      this.top_image =
        this.carousel[
          (this.actual_image_index - 1 + quantity_images) % quantity_images
        ].name;
      this.right_image =
        this.carousel[
          (this.actual_image_index + 1 + quantity_images) % quantity_images
        ].name;
    },
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
  background-color: #cdbcdf;
  margin-top: 66px;
  margin-left: 33px;
  margin-right: 33px;
}
.background-gallery {
  z-index: 98;
  background: rgba(0, 0, 0, 0.7);
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  position: fixed;
}
#image {
  z-index: 100;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
#top_image {
  z-index: 100;
  position: absolute;
  left: 20%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
#right_image {
  z-index: 100;
  position: absolute;
  left: 80%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.gallery-text {
  z-index: 100;
  color: #03ff00;
  font-size: 12px;
  font-family: "Paprika", regular, serif;
  bottom: 90px;
  left: 50%;
  position: absolute;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
