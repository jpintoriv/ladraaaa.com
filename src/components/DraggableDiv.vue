<template>
  <div ref="draggableContainer" id="draggable-container">
    <img
      @mousedown="dragMouseDown"
      :src="resolve_img_url(image_)"
      :alt="alt"
      height="300px"
    />
  </div>
</template>

<script>
export default {
  name: "DraggableDiv",
  props: {
    alt: String,
    image_: String,
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
    let top = Math.floor(Math.random()*(1000-150+1)+150);
    this.$refs.draggableContainer.style.top = top+"px";

    let left = Math.floor(Math.random()*(1080+1)+50);
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
