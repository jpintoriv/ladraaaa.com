<template>
  <div class="sections">
    <SectionImage
      text="OBRA"
      alt="Obra"
      leave_image="obra_leave.jpg"
      over_image="obra_over.gif"
    />
    <SectionImage
      text="DIRECCIÓN DE ARTE"
      alt="Direccion de arte"
      leave_image="arte_leave.jpg"
      over_image="arte_over.gif"
    />
    <SectionImage
      text="ABOUT + STATEMENT"
      alt="About"
      leave_image="about_leave.jpg"
      over_image="about_over.gif"
    />
    <SectionImage
      text="CONTACTO"
      alt="contacto"
      leave_image="contacto_leave.jpg"
      over_image="contacto_over.gif"
    />
    <SectionImage
      alt="Random"
      leave_image="random_leave.jpg"
      over_image="random_over.gif"
    />
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
</style>