import { createRouter, createWebHistory } from 'vue-router';
import ArticlesView from '@/views/ArticlesView.vue';
import WriteArticleView from '@/views/WriteArticleView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'articles',
      component: ArticlesView,
    },
    {
      path: '/add',
      name: 'add-article',
      component: WriteArticleView,
    },
  ],
});

export default router;
