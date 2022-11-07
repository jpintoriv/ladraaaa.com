<template>
  <div id="nav">
    <div>
      <div class="text text-container">
        <div
          class="word"
          v-for="(word, index) in this.create_section()"
          v-bind:key="index"
        >
          <span v-for="(letter, index_) in word" v-bind:key="index_"
            >{{ letter }}
          </span>
        </div>
      </div>
    </div>
    <a :href="previous_url">
      <img src="@/assets/home/gif_menu.gif" height="80" width="80" alt="" />
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
  methods: {
    create_section() {
      let section_ = this.section.toUpperCase().split(' ');
      let section = [];
      for (let val of section_) {
        console.log(val);
        console.log(val.split(''));
        section.push(val.split(''));
      }
      console.log(section);
      return section;
    },
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

a {
  text-decoration: none;
}

.text {
  color: #03ff00;
  font-size: 24px;
  font-family: "Paprika", regular, serif;
  max-width: 300px;
  height: 0;
}

.text-container{
  display:flex;
}

.word{
  margin-left: 10px;
}

.text span {
  display: inline-block;
  -webkit-animation: wave-text 1s ease-in-out infinite;
  animation: wave-text 1s ease-in-out infinite;
}

.text span:nth-of-type(1) {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
.text span:nth-of-type(2) {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
.text span:nth-of-type(3) {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.text span:nth-of-type(4) {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.text span:nth-of-type(5) {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
.text span:nth-of-type(6) {
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}
.text span:nth-of-type(7) {
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}
.text span:nth-of-type(8) {
  -webkit-animation-delay: 0.7s;
  animation-delay: 0.7s;
}
.text span:nth-of-type(9) {
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
}
@-webkit-keyframes wave-text {
  00% {
    transform: translateY(0em);
  }
  60% {
    transform: translateY(-0.6em);
  }
  100% {
    transform: translateY(0em);
  }
}

@keyframes wave-text {
  00% {
    transform: translateY(0em);
  }
  60% {
    transform: translateY(-0.6em);
  }
  100% {
    transform: translateY(0em);
  }
}

.text-image {
  font-size: 18px;
  width: 80px;
  position: relative;
  top: -58px;
  text-align: center;
}
</style>
