<template>
  <div class="card">
    <slot></slot>
  </div>
</template>
<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 10vh auto;
  max-width: 60vw;
  background-color: #ddbea9;
  min-width: 600px;
}
@media (max-width: 45rem) {
  .card {
    margin: 0;
    width: 0;
    height: 100vh;
    max-width: 45rem;
    min-width: 0;
    border-radius: 0;
  }
}
</style>