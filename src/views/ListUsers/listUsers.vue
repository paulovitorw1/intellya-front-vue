<template>
  <h3>Listagem de Usuários</h3>
  <p class="my-3">Visualize os usuários que acessam sua plataforma.</p>
  <table class="table text-center shadow-sm p-3 mb-5 bg-body rounded">
    <thead class="table-blue-primary table-primary shadow">
      <tr>
        <th scope="col py-4">ID</th>
        <th scope="col">E-mail</th>
        <th scope="col">ID</th>
        <th scope="col">Nível de Acesso</th>
        <th class="last-column-th"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.role }}</td>
        <td class="px-3">
          <ds-button
            type="tertiary"
            text="Visualizar"
            @click="redirectContract(user.id)"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { UserAdapter } from "@/Interfaces/userAdapter.interface";
import { UserListPresenter } from "./userListPresenter";
import { UserListView } from "@/Interfaces/userView.interface";

export default defineComponent({
  data() {
    return {
      users: [] as UserAdapter[],
    };
  },
  mounted() {
    const presenter = new UserListPresenter(this as UserListView);
    presenter.getUsers();
  },
  methods: {
    setUsers(users: UserAdapter[]): void {
      this.users = users;
    },
    redirectContract(id: string) {
      this.$router.push({
        name: "informationUser",
        params: { id: id },
      });
    },
  },
});
</script>
<style  lang="scss" src="./listUsers.scss" />
