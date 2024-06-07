import Home from '../views/Home.vue'

// import view1 from "../views/view1.vue"
// import User from '../views/User.vue'


import {createRouter, createWebHistory} from 'vue-router'


const routes = [    
    // {path: '/' , name: 'view1', component: view1},
    // {path: '/view/:id' , name: 'view2', component: ()=> import('../views/view2.vue'),props: true},
    // {path: '/user/:id', component: User, props: true},

    {path: '/', name: 'Home', component: Home},
    {path: '/details/:entryId', name: 'Details', component:()=>import('../views/Details.vue'),props:true},
   

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
