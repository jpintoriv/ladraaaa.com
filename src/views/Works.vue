<template>
  <div id="navigator-images">
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
      <div id="left_image">
        <img
          :src="resolve_img_url(left_image)"
          :alt="image.description"
          height="300px"
          @click="leftImage"
        />
      </div>
      <div id="image">
        <img
          id="center-image"
          :src="resolve_img_url(image.name)"
          :alt="image.description"
        />
      </div>
      <div id="right_image">
        <img
          :src="resolve_img_url(right_image)"
          :alt="image.description"
          height="300px"
          @click="rightImage"
        />
      </div>
      <div class="gallery-text">{{ image.description }}</div>
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
      left_image: "",
      right_image: "",
      actual_image_index: 0,
    };
  },
  methods: {
    keyup: function (event) {
      event.preventDefault();
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        if (this.left_image) {
          this.leftImage();
        }
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
      this.right_image = this.carousel[1].name;
      this.left_image = this.carousel[this.carousel.length - 1].name;
      this.image.visible = true;
      window.addEventListener("keyup", this.keyup);
    },
    hideGallery: function () {
      this.image.visible = false;
      this.carousel.shift();
      this.left_image = "";
    },
    leftImage: function () {
      let quantity_images = this.carousel.length;
      if (this.actual_image_index === 0) {
        this.actual_image_index = quantity_images - 1;
      } else {
        this.actual_image_index =
          (this.actual_image_index - 1) % quantity_images;
      }
      this.image.name = this.carousel[this.actual_image_index].name;
      if (this.actual_image_index === 0) {
        this.left_image = this.carousel[quantity_images - 1].name;
      } else {
        this.left_image =
          this.carousel[(this.actual_image_index - 1) % quantity_images].name;
      }
      this.right_image =
        this.carousel[(this.actual_image_index + 1) % quantity_images].name;
    },
    rightImage: function () {
      let quantity_images = this.carousel.length;
      this.actual_image_index = (this.actual_image_index + 1) % quantity_images;
      this.image.name = this.carousel[this.actual_image_index].name;
      this.left_image =
        this.carousel[
          (this.actual_image_index - 1 + quantity_images) % quantity_images
        ].name;
      this.right_image =
        this.carousel[
          (this.actual_image_index + 1 + quantity_images) % quantity_images
        ].name;
    },
    resolve_img_url: function (path) {
      console.log("HOlaaa")
      console.log(path)
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
  background-color: #ced0d0;
  margin-top: 66px;
  margin-left: 33px;
  margin-right: 33px;
  overflow-y: scroll;
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
#center-image{
  max-height: 600px;
  max-width: 800px;
}
#image {
  z-index: 100;
  position: fixed;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
#left_image {
  z-index: 100;
  position: fixed;
  left: 70px;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
}
#right_image {
  z-index: 100;
  position: fixed;
  right: 70px;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
}
.gallery-text {
  z-index: 100;
  color: #03ff00;
  font-size: 12px;
  font-family: "Paprika", regular, serif;
  bottom: 90px;
  left: 50%;
  position: fixed;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
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
#navigator-images{

}
</style>
