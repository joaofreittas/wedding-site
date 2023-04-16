<template>
  <div>
    <Menu />
    <div class="casal mt-3">
      <img class="img-casal" src="../../static/casal.jpeg" alt="">
    </div>
    <div class="decoration">
      <img class="flower" src="../../static/ramos2.png" alt="" />
    </div>

    <section class="form mt-1">
      <b-list-group>
        <b-list-group-item>
          <a href="https://listas.pontofrio.com.br/joaoegabriele" target="_blank">Lista de Presentes</a>
        </b-list-group-item>
        <b-list-group-item>
          <p><b>Chave Pix:</b></p>
          joao.frhb@gmail.com
          <button
            type="button"
            v-clipboard:copy="pixKey"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
            class="btn-copy"
          >
            <b-icon icon="clipboard"></b-icon> Copiar
          </button>
        </b-list-group-item>
      </b-list-group>
    </section>

  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      pixKey:'joao.frhb@gmail.com'
    }
  },
  methods: {
    onCopy: function (e) {
      console.log('copy key successfull')
    },
    onError: function (e) {
      console.log('erro to copy key', e)
    }
  }
}
</script>
<style scoped>
.form {
  margin: 0 auto;
  width: 500px;
  max-width: 95%;
  overflow: hidden;
  border-radius: 5px;
  padding: 25px 30px;
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

.btn-copy {
  border:none;
  border: 1px solid #BAA389;
  border-radius: 5px;
  background-color:#fff;
  color:#333;
  border-color:#BAA389;

}
</style>
