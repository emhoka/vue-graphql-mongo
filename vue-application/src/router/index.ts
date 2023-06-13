import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import UserProfile from "../views/UserProfile.vue"
import SignInpage from "../views/SignInPage.vue"
import SignUpPage from "../views/SignUpPage.vue"
import Resetpassword from "../views/ResetPassword.vue"

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'SignUpPage',
    component: SignUpPage
  },
  {
    path: '/signin',
    name: ': SignInpage',
    component: SignInpage
  },
  {
    path: '/userprofile',
    name: ': UserProfile',
    component: UserProfile
  },
  {
    path: '/resetpassword',
    name: ': Resetpassword',
    component: Resetpassword
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;