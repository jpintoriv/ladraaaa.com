<template>
  <div class="principal" @click="to_index()">
    <img class="image" v-show="seen" alt="Logo Inicial" src="../assets/home/gabi.gif" />
    <a href="/index">
      <img
        @mouseover="activateLetters"
        @mouseleave="activateLetters"
        alt="Logo Inicial"
        src="../assets/home/logo_inicial.png"
      />
    </a>
    <img class="image" v-show="seen" alt="Logo inicial" src="../assets/home/ladra.gif" />
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
  mounted: function() {
    console.log(this.$refs.initialVideo);
  },
  methods: {
    activateLetters() {
      this.seen = !this.seen;
    },
    to_index() {
      this.$router.push("/path");
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
.image{
  max-width: 640px;
}
</style>
