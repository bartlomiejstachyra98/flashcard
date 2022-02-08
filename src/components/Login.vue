<template>
  <base-dialog
    :show="isLoading"
    @close="handleError"
    title="Logowanie..."
    fixed
  >
    <p>Logowanie trwa, proszę czekać</p>
  </base-dialog>
  <base-dialog :show="display" @close="handleError">
    <h1>Logowanie</h1>
    <form @submit.prevent="login">
      <div id="email">
        <input
          placeholder="Email"
          v-model.trim="email"
          :class="{ invalid: !!error }"
          type="text"
        />
      </div>
      <div id="password">
        <input
          placeholder="Hasło"
          :class="{ invalid: !!error }"
          v-model.trim="password"
          type="password"
        />
      </div>
      <p id="error" v-if="!!error">{{ error }}</p>
      <base-button id="confirm">Zaloguj</base-button>
    </form>
  </base-dialog>
  <div class="mobile_login">
    <h1>Logowanie</h1>
    <form @submit.prevent="login">
      <div id="email">
        <input
          placeholder="Email"
          v-model.trim="email"
          :class="{ invalid: !!error }"
          type="text"
        />
      </div>
      <div id="password">
        <input
          placeholder="Hasło"
          :class="{ invalid: !!error }"
          v-model.trim="password"
          type="password"
        />
      </div>
      <p id="error" v-if="!!error">{{ error }}</p>
      <base-button id="confirm">Zaloguj</base-button>
    </form>
  </div>
</template>
<script>
import BaseDialog from "./Ui/BaseDialog.vue";
export default {
  components: { BaseDialog },
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
      error: null,
    };
  },
  computed: {
    display() {
      if (window.innerWidth < 720) {
        return false;
      } else {
        return true;
      }
    },
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
        this.error = err.message || "Podaj poprawne dane logowania";
      }
      this.isLoading = false;
      if (this.$store.getters["auth/isAuthenticated"]) {
        this.handleError();
      }
    },

    handleError() {
      this.$router.replace("/register");
    },
  },
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-areas:
    "email password"
    "error error"
    "confirm close";
  grid-gap: 5px;
  justify-content: center;
  grid-template-columns: 45%;
}
#email {
  grid-area: email;
}
#password {
  grid-area: password;
}
#confirm {
  grid-area: confirm;
  width: 25%;
  justify-self: flex-end;
  height: 1.5rem;
  margin-top: 1rem;
}
.invalid {
  border: 1px solid red;
}
#error {
  grid-area: error;
  grid-column: span 2;
  height: 0.3rem;
  justify-self: center;
}
input {
  height: 1.8rem;
  border-radius: 5px;
  border: none;
  margin: 0 0.3rem;
  text-align: center;
}
.mobile_login {
  display: none;
}

@media (max-width: 45rem) {
  .mobile_login {
    display: block;
    background-color: #ddbea9;
    width: 100vw;
    padding: 1px;
    height: calc(100vh - 5rem);
  }
  input {
    width: 40vw;
  }
  #confirm {
    width: auto;
    grid-column: span 2;
    justify-self: center;
  }
  h1 {
    margin-left: auto;
    margin-right: auto;
    width: 80vw;
    text-align: center;
  }
}
</style>