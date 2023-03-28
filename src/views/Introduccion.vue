<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mt-5.mb-5 Apreciado aprendiz, bienvenido a este componente formativo, orientado al conocimiento denominado cosecha y poscosecha. En este espacio, se abordarán temáticas relacionadas con la precosecha, cosecha y poscosecha de los productos agrícolas, fases en las que, de acuerdo con las especificaciones técnicas, se desarrollan actividades tendientes a disminuir las pérdidas a través de un adecuado manejo técnico que, a la vez, permite la obtención de productos de buena calidad. En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:      
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/3fHDdKRxuvM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video     
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
