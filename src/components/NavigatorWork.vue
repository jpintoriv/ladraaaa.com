<template>
  <div id="nav">
    <div class="text">{{ section }}</div>
    <a :href="previous_url">
      <img
        src="@/assets/home/gif_menu.gif"
        height="80"
        width="80"
       alt=""/>
      <div class="text text-image">{{ previous_section }}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: "NavigatorWork",
  props: {
    section: String,
    previous_section: String,
    previous_url: String,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Paprika&display=swap");
#nav {
  display: flex;
  justify-content: space-between;
  z-index: 99;
}

.text {
  color: #03ff00;
  font-size: 24px;
  font-family: "Paprika", regular, serif;
  max-width: 230px;
  height: 0;
}

.text-image {
  font-size: 18px;
  width: 80px;
  position: relative;
  top: -50px;
  text-align: center;

}

#section {
  margin-right: 1px;
}
</style>
