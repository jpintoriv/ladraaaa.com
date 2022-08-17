<template>
  <div>

    <div id="works" ref="works">
      <navigator-work
        section="Obra"
        previous_section="Home"
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
        id="image"
        :src="resolve_img_url(image.name)"
        :alt="image.description"
        height="600px"
      />
      <div class="gallery-text">{{image.description}}</div>
    </div>
  </div>
</template>

<script>
import NavigatorWork from "@/components/NavigatorWork.vue";
import DraggableDiv from "@/components/DraggableDiv";

export default {
  name: "Works",
  components: { NavigatorWork, DraggableDiv },
  data: function () {
    return {
      works: [
        { name: "encarnacao.jpg" },
        { name: "pendrive.jpg" },
        { name: "riso.jpg" },
        { name: "simulacro_obra.jpg" },
      ],
      image: {
        visible: false,
        name: "encarnacao.jpg",
        description: "lorem ipsum",
      },
    };
  },
  methods: {
    showGallery: function(index){
      this.image.name = this.works[index].name;
      this.image.visible = true;
    },
    hideGallery: function (){
      this.image.visible = false;
    },
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
@import url("https://fonts.googleapis.com/css2?family=Paprika&display=swap");

body {
  background-color: #90c0e7;
  margin-top: 66px;
  margin-left: 33px;
  margin-right: 33px;
}
.background-gallery {
  z-index: 98;
  background: rgba(0,0,0,0.7);
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
.gallery-text{
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
