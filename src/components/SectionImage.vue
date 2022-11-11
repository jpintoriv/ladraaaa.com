<template>
  <a
    :rel="rel_"
    :href="url"
    id="section"
    @mouseover="overImage"
    @mouseleave="leaveImage"
  >
    <img
      :src="resolve_img_url(image_)"
      :alt="alt"
      height="235px"
      width="235px"
    />
    <div class="text" v-show="seen">{{ text }}</div>
  </a>
</template>

<script>
export default {
  name: "SectionImage",
  props: {
    text: String,
    alt: String,
    leave_image: String,
    over_image: String,
    url: String,
    rel_: String,
  },
  data() {
    return {
      image_: this.leave_image,
      text_: this.text,
      seen: false,
    };
  },
  methods: {
    overImage() {
      this.image_ = this.over_image;
      this.seen = true;
    },
    leaveImage() {
      this.image_ = this.leave_image;
      this.seen = false;
    },
    resolve_img_url: function (path) {
      let images = require.context(
        "../assets/index/",
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
.text {
  color: #03ff00;
  font-size: 24px;
  font-family: "Paprika", regular, serif;
  max-width: 230px;
  height: 0;
  z-index: 100;
  position: relative;
  top: -150px;
}

#section {
  margin-right: 1px;
  text-decoration: none;
}
</style>
