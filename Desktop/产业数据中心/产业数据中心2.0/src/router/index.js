import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import EnterpriseLibrary from '@/views/libraries/EnterpriseLibrary.vue'
import EnterpriseDetail from '@/views/libraries/EnterpriseDetail.vue'
import SolutionLibrary from '@/views/libraries/SolutionLibrary.vue'
import KnowledgeLibrary from '@/views/libraries/KnowledgeLibrary.vue'
import TalentLibrary from '@/views/libraries/TalentLibrary.vue'
import ProductLibrary from '@/views/libraries/ProductLibrary.vue'
import IndustryChainLibrary from '@/views/libraries/IndustryChainLibrary.vue'
import DemandLibrary from '@/views/libraries/DemandLibrary.vue'
import PolicyLibrary from '@/views/libraries/PolicyLibrary.vue'
import IndustryProblemLibrary from '@/views/libraries/IndustryProblemLibrary.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '首页' }
  },
  {
    path: '/enterprise',
    name: 'EnterpriseLibrary',
    component: EnterpriseLibrary,
    meta: { title: '企业库' }
  },
  {
    path: '/enterprise/:id',
    name: 'EnterpriseDetail',
    component: EnterpriseDetail,
    meta: { title: '企业详情' }
  },
  {
    path: '/solution',
    name: 'SolutionLibrary',
    component: SolutionLibrary,
    meta: { title: '方案库' }
  },
  {
    path: '/knowledge',
    name: 'KnowledgeLibrary',
    component: KnowledgeLibrary,
    meta: { title: '知识库' }
  },
  {
    path: '/talent',
    name: 'TalentLibrary',
    component: TalentLibrary,
    meta: { title: '人才库' }
  },
  {
    path: '/product',
    name: 'ProductLibrary',
    component: ProductLibrary,
    meta: { title: '产品库' }
  },
  {
    path: '/industry-chain',
    name: 'IndustryChainLibrary',
    component: IndustryChainLibrary,
    meta: { title: '产业链库' }
  },
  {
    path: '/demand',
    name: 'DemandLibrary',
    component: DemandLibrary,
    meta: { title: '需求库' }
  },
  {
    path: '/policy',
    name: 'PolicyLibrary',
    component: PolicyLibrary,
    meta: { title: '政策库' }
  },
  {
    path: '/industry-problem',
    name: 'IndustryProblemLibrary',
    component: IndustryProblemLibrary,
    meta: { title: '行业问题库' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? '/chanyeshujuzhongxin3.0/' : '/'),
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  if (to.meta.title) {
    document.title = `${to.meta.title} - 防爆产业数据中心`
  }
  next()
})

export default router
