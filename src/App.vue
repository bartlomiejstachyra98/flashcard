<template>
  <meta
    name="viewport"
    content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width /"
  />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <the-header></the-header>
  <main><router-view></router-view></main>
</template>
<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}
html {
  font-family: "Roboto", sans-serif;
}
body {
  margin: 0;
  background-color: #ffe8d6;
}
h1 {
  color: #004e98;
}
</style>
