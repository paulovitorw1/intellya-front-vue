<template>
  <h3>Usuários n° {{ this.$route.params.id }}</h3>
  <p class="my-3">Visualize as informações do usuário solicitado abaixo.</p>
  <div class="card py-0 shadow-sm bg-body rounded">
    <ul class="list-group list-group-flush">
      <li class="list-group-item p-4">
        <div class="row">
          <div class="col-6 fw-bold">Nome</div>
          <div class="col-6">{{ user.name }}</div>
        </div>
      </li>
      <li class="list-group-item p-4">
        <div class="row">
          <div class="col-6 fw-bold">E-mail</div>
          <div class="col-6">{{ user.email }}</div>
        </div>
      </li>
      <li class="list-group-item p-4">
        <div class="row">
          <div class="col-6 fw-bold">Nível de Acesso</div>
          <div class="col-6">{{ user.role }}</div>
        </div>
      </li>
      <li class="list-group-item p-4">
        <div class="row">
          <div class="col-6 fw-bold">Status</div>
          <div class="col-6">{{ user.active }}</div>
        </div>
      </li>
      <li class="list-group-item p-4">
        <div class="row">
          <div class="col-6 fw-bold">Data de cadastro</div>
          <div class="col-6">{{ user.created_at }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { RoleEnum } from "@/enums/typeRoles";
import { UserAdapter } from "@/Interfaces/userAdapter.interface";
import { UserInforView } from "@/Interfaces/userView.interface";
import { defineComponent } from "vue"; 
import { InformationUserPresenter } from "./informationUserPresenter"

export default defineComponent({
  data() {
    return {
      user: {
        id: "",
        name: "",
        email: "",
        role: RoleEnum.MEMBER,
        active: "",
        created_at: "",
      } as UserAdapter,
    };
  },
  mounted() {
    const presenter = new InformationUserPresenter(this as UserInforView)
    presenter.getUserById(this.$route.params.id as string)
  },
  methods: {
    setUser(user: UserAdapter): void {
      this.user = user;
    },
  },
});
</script>