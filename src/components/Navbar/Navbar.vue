<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light p-0 mb-5 shadow-sm pb-0 pt-3 bg-body"
  >
    <div class="container">
      <div class="row m-0 d-flex align-items-center">
        <div class="col-8 p-0">
          <ul class="navbar-nav">
            <div class="w-25 pb-3 me-4">
              <img
                :src="require('@/assets/iconsDS/logo.png')"
                alt="logo"
                class="img-fluid w-100"
              />
            </div>
            <li class="nav-item border-bottom-item mx-2">
              <a class="nav-link pt-3 fw-bold" href="javascript:void(0)"
                >Usuário</a
              >
            </li>
          </ul>
        </div>
        <div class="col-4 p-0">
          <div class="p-0 m-0 dropdown float-end">
            <div class="search">
              <input
                type="text"
                class="form-control"
                placeholder="Buscar"
                @input="searchValue"
                v-model="searchTerm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide } from "vue";

export default defineComponent({
  setup() {
    const searchTerm = ref('');

    provide('searchTerm', searchTerm);

    return {
      searchTerm
    };
  }
});
</script>
<style lang="scss" src="./Navbar.scss" />