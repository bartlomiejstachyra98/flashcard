<template>
  <base-dialog :show="!!error" title="Wystąpił błąd" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <base-dialog :show="isLoading" title="Rejestracja..." fixed>
    <p>Rejestracja trwa, proszę czekać</p>
  </base-dialog>
  <base-card id="baseCard"
    ><h1>Tworzenie konta FlashCard</h1>
    <h2>Dołącz do nas juz dzisiaj!</h2>
    <form @submit.prevent="submitRegister">
      <input
        placeholder="Imię"
        :class="{ invalid: !name.isVaild }"
        v-model.trim="name.val"
        type="text"
        id="name"
        maxlength="30"
      />
      <p id="falseName" v-if="!name.isVaild">Imię nie może być puste</p>
      <input
        id="email"
        placeholder="Email"
        v-model.trim="email.val"
        :class="{ invalid: !email.isVaild }"
        type="text"
        maxlength="30"
      />
      <p id="falseEmail" v-if="!email.isVaild">Proszę podać właściwy e-mail</p>
      <input
        id="password"
        placeholder="Hasło"
        :class="{ invalid: !password.isVaild || !passwordReply.isVaild }"
        v-model.trim="password.val"
        type="password"
        maxlength="30"
      />
      <p id="falsePassword" v-if="!password.isVaild">
        Hasło powinno zawierać więcej niż 6 znaków
      </p>
      <input
        id="replyPassword"
        placeholder="Powtórz hasło"
        :class="{ invalid: !password.isVaild || !passwordReply.isVaild }"
        v-model.trim="passwordReply.val"
        type="password"
        maxlength="30"
      />
      <p id="diffrentPass" v-if="!passwordReply.isVaild">
        Hasła muszą być identyczne
      </p>
      <base-button id="confirm">Zarejestruj</base-button>
    </form>
  </base-card>
</template>
<script>
import BaseCard from "../Ui/BaseCard.vue";
import BaseDialog from "../Ui/BaseDialog.vue";
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
      passwordReply: {
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
      } else {
        this.name.isVaild = true;
      }
      if (this.email.val === "" || !this.re.test(this.email.val)) {
        this.email.isVaild = false;
        this.formIsValid = false;
      } else {
        this.email.isVaild = true;
      }
      if (
        this.password.val === "" ||
        this.passwordReply.val === "" ||
        this.password.val.length < 6
      ) {
        this.password.isVaild = false;
        this.formIsValid = false;
      } else {
        this.password.isVaild = true;
      }
      if (this.password.val !== this.passwordReply.val) {
        this.passwordReply.isVaild = false;
        this.formIsValid = false;
      } else {
        this.passwordReply.isVaild = true;
      }
    },
    async submitRegister() {
      this.validate();
      if (!this.formIsValid) {
        return;
      }
      this.isLoading = true;
      try {
        await this.$store.dispatch("auth/register", {
          email: this.email.val,
          password: this.password.val,
        });
      } catch (err) {
        this.error = err.message || "Błąd rejestracji";
      }
      this.$router.push("answer");
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
#baseCard {
  width: 40vw;
}
form {
  display: grid;
  grid-template-areas:
    "name email"
    "falseName falseEmail"
    "password replyPassword"
    "falsePassword falsePassword"
    "diffrentPass diffrentPass"
    "confirm confirm";
  grid-gap: 5px;
  justify-items: center;
  align-items: center;
  grid-template-rows: 2rem;
}
#name {
  grid-area: name;
}
#falseName {
  grid-area: falseName;
}
#email {
  grid-area: email;
}
#falseEmail {
  grid-area: falseEmail;
}
#password {
  grid-area: password;
}
#replyPassword {
  grid-area: replyPassword;
}
#falsePassword {
  grid-area: falsePassword;
}
#diffrentPass {
  grid-area: diffrentPass;
}
#confirm {
  grid-area: confirm;
  width: 8rem;
  min-width: 5rem;
  grid-column: span 2;
}
.invalid {
  border: 1px solid red;
}
input {
  height: 1.8rem;
  border-radius: 5px;
  border: none;
  margin: 0 0.3rem;
}

@media (max-width: 45rem) {
  #baseCard {
    width: 100%;
    margin: 0;
    height: calc(100vh - 5rem);
  }
  input {
    width: 40vw;
  }
}
</style>