<template>
  <ds-navbar text="Navbar" nameButton="Navbar">
    <router-view />
  </ds-navbar>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return;
  },
});
</script>

<style src="./assets/sass/app.scss" lang="scss" />
