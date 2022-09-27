<template>
  <div>
    <div id="works" ref="works">
      <navigator-work
        section="About"
        previous_section="Menú"
        previous_url="/index"
      />
    </div>
    <div class="content">
    <div id="left-information">

    </div>
    <div id="right-information">

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
      images_1: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"],
      images_2: [
        "8.jpg",
        "9.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
        "13.jpg",
        "14.jpg",
      ],
      images_3: [
        "15.jpg",
        "16.jpg",
        "17.jpg",
        "18.jpg",
        "19.jpg",
        "20.jpg",
        "21.jpg",
      ],
      images_4: [
        "22.jpg",
        "23.jpg",
        "24.jpg",
        "25.jpg",
        "26.jpg",
        "27.jpg",
        "28.jpg",
      ],
    };
  },
  methods: {
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
  background-color: #ffffff;
  margin-top: 66px;
  margin-left: 33px;
  margin-right: 33px;
}
p {
  color: #03ff00;
  font-family: "Paprika", regular, serif;
}
img{
  margin-bottom: 10px;
}
.content {
  display: flex;
  align-items: stretch;
}

</style>
