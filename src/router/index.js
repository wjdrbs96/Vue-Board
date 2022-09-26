import Vue from 'vue'
import VueRouter from 'vue-router'
import PostList from '../components/PostList.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/posts', 
      component: PostList
    },
  ]
})

export default router