import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import FrameDashboard1 from './views/frame-dashboard1'
import Page from './views/page'
import Page1 from './views/page1'
import Frame from './views/frame'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'FrameDashboard1',
      path: '/',
      component: FrameDashboard1,
    },
    {
      name: 'Page',
      path: '/page',
      component: Page,
    },
    {
      name: 'Page1',
      path: '/page1',
      component: Page1,
    },
    {
      name: 'Frame',
      path: '/frame',
      component: Frame,
    },
  ],
})
