<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style scoped>
button {
  text-align: center;
  height: 1.8rem;
  border-radius: 5px;
  border: none;
  background-color: #d8d9d6;
  height: 1.7rem;
}
button:hover {
  background-color: #ffae03;
  border: solid 2px #d8d9d6;
}
.fa {
  padding: 0 0.5rem;
  border-radius: 5px;
  background-color: white;
}
.fa:hover {
  border: none;
  background-color: red;
}
</style>
