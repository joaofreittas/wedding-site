<template>
  <div>

    <div class="casal mt-3">
      <img class="img-casal" src="../static/casal.jpeg" alt="">
    </div>
    <div class="decoration">
      <img class="flower" src="../static/ramos2.png" alt="" />
    </div>
    <!-- CONFIRMATION FORM  -->
    <section class="form mt-3">
      <b-list-group>
        <b-list-group-item>
          <a href="https://listas.pontofrio.com.br/joaoegabriele" target="_blank">Lista de Presentes</a>
        </b-list-group-item>
        <b-list-group-item>
          <a href="/confirmation">Confirmação de Presença</a>
        </b-list-group-item>
        <b-list-group-item>
          <a href="/location">Localização</a>
        </b-list-group-item>
      </b-list-group>
    </section>

  </div>
</template>

<script>

export default {
  name: 'LinksPage',
  data() {
    return {
      form: {
        name: '',
        message: ''
      },
      errorOccur: false
    }
  },
  methods: {
    confirm() {
      this.errorOccur = false;

      try {
        console.log("[confirm] :: form -->", this.form)
        this.clearForm()

      } catch(error) {
        console.log("[confirm] :: error occurs -->", error)
        this.errorOccur = true;

      } finally {

      }

    },
    clearForm() {
      this.form.name = ''
      this.form.message = ''
    }
  }
}
</script>
<style>
.form {
  margin: 0 auto;
  width: 500px;
  max-width: 95%;
  overflow: hidden;
  border-radius: 5px;
  padding: 25px 30px;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
  text-align: center;
}
.form h5 {
  color: #BAA389;
}
.form input {
  font-size: 14px;
}
.form textarea {
  font-size: 14px;
}
.btn-confirm {
  width: 100%;
  background-color: #BAA389;
  border-color: #BAA389;
  font-size: 14px;
  border: none;
  padding: 7px 15px;
  border-radius: 5px;
  color: #eee;
  font-style: bold;
  font-size: 15px;
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
