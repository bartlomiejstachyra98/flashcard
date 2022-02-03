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
    <h1>FlashCard</h1>
    <nav>
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
</template>
<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters["auth/isAuthenticated"];
    },
    userId() {
      return this.$store.getters["auth/userId"];
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
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

h1 a {
  color: white;
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
</style>