import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import ListUsers from '../views/ListUsers/listUsers.vue'
import InformationUser from '../views/InformationUser/informationUser.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "listUsers",
    component: ListUsers,
  },
  {
    path: "/user/:id",
    name: "informationUser",
    component: InformationUser,
    props: true,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
