<template>
  <div>
    <video id="background-video" autoplay loop muted poster="../assets/home/gif_menu.gif">
      <source src="../assets/index/background.mp4" type="video/mp4">
    </video>
    <div class="sections">
      <SectionImage
        text="OBRA"
        alt="Obra"
        leave_image="obra_leave.jpg"
        over_image="obra_over.gif"
        url="/works"
      />
      <SectionImage
        text="DIRECCIÓN DE ARTE"
        alt="Direccion de arte"
        leave_image="arte_leave.jpg"
        over_image="arte_over.gif"
        url="/artdirection"
      />
      <SectionImage
        text="ABOUT"
        alt="About"
        leave_image="about_leave.jpg"
        over_image="about_over.gif"
        url="/ABOUT"
      />
      <SectionImage
        text="PHOTO PHONE"
        alt="photo-phone"
        leave_image="contacto_leave.jpg"
        over_image="contacto_over.gif"
        url="/photophone"
      />
      <SectionImage
        alt="Random"
        leave_image="random_leave.jpg"
        over_image="random_over.gif"
        url="#"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SectionImage from "@/components/SectionImage.vue";

export default {
  name: "Index",
  components: { SectionImage },
};
</script>


<style>
.sections {
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

#background-video {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
}
</style>