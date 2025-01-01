import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import MapComponent from '../components/MapComponent.vue'
import SearchPage from '../components/SearchPage.vue'
import ImageDetail from '../components/ImageDetail.vue'
import Burning from '../components/Burning.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/Search',
      name: 'Search',
      component: SearchPage,
    },
    {
      path: '/Map',
      name: 'Map',
      component: MapComponent,
    },
    {
      path: '/detail/:imageName', 
      name: 'imageDetail',
      component: ImageDetail,
    },
    {
      path: '/Burning',
      component: Burning, // 这里指向空白页面
    },
  ],
})

export default router
