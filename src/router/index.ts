import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import ListUsers from '../views/ListUsers/listUsers.vue'
import InformationUser from '../views/InformationUser/informationUser.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "MyCourses",
    component: ListUsers,
  },
  {
    path: "/user/:id",
    name: "informationUser",
    component: InformationUser,
    props: true,
    meta: { shouldShowInputSearch: false },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
