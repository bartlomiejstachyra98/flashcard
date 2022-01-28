<template>
  <base-dialog :show="!!error" title="Wystąpił błąd" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <base-dialog :show="isLoading" title="Rejestracja..." fixed>
    <p>Rejestracja trwa, proszę czekać</p>
  </base-dialog>
  <base-card
    ><h1>Tworzenie konta FlashCard</h1>
    <h2>Dołącz do nas juz dzisiaj!</h2>
    <form @submit.prevent="submitRegister">
      <div id="name">
        <input
          placeholder="Imie"
          :class="{ invalid: !name.isVaild }"
          v-model.trim="name.val"
          type="text"
        />
        <p v-if="!name.isVaild">Imię nie może być puste</p>
      </div>
      <div id="email">
        <input
          placeholder="Email"
          v-model.trim="email.val"
          :class="{ invalid: !email.isVaild }"
          type="text"
        />
        <p v-if="!email.isVaild">Proszę podać właściwy e-mail</p>
      </div>
      <div id="password">
        <input
          placeholder="Hasło"
          :class="{ invalid: !password.isVaild || !passwordreply.isVaild }"
          v-model.trim="password.val"
          type="password"
        />
        <p v-if="!password.isVaild">
          Hasło powinno zawierać więcej niż 6 znaków
        </p>
      </div>
      <div id="replypassword">
        <input
          placeholder="Powtórz hasło"
          :class="{ invalid: !passwordreply.isVaild }"
          v-model.trim="passwordreply.val"
          type="password"
        />
        <p v-if="!passwordreply.isVaild">Hasła muszą być identyczne</p>
      </div>
      <button id="confirm">Zarejestruj</button>
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
      name: {
        val: "",
        isVaild: true,
      },
      email: {
        val: "",
        isVaild: true,
      },
      password: {
        val: "",
        isVaild: true,
      },
      passwordreply: {
        val: "",
        isVaild: true,
      },
      formIsValid: true,
      re: /\S+@\S+\.\S+/,
      isLoading: false,
      error: null,
    };
  },
  methods: {
    validate() {
      this.formIsValid = true;
      if (this.name.val === "") {
        this.name.isVaild = false;
        this.formIsValid = false;
      }
      if (this.email.val === "" || !this.re.test(this.email.val)) {
        this.email.isVaild = false;
        this.formIsValid = false;
      }
      if (
        this.password.val === "" ||
        this.passwordreply.val === "" ||
        this.password.val.length < 6
      ) {
        this.password.isVaild = false;
        this.formIsValid = false;
      }
      if (this.password.val !== this.passwordreply.val) {
        this.passwordreply.isVaild = false;
        this.formIsValid = false;
      }
    },
    async submitRegister() {
      this.validate();
      if (!this.formIsValid) {
        return;
      }
      // const formData = {
      //   name: this.name.val,
      //   email: this.email.val,
      //   password: this.password.val,
      // };

      this.isLoading = true;
      try {
        await this.$store.dispatch("auth/register", {
          email: this.email.val,
          password: this.password.val,
        });
      } catch (err) {
        this.error = err.message || "Błąd rejestracji";
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
    "name email"
    "password replypassword"
    ". confirm";
  grid-gap: 5px;
}
#name {
  grid-area: name;
  width: 60%;
}
#email {
  grid-area: email;
  width: 60%;
}
#password {
  grid-area: password;
  width: 60%;
}
#replypassword {
  grid-area: replypassword;
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