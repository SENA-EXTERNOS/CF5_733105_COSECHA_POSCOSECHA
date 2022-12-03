<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mt-5 En este componente formativo está consolidado el material de estudio para que pueda identificar las etapas de precosecha, cosecha y poscosecha, como también cada una de las actividades que se realizan con la finalidad de disminuir las pérdidas y lograr la obtención de productos inocuos y seguros para el consumo, alargando su vida útil, conservando la calidad y regulando los procesos de oferta y demanda mediante un control en la comercialización con la guarda del producto para aprovisionar en el tiempo de no cosecha.
    p.mb-5 Así pues, un resumen de lo visto en el presente componente puede visualizarse en el siguiente mapa conceptual

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
