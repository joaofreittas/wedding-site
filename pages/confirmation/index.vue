<template>
  <div>

    <div class="casal mt-3">
      <img class="img-casal" src="../../static/casal.jpeg" alt="">
    </div>
    <div class="decoration">
      <img class="flower" src="../../static/ramos2.png" alt="" />
    </div>
    <!-- CONFIRMATION FORM  -->
    <section class="form mt-3">
      <h5>Confirme sua presença</h5>
      <b-alert
          variant="danger"
          :show="errorOccur"
        >
          {{ errorMessage }}
      </b-alert>
      <b-alert
          variant="success"
          :show="!errorOccur && showSuccessMessage"
        >
          Confirmação realizada! Agradecemos sua presença :)
      </b-alert>
      <b-form-group
        label-for="input-name"
        class="mt-4"
      >
        <b-form-input
          id="input-name"
          v-model="form.name"
          type="text"
          placeholder="Digite seu nome ou da sua família"
          required
        />
      </b-form-group>

      <b-form-textarea
        id="textarea"
        v-model="form.message"
        placeholder="Deixe um recado para nós... :)"
        rows="3"
        max-rows="6"
      />

      <button
        class="btn-confirm mt-3"
        @click="confirm"
      >
        {{ labelButton }}
      </button>
    </section>

  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  data() {
    return {
      form: {
        name: '',
        message: ''
      },
      errorOccur: false,
      labelButton: 'Confirmar presença',
      errorMessage: '',
      showSuccessMessage: false
    }
  },
  methods: {
    async confirm() {
      this.errorOccur = false;
      this.showSuccessMessage = false;

      try {
        if(this.form.name == '') {
          throw new Error('Preencha seu nome! :)')
        }

        this.labelButton = 'Carregando...';
        console.log("[confirm] :: form -->", this.form)
        await this.$ConfirmationService.confirmate(this.form);

        this.successMessage()
        this.clearForm()

      } catch(error) {
        console.log("[confirm] :: error occurs -->", error)
        this.errorMessage = error.message
        this.showSuccessMessage = false;
        this.errorOccur = true;

      } finally {
        this.labelButton = 'Confirmar presença';
      }

    },
    successMessage() {
      this.showSuccessMessage = true;
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 4000)
    },
    clearForm() {
      setTimeout(() => {
        this.form.name = ''
        this.form.message = ''
      }, 1000)
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
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
