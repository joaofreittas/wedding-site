<template>
  <div>

    <div class="casal mt-3">
      <img class="img-casal" src="../../static/casal.jpeg" alt="">
    </div>
    <div class="decoration">
      <img class="flower" src="../../static/ramos2.png" alt="" />
    </div>
    <section class="map">
      <b-list-group>
          <a href="https://goo.gl/maps/x8swEqMjjC4rzeJh7" target="blank">Acessar Mapa</a>
      </b-list-group>
      <iframe class="mt-2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.147082642339!2d-48.55720218449158!3d-25.566772944571284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94db900314fd0a97%3A0x89f9c53dcfa8d4df!2sCh%C3%A1cara%20SINTRAPORT!5e0!3m2!1spt-BR!2sbr!4v1676216145696!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <section class="form mt-1">
      </section>

    </section>

  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
<style>

.map {
  margin: 0 auto;
  text-align: center;
  max-width: 500px;
}

.map iframe {
  max-width: 300px;
  max-height: 300px;
}
.decoration {
  margin: 0 auto;
  text-align: center;
}
.flower {
  max-width: 150px;
}
.casal {
  margin: 0 auto;
  max-width: 500px;
   text-align: center;
}
.img-casal {
  margin: 0 auto;
  max-width: 100px;
  border-radius: 50%;
}
</style>
