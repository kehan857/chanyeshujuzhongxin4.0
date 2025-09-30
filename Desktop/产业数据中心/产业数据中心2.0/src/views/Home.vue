<template>
  <div class="home">
    <!-- 顶部导航 -->
    <Header />
    
    <!-- 英雄区域 -->
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">天云产业数据中心</h1>
            <p class="hero-subtitle">数据驱动 × 产业赋能 打造数据智能新生态</p>
            <p class="hero-description">
              构建一个以产业链为核心，深度整合企业、产品、方案、知识、人才与商业需求的一站式产业智能大脑平台
            </p>
          </div>
          
          <div class="hero-search">
            <a-input-search
              v-model:value="searchValue"
              placeholder="请输入关键词搜索企业、产品、方案..."
              size="large"
              class="search-input"
              @search="handleSearch"
            >
              <template #enterButton>
                <a-button type="primary" size="large">
                  <SearchOutlined />
                  搜索
                </a-button>
              </template>
            </a-input-search>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="visual-graphic">
            <div class="graphic-card card-1">
              <SafetyOutlined />
              <span>安全防护</span>
            </div>
            <div class="graphic-card card-2">
              <DatabaseOutlined />
              <span>数据智能</span>
            </div>
            <div class="graphic-card card-3">
              <BulbOutlined />
              <span>产业赋能</span>
            </div>
          </div>
          <div class="ai-model-card">
            <h3>AI 产业经济大模型</h3>
            <p>智能分析 · 精准决策 · 产业洞察</p>
          </div>
        </div>
      </div>
      
      <!-- 背景装饰 -->
      <div class="hero-bg">
        <div class="bg-shape shape-1"></div>
        <div class="bg-shape shape-2"></div>
        <div class="bg-shape shape-3"></div>
      </div>
    </section>

    <!-- 常用功能区域 -->
    <section class="functions-section">
      <div class="container">
        <h2 class="section-title">常用功能</h2>
        <div class="functions-grid">
          <div 
            v-for="func in functions" 
            :key="func.key"
            class="function-card"
            @click="navigateToFunction(func.key)"
          >
            <div class="function-icon">
              <component :is="func.icon" />
            </div>
            <h3 class="function-title">{{ func.title }}</h3>
            <p class="function-desc">{{ func.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品愿景区域 -->
    <section class="vision-section">
      <div class="container">
        <div class="vision-content">
          <div class="vision-text">
            <h2 class="section-title">产品愿景</h2>
            <p class="vision-description">
              构建一个以产业链为核心，深度整合企业、产品、方案、知识、人才与商业需求的一站式产业智能大脑平台。
              旨在打破信息孤岛，通过数据驱动与AI赋能，为销售、售前、市场及战略部门提供精准决策支持，
              提升商业机会转化效率与行业洞察能力。
            </p>
            
            <div class="goals">
              <div class="goal-item">
                <h4>近期目标</h4>
                <p>建立七大核心数据库，实现数据互联互通与基础的检索、筛选功能</p>
              </div>
              <div class="goal-item">
                <h4>中期目标</h4>
                <p>引入AI能力，实现方案智能拆解、企业画像自动生成、供需智能匹配</p>
              </div>
              <div class="goal-item">
                <h4>长期目标</h4>
                <p>发展成为行业领先的数据服务与智能应用平台</p>
              </div>
            </div>
          </div>
          
          <div class="vision-visual">
            <div class="data-flow">
              <div class="flow-node" v-for="node in dataFlowNodes" :key="node.id">
                <div class="node-icon">
                  <component :is="node.icon" />
                </div>
                <span class="node-label">{{ node.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心问题与解决方案 -->
    <section class="problems-section">
      <div class="container">
        <h2 class="section-title">核心问题与解决方案</h2>
        <div class="problems-grid">
          <div class="problem-card" v-for="problem in problems" :key="problem.id">
            <div class="problem-icon">
              <component :is="problem.icon" />
            </div>
            <h3 class="problem-title">{{ problem.title }}</h3>
            <p class="problem-desc">{{ problem.description }}</p>
            <div class="solution">
              <h4>解决方案</h4>
              <ul>
                <li v-for="solution in problem.solutions" :key="solution">{{ solution }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 底部信息 -->
    <section class="footer-section">
      <div class="container">
        <div class="footer-content">
          <div class="footer-info">
            <h3>天云产业数据中心</h3>
            <p>一站式产业智能大脑平台</p>
            <div class="contact-info">
              <p><PhoneOutlined /> 400-999-3607</p>
              <p><MailOutlined /> contact@tianyun-data.com</p>
            </div>
          </div>
          
          <div class="footer-links">
            <div class="link-group">
              <h4>产品服务</h4>
              <a href="#">企业库</a>
              <a href="#">方案库</a>
              <a href="#">知识库</a>
              <a href="#">人才库</a>
            </div>
            <div class="link-group">
              <h4>解决方案</h4>
              <a href="#">产品库</a>
              <a href="#">产业链库</a>
              <a href="#">需求库</a>
              <a href="#">政策库</a>
            </div>
            <div class="link-group">
              <h4>支持</h4>
              <a href="#">帮助中心</a>
              <a href="#">API文档</a>
              <a href="#">技术支持</a>
              <a href="#">联系我们</a>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2024 天云产业数据中心. 保留所有权利.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import {
  SearchOutlined,
  SafetyOutlined,
  DatabaseOutlined,
  BulbOutlined,
  BankOutlined,
  SolutionOutlined,
  BookOutlined,
  TeamOutlined,
  AppstoreOutlined,
  NodeIndexOutlined,
  ShoppingCartOutlined,
  FileTextOutlined,
  QuestionCircleOutlined,
  PhoneOutlined,
  MailOutlined,
  ApiOutlined,
  CloudOutlined,
  BarChartOutlined,
  GlobalOutlined
} from '@ant-design/icons-vue'

const router = useRouter()
const searchValue = ref('')

// 常用功能数据
const functions = [
  {
    key: 'enterprise',
    title: '企业库',
    description: '360度全景企业画像',
    icon: BankOutlined
  },
  {
    key: 'solution',
    title: '方案库',
    description: '结构化行业解决方案',
    icon: SolutionOutlined
  },
  {
    key: 'knowledge',
    title: '知识库',
    description: '行业标准与知识体系',
    icon: BookOutlined
  },
  {
    key: 'talent',
    title: '人才库',
    description: '专业人才信息管理',
    icon: TeamOutlined
  },
  {
    key: 'product',
    title: '产品库',
    description: '产品信息与规格管理',
    icon: AppstoreOutlined
  },
  {
    key: 'industry-chain',
    title: '产业链库',
    description: '产业链关系图谱',
    icon: NodeIndexOutlined
  },
  {
    key: 'demand',
    title: '需求库',
    description: '商业需求与机会',
    icon: ShoppingCartOutlined
  },
  {
    key: 'policy',
    title: '政策库',
    description: '政策法规与申报指南',
    icon: FileTextOutlined
  }
]

// 数据流节点
const dataFlowNodes = [
  { id: 1, label: '企业数据', icon: BankOutlined },
  { id: 2, label: '产品数据', icon: AppstoreOutlined },
  { id: 3, label: '方案数据', icon: SolutionOutlined },
  { id: 4, label: '知识数据', icon: BookOutlined },
  { id: 5, label: '人才数据', icon: TeamOutlined },
  { id: 6, label: '需求数据', icon: ShoppingCartOutlined },
  { id: 7, label: '政策数据', icon: FileTextOutlined },
  { id: 8, label: '产业链数据', icon: NodeIndexOutlined }
]

// 核心问题数据
const problems = [
  {
    id: 1,
    title: '信息不对称',
    description: '市场信息分散，寻找目标客户与合作伙伴耗时耗力',
    icon: GlobalOutlined,
    solutions: [
      '建立统一的企业信息数据库',
      '提供智能搜索和筛选功能',
      '实现企业画像自动生成'
    ]
  },
  {
    id: 2,
    title: '方案配置复杂',
    description: '行业解决方案复杂，售前人员难以快速准确配置',
    icon: SolutionOutlined,
    solutions: [
      'AI方案智能拆解',
      '产品自动匹配推荐',
      '一键生成物料清单'
    ]
  },
  {
    id: 3,
    title: '知识分散',
    description: '行业标准、知识分散，学习和查询成本高',
    icon: BookOutlined,
    solutions: [
      '建立结构化知识库',
      '提供智能检索功能',
      '支持知识关联推荐'
    ]
  },
  {
    id: 4,
    title: '商机管理困难',
    description: '招投标信息、企业需求零散，难以形成有效商机库',
    icon: BarChartOutlined,
    solutions: [
      '统一需求信息管理',
      '智能商机匹配',
      '提供商机转化分析'
    ]
  }
]

// 搜索处理
const handleSearch = (value) => {
  if (value.trim()) {
    // 这里可以实现全局搜索逻辑
    console.log('搜索:', value)
  }
}

// 导航到功能页面
const navigateToFunction = (key) => {
  router.push(`/${key}`)
}
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 $spacing-lg;
}

.section-title {
  font-size: $font-size-xxl;
  font-weight: 600;
  color: $text-primary;
  text-align: center;
  margin-bottom: $spacing-xxl;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -$spacing-md;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: $primary-color;
    border-radius: 2px;
  }
}

// 英雄区域
.hero-section {
  position: relative;
  background: $bg-gradient;
  color: $text-white;
  padding: $spacing-xxl 0;
  overflow: hidden;
  min-height: 600px;
  display: flex;
  align-items: center;
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 $spacing-lg;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $spacing-xxl;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-content {
  .hero-title {
    font-size: $font-size-xxxl;
    font-weight: 700;
    margin-bottom: $spacing-md;
    line-height: 1.2;
  }
  
  .hero-subtitle {
    font-size: $font-size-xl;
    margin-bottom: $spacing-lg;
    opacity: 0.9;
  }
  
  .hero-description {
    font-size: $font-size-md;
    line-height: 1.6;
    margin-bottom: $spacing-xl;
    opacity: 0.8;
  }
}

.hero-search {
  .search-input {
    :deep(.ant-input) {
      height: 48px;
      font-size: $font-size-md;
      border-radius: $border-radius-lg;
    }
    
    :deep(.ant-btn) {
      height: 48px;
      border-radius: $border-radius-lg;
    }
  }
}

.hero-visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-lg;
}

.visual-graphic {
  display: flex;
  gap: $spacing-md;
  margin-bottom: $spacing-lg;
}

.graphic-card {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: $border-radius-lg;
  padding: $spacing-lg;
  text-align: center;
  backdrop-filter: blur(10px);
  
  .anticon {
    font-size: 24px;
    margin-bottom: $spacing-sm;
    display: block;
  }
  
  span {
    font-size: $font-size-sm;
    opacity: 0.9;
  }
}

.ai-model-card {
  background: $accent-color;
  color: $text-white;
  padding: $spacing-lg;
  border-radius: $border-radius-lg;
  text-align: center;
  box-shadow: $box-shadow-hover;
  
  h3 {
    font-size: $font-size-lg;
    margin-bottom: $spacing-sm;
  }
  
  p {
    font-size: $font-size-sm;
    opacity: 0.9;
  }
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.bg-shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  
  &.shape-1 {
    width: 200px;
    height: 200px;
    top: 10%;
    right: 10%;
    animation: float 6s ease-in-out infinite;
  }
  
  &.shape-2 {
    width: 150px;
    height: 150px;
    bottom: 20%;
    left: 15%;
    animation: float 8s ease-in-out infinite reverse;
  }
  
  &.shape-3 {
    width: 100px;
    height: 100px;
    top: 50%;
    right: 30%;
    animation: float 10s ease-in-out infinite;
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

// 常用功能区域
.functions-section {
  padding: $spacing-xxl 0;
  background: $bg-secondary;
}

.functions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: $spacing-lg;
}

.function-card {
  background: $bg-primary;
  border-radius: $border-radius-lg;
  padding: $spacing-xl;
  text-align: center;
  box-shadow: $box-shadow;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: $box-shadow-hover;
  }
  
  .function-icon {
    width: 60px;
    height: 60px;
    background: $bg-gradient;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto $spacing-md;
    color: $text-white;
    font-size: 24px;
  }
  
  .function-title {
    font-size: $font-size-lg;
    font-weight: 600;
    color: $text-primary;
    margin-bottom: $spacing-sm;
  }
  
  .function-desc {
    color: $text-secondary;
    font-size: $font-size-sm;
  }
}

// 产品愿景区域
.vision-section {
  padding: $spacing-xxl 0;
  background: $bg-primary;
}

.vision-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $spacing-xxl;
  align-items: center;
}

.vision-description {
  font-size: $font-size-md;
  line-height: 1.8;
  color: $text-secondary;
  margin-bottom: $spacing-xl;
}

.goals {
  display: flex;
  flex-direction: column;
  gap: $spacing-lg;
}

.goal-item {
  h4 {
    font-size: $font-size-md;
    font-weight: 600;
    color: $primary-color;
    margin-bottom: $spacing-sm;
  }
  
  p {
    color: $text-secondary;
    line-height: 1.6;
  }
}

.vision-visual {
  .data-flow {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: $spacing-md;
  }
}

.flow-node {
  background: $bg-secondary;
  border-radius: $border-radius-lg;
  padding: $spacing-lg;
  text-align: center;
  border: 2px solid $border-light;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: $primary-color;
    transform: translateY(-2px);
  }
  
  .node-icon {
    width: 40px;
    height: 40px;
    background: $primary-color;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto $spacing-sm;
    color: $text-white;
    font-size: 18px;
  }
  
  .node-label {
    font-size: $font-size-sm;
    color: $text-primary;
    font-weight: 500;
  }
}

// 核心问题区域
.problems-section {
  padding: $spacing-xxl 0;
  background: $bg-secondary;
}

.problems-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-lg;
}

