<template>
  <header class="desktop-nav">
    <nav>
      <h1>FlashCard</h1>
      <ul>
        <li><router-link to="/answer">Rozwiązuj</router-link></li>
        <li><router-link to="/flashcards">Dodaj słówka</router-link></li>
        <li v-if="!isLoggedIn">
          <router-link to="/login">Zaloguj</router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link to="/register">Zarejestruj</router-link>
        </li>
        <li v-if="isLoggedIn">
          <button @click="logout">Wyloguj</button>
        </li>
      </ul>
    </nav>
  </header>
  <header class="mobile-nav">
    <div>
      <button @click="openCloseMenu" class="toggle-button">
        <span class="toggle-button__bar"></span>
        <span class="toggle-button__bar"></span>
        <span class="toggle-button__bar"></span>
      </button>
    </div>
    <button class="backdrop" v-if="menu" @click="openCloseMenu"></button>
    <h1>FlashCard</h1>
    <nav v-if="menu">
      <ul>
        <li>
          <router-link @click="openCloseMenu" to="/answer"
            >Rozwiązuj</router-link
          >
        </li>
        <li>
          <router-link @click="openCloseMenu" to="/flashcards"
            >Dodaj słówka</router-link
          >
        </li>
        <li v-if="!isLoggedIn">
          <router-link @click="openCloseMenu" to="/login">Zaloguj</router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link @click="openCloseMenu" to="/register"
            >Zarejestruj</router-link
          >
        </li>
        <li v-if="isLoggedIn">
          <button @click="logout">Wyloguj</button>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["auth/isAuthenticated"];
    },
    userId() {
      return this.$store.getters["auth/userId"];
    },
    menu() {
      return this.isOpen;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      this.isOpen = !this.isOpen;
    },
    openCloseMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>


<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #b7b7a4;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 1em gray;
}

header a {
  text-decoration: none;
  color: #004e98;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  font-size: 1.2rem;
}
header button {
  color: #004e98;
  background-color: #b7b7a4;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  font-size: 1.2rem;
}

a:active,
a:hover,
a.router-link-active,
button:active,
button:hover {
  cursor: pointer;
  border: 1px solid #6b705c;
}

h1 {
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

.mobile-nav {
  display: none;
}

@media (max-width: 45rem) {
  .backdrop {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
  }

  header ul {
    flex-direction: column;
  }

  .open {
    display: block !important;
  }

  .desktop-nav {
    display: none;
  }
  .mobile-nav {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    z-index: 100;
    position: sticky;
    top: 0;
  }
  .mobile-nav nav {
    display: block;
    position: fixed;
    z-index: 101;
    top: 0;
    left: 0;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(183, 183, 164, 1) 1%,
      rgba(182, 182, 182, 1) 100%
    );
    width: 50%;
    height: 100vh;
    box-shadow: 6px 0 20px 0 #292828;
    border-radius: 0 12px 12px 0;
  }
  li {
    text-justify: center;
    width: 100%;
    padding: 0.5rem;
    border-bottom: 1px solid black;
  }

  .toggle-button {
    width: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0.5rem;
  }

  .toggle-button:focus {
    outline: none;
  }
  .toggle-button__bar {
    width: 100%;
    height: 0.2rem;
    background: black;
    display: block;
    margin: 0.6rem 0;
  }
  h1 a {
    display: none;
  }
}
</style>