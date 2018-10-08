import Vue from 'vue'
import Router from 'vue-router'
import Backlog from '@/components/Backlog'
import Kanban from '@/components/Kanban'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/backlog',
        component: Backlog
      },
      {
        path: '/board',
        component: Kanban
      },
      {
        path: '*',
        redirect: '/backlog'
      }
    ],
  });