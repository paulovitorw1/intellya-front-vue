import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import App from './App.vue'
import router from './router'

import Navbar from "./components/Navbar/Navbar.vue";
import Button from "./components/Button/Button.vue";

const app = createApp(App);

app.component("ds-navbar", Navbar);
app.component("ds-button", Button);
app.use(router)

app.mount("#app");