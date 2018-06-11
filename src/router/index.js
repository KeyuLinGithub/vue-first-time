import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import PersonalInfo from '@/components/PersonalInfo'
import PersonalInfoSetting from '@/components/PersonalInfoSetting'
Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'Home',
      component: Home,

    },
    {
      path: '/PersonalInfo',
      name: 'PersonalInfo',
      component: PersonalInfo
    },
    {
      path: '/PersonalInfoSetting',
      name: 'PersonalInfoSetting',
      component: PersonalInfoSetting
    }

  ]
})
