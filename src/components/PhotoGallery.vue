<template>
  <div v-if="image.visible" class="gallery">
    <div class="background-gallery" @click="hideGallery" />
    <div id="image">
      <img
        id="center-image"
        :src="resolve_img_url(actual_image.source)"
        :alt="actual_image.name"
        @mousemove="mouseMove"
        @mouseover="overImage"
        @mouseleave="leaveImage"
        @click="clickImage"
      />
    </div>
    <div class="gallery-info">
      <div class="gallery-counter">oooo</div>
      <div class="gallery-text">{{ image.description }}</div>
      <div class="gallery-info">info</div>
    </div>

    <div id="close_image" @click="hideGallery">
      <img alt="Cerrar" src="@/assets/gallery/cruz.jpg" height="30px" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoGallery",
  props: {
    images: Array,
  },
  data: function () {
    return {
      actual_image: {
        source: "",
        name: "",
        description: "",
      },
      carousel: this.props.images,
      actual_image_index: 0,
      location_cursor: "",
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
  },
  leftImage: function () {
    let quantity_images = this.carousel.length;
    if (this.actual_image_index === 0) {
      this.actual_image_index = quantity_images - 1;
    } else {
      this.actual_image_index = (this.actual_image_index - 1) % quantity_images;
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
};
</script>

<style scoped>
.background-gallery {
  z-index: 98;
  background: rgba(255, 255, 255, 1);
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  position: fixed;
}
#center-image {
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
#close_image {
  z-index: 100;
  position: fixed;
  top: 3%;
  right: 3%;
}
</style>