.problem-card {
  background: $bg-primary;
  border-radius: $border-radius-lg;
  padding: $spacing-xl;
  box-shadow: $box-shadow;
  
  .problem-icon {
    width: 50px;
    height: 50px;
    background: $accent-color;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: $spacing-md;
    color: $text-white;
    font-size: 20px;
  }
  
  .problem-title {
    font-size: $font-size-lg;
    font-weight: 600;
    color: $text-primary;
    margin-bottom: $spacing-sm;
  }
  
  .problem-desc {
    color: $text-secondary;
    margin-bottom: $spacing-lg;
    line-height: 1.6;
  }
  
  .solution {
    h4 {
      font-size: $font-size-md;
      font-weight: 600;
      color: $primary-color;
      margin-bottom: $spacing-sm;
    }
    
    ul {
      list-style: none;
      padding: 0;
      
      li {
        color: $text-secondary;
        margin-bottom: $spacing-xs;
        position: relative;
        padding-left: $spacing-md;
        
        &::before {
          content: '•';
          color: $primary-color;
          position: absolute;
          left: 0;
        }
      }
    }
  }
}

// 底部区域
.footer-section {
  background: $primary-color;
  color: $text-white;
  padding: $spacing-xxl 0 $spacing-lg;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: $spacing-xxl;
  margin-bottom: $spacing-xl;
}

