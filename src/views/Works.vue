<template>
  <div>
    <div id="works" ref="works">
      <navigator-work
        section="Obra"
        previous_section="Home"
        previous_url="/index"
      />
      <div class="photos">
        <img
          class="image-gallery"
          v-for="(work, index) in works"
          :src="resolve_img_url(work.name)"
          height="505px"
          alt="index"
          :key="work.index"
          @click="showGallery(index)"
        />
      </div>
    </div>
    <div v-if="image.visible" class="gallery">
      <div class="background-gallery" @click="hideGallery" />
      <div id="image">
        <img
          id="center-image"
          :src="resolve_img_url(image.name)"
          :alt="image.description"
          @mousemove="mouseMove"
          @mouseleave="leaveImage"
          @click="clickImage"
        />
      </div>
      <div class="gallery-info-container">
        <div class="gallery-counter">oooo</div>
        <div class="gallery-text">{{ image.description }}</div>
        <div class="gallery-info">info</div>
      </div>

      <div id="close_image" @click="hideGallery">
        <img alt="Cerrar" src="@/assets/gallery/cruz.jpg" height="30px" />
      </div>
    </div>
  </div>
</template>

<script>
import NavigatorWork from "@/components/NavigatorWork.vue";

export default {
  name: "Works",
  components: { NavigatorWork },
  data: function () {
    return {
      works: [
        { name: "encarnacao.jpg" },
        { name: "pendrive.jpg" },
        { name: "riso.jpg" },
        { name: "simulacro_obra.jpg" },
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
      actual_image_index: 0,
      location_cursor: "",
    };
  },
  methods: {
    keyup: function (event) {
      event.preventDefault();
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        this.leftImage();
        return false;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        this.rightImage();
      }
      return false;
    },
    showGallery: function (index) {
      this.carousel.unshift({ name: this.works[index].name });
      this.image.name = this.carousel[0].name;
      this.image.visible = true;
      window.addEventListener("keyup", this.keyup);
    },
    hideGallery: function () {
      this.image.visible = false;
      this.carousel.shift();
    },
    leftImage: function () {
      let quantity_images = this.carousel.length;
      if (this.actual_image_index === 0) {
        this.actual_image_index = quantity_images - 1;
      } else {
        this.actual_image_index = this.actual_image_index - 1;
      }
      this.image.name = this.carousel[this.actual_image_index].name;
    },
    rightImage: function () {
      let quantity_images = this.carousel.length;
      if (this.actual_image_index === quantity_images - 1) {
        this.actual_image_index = 0;
      } else {
        this.actual_image_index = this.actual_image_index + 1;
      }
      this.image.name = this.carousel[this.actual_image_index].name;
    },
    leaveImage: function () {
      document.body.style.cursor = "default";
      this.location_cursor = "";
    },
    mouseMove: function (event) {
      const middle = window.innerWidth / 2;
      if (event.pageX < middle) {
        document.body.style.cursor = "w-resize";
        this.location_cursor = "left";
      } else {
        document.body.style.cursor = "e-resize";
        this.location_cursor = "right";
      }
    },
    clickImage: function () {
      if (this.location_cursor === "left") {
        this.leftImage();
      } else {
        this.rightImage();
      }
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
  background-color: #ffffff;
  margin-top: 66px;
  margin-left: 33px;
  margin-right: 33px;
  overflow-y: scroll;
}
.background-gallery {
  background: rgba(255, 255, 255, 1);
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  position: fixed;
}
#center-image {
  max-height: 640px;
}
#image {
  z-index: 100;
  position: fixed;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.gallery-text {
  z-index: 100;
  color: #03ff00;
  font-size: 20px;
  font-family: "Paprika", regular, serif;
}

.gallery-info-container {
  z-index: 100;
  color: #03ff00;
  font-size: 17px;
  font-family: "Paprika", regular, serif;
  bottom: 90px;
  left: 50%;
  position: fixed;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  width: 600px;
}

.photos {
  padding-top: 100px;
  margin-left: 43px;
  margin-right: 43px;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
}
.image-gallery {
  margin-bottom: 10px;
}

#close_image {
  z-index: 100;
  position: fixed;
  top: 3%;
  right: 3%;
}
</style>
