<template>
  <div class="principal">
    <img
      class="image"
      v-show="seen"
      alt="Logo Inicial"
      src="../assets/home/gabi.gif"
    />
    <div
      @mouseover="activateLetters"
      @mouseleave="activateLetters"
      @click="to_index()"
    >
      <img
        alt="Logo Inicial"
        src="../assets/home/gif_menu.gif"
        width="370px"
        height="380px"
      />
    </div>
    <img
      class="image"
      v-show="seen"
      alt="Logo inicial"
      src="../assets/home/ladra.gif"
    />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      seen: false,
    };
  },
  methods: {
    activateLetters() {
      this.seen = !this.seen;
    },
    to_index() {
      this.$router.push("/index");
    },
  },
};
</script>

<style>
.principal {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.image {
  width: 370px;
}
</style>
