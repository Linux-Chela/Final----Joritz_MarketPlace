import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import SummaryView from '../apps/default/views/SummaryView.vue'
import sampleroutes from '../apps/sample/approutes'
import NotFound from '../views/NotFound.vue'
import CreateReviewRating from '../apps/default/views/CreateReviewRating.vue'
import ReviewRatingsPage from '../apps/default/views/ReviewRatingsPage.vue'
import ArtifactList from '../apps/default/views/ArtifactList.vue'
import ArtifactDetailsPage from '../apps/default/views/ArtifactDetailsPage.vue'
import ArtView from '../apps/default/views/ArtView.vue'
// import TheWelcome from '../apps/default/views/TheWelcome.vue'
// import WelcomeItem from '../apps/default/views/WelcomeItem.vue'
import DashBoard from '../apps/default/views/DashBoard.vue'

import {createPinia} from 'pinia'


const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history:createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SummaryView
    },
    // {
    //   path: '/thewelcome',
    //   name: 'thewelcome',
    //   props:true,
    //   component: TheWelcome
    // },
    // {
    //   path: '/welcomeitem',
    //   name: 'welcomeitem',
    //   props:true,
    //   component:WelcomeItem
    // },
    {
      path: '/dashboard',
      name: 'dashboard',
      props:true,
      component: DashBoard
    },
    {
      path: '/createreviewrating',
      name: 'createreviewrating',
      props:true,
      component: CreateReviewRating
    },
    {
      path: '/artview',
      name: 'artview',
      props:true,
      component: ArtView
    },
    {
      path: '/artifactdetailspage/:id',
      name: 'artifactdetailspage',
      props:true,
      component: ArtifactDetailsPage
    },
    {
      path: '/reviewratingspage/:id',
      name: 'reviewratingspage',
      props:true,
      component: ReviewRatingsPage
    },
    {
      path: '/artifactlist',
      name: 'artifactlist',
      component: ArtifactList
    },
    {
      path: "/sample",
      name: 'sample',
      component: () => import('../apps/sample/Index.vue'),
      children: sampleroutes
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }    
  
  ]
})

const store = createPinia()


export default router
