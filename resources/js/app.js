/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import { createRouter,createWebHashHistory } from 'vue-router';
import './bootstrap';
//import '../sass/app.scss'
import { createApp } from 'vue'
//import app from './app.vue'
import VueAxios from 'vue-axios'
import axios from 'axios'




import ProductIndex from './components/products/index.vue';
import ProductCreate from './components/products/create.vue';
import ProductEdit from './components/products/edit.vue';



// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: ProductIndex },
  { path: '/create', component: ProductCreate },
  
  { path: '/edit', component: ProductEdit },
]



/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp();
app.use(VueAxios, axios)
app.use(routes)
app.mount('#app')


//import { createRouter, createWebHistory } from 'vue-router'









