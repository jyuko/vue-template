import Vue from 'vue'
import Router from 'vue-router'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'
import Top from '@/components/Top'
import Info from '@/components/Info'
import Privacy from '@/components/Privacy'
import Contact from '@/components/Contact'

Vue.use(Element, { locale })
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Top
    },
    {
      path: '/top',
      name: 'Top',
      component: Top
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: Privacy
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
