<template>
  <div>
    <div id="works" ref="works">
      <navigator-work
        section="Photo Phone"
        previous_section="Menú"
        previous_url="/index"
      />
    </div>
    <div class="content">
      <div class="information">
        <div id="principal-text-div">
          <p>
            ﾟ･*:.｡*:ﾟ･♡<br />
            .｡.:*✧ galeria sin razón<br />
            no reason gallery ✧*:.｡.<br />
            ♡･ﾟ:*｡.:*･ﾟ
          </p>
        </div>
        <div>
          <p id="secondary-text-div">
            photo phone<br />
            2018-2022
          </p>
        </div>
        <div id="image-information">
          <img src="@/assets/photophone/cachorro.gif" width="230" alt="" />
        </div>
      </div>
      <div class="photos">
        <img
          class="image-gallery"
          v-for="(item, index) in images_1"
          :src="resolve_img_url(item)"
          height="384px"
          alt="index"
          :key="index"
          @click="showGallery(index, images_1)"
        />
      </div>
      <div class="photos">
        <img
          class="image-gallery"
          v-for="(item, index) in images_2"
          :src="resolve_img_url(item)"
          height="384px"
          alt="index"
          :key="index"
          @click="showGallery(index, images_2)"
        />
      </div>
    </div>
    <div v-if="image.visible">
      <div class="background-gallery" @mousemove="mouseMove" @click="clickImage" />
      <img
        id="image"
        :src="resolve_img_url(image.name)"
        :alt="image.description"
        height="600px"
        @mousemove="mouseMove"
        @click="clickImage"
      />
      <div id="close_image" @click="hideGallery" @mousemove="restoreMouse">
        <img alt="Cerrar" src="@/assets/gallery/cruz_info.png" height="30px" />
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
      images_1: [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
        "13.jpg",
        "14.jpg",
      ],
      images_2: [
        "15.jpg",
        "16.jpg",
        "17.jpg",
        "18.jpg",
        "19.jpg",
        "20.jpg",
        "21.jpg",
        "22.jpg",
        "23.jpg",
        "24.jpg",
        "25.jpg",
        "26.jpg",
        "27.jpg",
        "28.jpg",
      ],
      carousel: [],
      image: {
        visible: false,
        name: "1.jpg",
      },
      location_cursor: "",
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
    showGallery: function (index, list) {
      this.carousel = list;
      this.image.name = list[index];
      this.image.visible = true;
      this.actual_image_index = index;
      window.addEventListener("keyup", this.keyup);
    },
    leftImage: function () {
      let quantity_images = this.carousel.length;
      this.actual_image_index = (this.actual_image_index - 1) % quantity_images;
      this.image.name = this.carousel[this.actual_image_index];
    },
    rightImage: function () {
      let quantity_images = this.carousel.length;
      this.actual_image_index = (this.actual_image_index + 1) % quantity_images;
      this.image.name = this.carousel[this.actual_image_index];
    },
    hideGallery: function () {
      this.image.visible = false;
    },
    clickImage: function () {
      if (this.location_cursor === "left") {
        this.leftImage();
      } else {
        this.rightImage();
      }
    },
    restoreMouse: function () {
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
  background-color: #252323;
  margin-top: 66px;
  margin-left: 33px;
  margin-right: 33px;
}
p {
  color: #03ff00;
  font-family: "Paprika", regular, serif;
}

.content {
  display: flex;
  justify-content: flex-start;
}

.information {
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

#principal-text-div{
  max-width: 200px;
  margin-top: 200px;
  text-align: left;
  font-size: 16px;
}

#secondary-text-div{
  margin-top: 20px;
  font-size: 10px;
  text-align: left;
}

#image-information{
  margin-top: 100px;
}

.photos {
  width: 625px;
  max-height: 740px;
  margin-left: 60px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
}
.image-gallery {
  margin-bottom: 10px;
  margin-right: 15px;
}

.background-gallery {
  z-index: 98;
  background: rgb(37, 35, 35, 0.8);
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  position: fixed;
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
  top: 50%;
  left: 3%;
  width: 43px;
  height: 42px;
  background-color: #B1B2B5;
}
#right_image {
  z-index: 100;
  position: fixed;
  top: 50%;
  right: 3%;
  width: 43px;
  height: 42px;
  background-color: #B1B2B5;
}
#close_image {
  z-index: 100;
  position: fixed;
  top: 3%;
  right: 3%;
}
</style>
