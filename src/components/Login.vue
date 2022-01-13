<template>
  <base-dialog :show="!!error" title="Wystąpił błąd" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <base-dialog :show="isLoading" title="Rejestracja..." fixed>
    <p>Rejestracja trwa, proszę czekać</p>
  </base-dialog>
  <base-card
    ><h1>Logowanie</h1>
    <form @submit.prevent="login">
      <div id="email">
        <input
          placeholder="Email"
          v-model.trim="email"
          :class="{ invalid: !email.isVaild }"
          type="text"
        />
      </div>
      <div id="password">
        <input
          placeholder="Hasło"
          :class="{ invalid: !password.isVaild || !passwordreply.isVaild }"
          v-model.trim="password"
          type="password"
        />
      </div>
      <button id="confirm">Zaloguj</button>
    </form>
  </base-card>
</template>
<script>
import BaseCard from "./Ui/BaseCard.vue";
import BaseDialog from "./Ui/BaseDialog.vue";
export default {
  components: { BaseCard, BaseDialog },
  data() {
    return {
      email: "",
      password: "",
      isLoading: null,
      error: null,
    };
  },
  methods: {
    async login() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("auth/login", {
          email: this.email,
          password: this.password,
        });
      } catch (err) {
        this.error = err.message || "Błąd logowania";
      }
      this.isLoading = false;
    },

    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-areas:
    "email password"
    ". confirm";
  grid-gap: 5px;
}
#email {
  grid-area: email;
  width: 60%;
}
#password {
  grid-area: password;
  width: 60%;
}
#confirm {
  grid-area: confirm;
  width: 25%;
  justify-self: flex-end;
}
.invalid {
  border: 1px solid red;
}
</style>