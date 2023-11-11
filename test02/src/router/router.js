import { createRouter, createWebHistory } from "vue-router";
import TheMain from '../components/TheMain.vue';
import PageTest from '../components/PageTest.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: TheMain,
    },
    {
      path: '/page-test',
      component: PageTest,
    },
  ],
});

export default router;