.footer-info {
  h3 {
    font-size: $font-size-xl;
    margin-bottom: $spacing-sm;
  }
  
  p {
    opacity: 0.8;
    margin-bottom: $spacing-md;
  }
}

.contact-info {
  p {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
    margin-bottom: $spacing-sm;
    
    .anticon {
      color: $accent-color;
    }
  }
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $spacing-lg;
}

.link-group {
  h4 {
    font-size: $font-size-md;
    font-weight: 600;
    margin-bottom: $spacing-md;
    color: $accent-color;
  }
  
  a {
    display: block;
    color: $text-white;
    text-decoration: none;
    margin-bottom: $spacing-sm;
    opacity: 0.8;
    transition: opacity 0.3s ease;
    
    &:hover {
      opacity: 1;
    }
  }
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: $spacing-lg;
  text-align: center;
  
  p {
    opacity: 0.6;
    margin: 0;
  }
}

// 响应式设计
@media (max-width: $breakpoint-lg) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: $spacing-lg;
  }
  
  .vision-content {
    grid-template-columns: 1fr;
    gap: $spacing-lg;
  }
  
  .data-flow {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: $spacing-lg;
  }
  
  .footer-links {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: $breakpoint-md) {
  .hero-title {
    font-size: $font-size-xxl !important;
  }
  
  .functions-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .problems-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
  }
  
  .data-flow {
    grid-template-columns: 1fr !important;
  }
}
</style>
