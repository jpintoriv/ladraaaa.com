<template>
  <div ref="draggableContainer" id="draggable-container">
    <img
      @mousedown="dragMouseDown"
      :src="resolve_img_url(image_)"
      :alt="alt"
      width="500px"
    />
  </div>
</template>

<script>
export default {
  name: "DraggableDiv",
  props: {
    alt: String,
    image_: String,
    index_: Number,
  },
  data: function () {
    return {
      positions: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0,
      },
    };
  },
  mounted: function(){

    let _sign = Math.random() < 0.5 ? -1 : 1;
    let random_top = Math.floor(Math.random()*(120-50)+50) * _sign;
    let top = 200 + (400 * (Math.trunc(this.index_/3))) + random_top;
    this.$refs.draggableContainer.style.top = top+"px";

    _sign = Math.random() < 0.5 ? -1 : 1;

    let random_left = Math.floor(Math.random()*(120-50)+50) * _sign;
    let left = 200 + (((window.innerWidth)/3 -200 )* (this.index_%3)) + random_left;
    this.$refs.draggableContainer.style.left = left+"px";

  },
  methods: {
    dragMouseDown: function (event) {
      event.preventDefault();
      // get the mouse cursor position at startup:
      this.positions.clientX = event.clientX;
      this.positions.clientY = event.clientY;
      document.onmousemove = this.elementDrag;
      document.onmouseup = this.closeDragElement;
    },
    elementDrag: function (event) {
      event.preventDefault();
      this.positions.movementX = this.positions.clientX - event.clientX;
      this.positions.movementY = this.positions.clientY - event.clientY;
      this.positions.clientX = event.clientX;
      this.positions.clientY = event.clientY;
      // set the element's new position:
      this.$refs.draggableContainer.style.top =
        this.$refs.draggableContainer.offsetTop -
        this.positions.movementY +
        "px";
      this.$refs.draggableContainer.style.left =
        this.$refs.draggableContainer.offsetLeft -
        this.positions.movementX +
        "px";
    },
    closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
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
#draggable-container {
  position: absolute;
  z-index: 9;
}
</style>
