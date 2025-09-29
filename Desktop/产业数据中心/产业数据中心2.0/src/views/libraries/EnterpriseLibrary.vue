<template>
  <div class="enterprise-library">
    <!-- 顶部导航 -->
    <Header />
    
    <!-- 页面头部 -->
    <div class="page-header">
      <div class="container">
        <div class="header-content">
          <div class="title-section">
            <h1 class="page-title">企业库</h1>
            <p class="page-subtitle">360度全景企业画像，提供全面、深入的企业信息</p>
          </div>
          
          <div class="search-section">
            <a-input-search
              v-model:value="searchValue"
              placeholder="输入企业名称、法人、统一信用代码、组织机构代码、纳税人识别号"
              size="large"
              class="main-search"
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
      </div>
    </div>

    <!-- 筛选条件区域 -->
    <div class="filters-section">
      <div class="container">
        <div class="filters-container">
          <!-- 基本信息筛选 -->
          <div class="filter-row">
            <div class="filter-group">
              <label>基本信息</label>
              <a-select v-model:value="filters.basicInfo" placeholder="请选择" style="width: 120px">
                <a-select-option value="all">全部</a-select-option>
                <a-select-option value="operating">在营</a-select-option>
                <a-select-option value="suspended">停业</a-select-option>
              </a-select>
            </div>
            
            <div class="filter-group">
              <label>所在地区</label>
              <a-cascader
                v-model:value="filters.region"
                :options="regionOptions"
                placeholder="请选择地区"
                style="width: 150px"
              />
            </div>
            
            <div class="filter-group">
              <label>火石产业分类</label>
              <a-select v-model:value="filters.industry" placeholder="请选择" style="width: 150px">
                <a-select-option value="all">全部</a-select-option>
                <a-select-option value="manufacturing">制造业</a-select-option>
                <a-select-option value="technology">科技业</a-select-option>
                <a-select-option value="service">服务业</a-select-option>
              </a-select>
            </div>
            
            <div class="filter-group">
              <label>国标行业分类</label>
              <a-select v-model:value="filters.nationalIndustry" placeholder="请选择" style="width: 150px">
                <a-select-option value="all">全部</a-select-option>
                <a-select-option value="C">制造业</a-select-option>
                <a-select-option value="I">信息传输</a-select-option>
                <a-select-option value="M">科学研究</a-select-option>
              </a-select>
            </div>
            
            <div class="filter-group">
              <label>公司类型</label>
              <a-select v-model:value="filters.companyType" placeholder="请选择" style="width: 120px">
                <a-select-option value="all">全部</a-select-option>
                <a-select-option value="limited">有限责任公司</a-select-option>
                <a-select-option value="joint">股份有限公司</a-select-option>
                <a-select-option value="individual">个人独资</a-select-option>
              </a-select>
            </div>
          </div>

          <!-- 创新能力筛选 -->
          <div class="filter-row">
            <div class="filter-group">
              <label>创新能力</label>
              <a-select v-model:value="filters.innovation" placeholder="请选择" style="width: 120px">
                <a-select-option value="all">全部</a-select-option>
                <a-select-option value="high">高</a-select-option>
                <a-select-option value="medium">中</a-select-option>
                <a-select-option value="low">低</a-select-option>
              </a-select>
            </div>
            
            <div class="filter-group">
              <label>创新资质</label>
              <a-select v-model:value="filters.qualification" placeholder="请选择" style="width: 120px">
                <a-select-option value="all">全部</a-select-option>
                <a-select-option value="high-tech">高新技术企业</a-select-option>
                <a-select-option value="specialized">专精特新</a-select-option>
                <a-select-option value="unicorn">独角兽</a-select-option>
              </a-select>
            </div>
            
            <div class="filter-group">
              <label>拥有专利</label>
              <a-select v-model:value="filters.patents" placeholder="请选择" style="width: 120px">
                <a-select-option value="all">全部</a-select-option>
                <a-select-option value="many">10个以上</a-select-option>
                <a-select-option value="some">1-10个</a-select-option>
                <a-select-option value="none">无</a-select-option>
              </a-select>
            </div>
            
            <div class="filter-group">
              <label>产品类型</label>
              <a-select v-model:value="filters.productType" placeholder="请选择" style="width: 120px">
                <a-select-option value="all">全部</a-select-option>
                <a-select-option value="hardware">硬件</a-select-option>
                <a-select-option value="software">软件</a-select-option>
                <a-select-option value="service">服务</a-select-option>
              </a-select>
            </div>
          </div>

          <!-- 财务规模筛选 -->
          <div class="filter-row">
            <div class="filter-group">
              <label>最新融资</label>
              <a-select v-model:value="filters.financing" placeholder="请选择" style="width: 120px">
                <a-select-option value="all">全部</a-select-option>
                <a-select-option value="series-a">A轮</a-select-option>
                <a-select-option value="series-b">B轮</a-select-option>
                <a-select-option value="ipo">IPO</a-select-option>
              </a-select>
            </div>
            
            <div class="filter-group">
              <label>上市情况</label>
              <a-select v-model:value="filters.listing" placeholder="请选择" style="width: 120px">
                <a-select-option value="all">全部</a-select-option>
                <a-select-option value="listed">已上市</a-select-option>
                <a-select-option value="pre-ipo">拟上市</a-select-option>
                <a-select-option value="private">未上市</a-select-option>
              </a-select>
            </div>
            
            <div class="filter-group">
              <label>注册资本</label>
              <a-select v-model:value="filters.registeredCapital" placeholder="请选择" style="width: 120px">
                <a-select-option value="all">全部</a-select-option>
                <a-select-option value="large">1000万以上</a-select-option>
                <a-select-option value="medium">100-1000万</a-select-option>
                <a-select-option value="small">100万以下</a-select-option>
              </a-select>
            </div>
            
            <div class="filter-group">
              <label>人员规模</label>
              <a-select v-model:value="filters.staffSize" placeholder="请选择" style="width: 120px">
                <a-select-option value="all">全部</a-select-option>
                <a-select-option value="large">500人以上</a-select-option>
                <a-select-option value="medium">50-500人</a-select-option>
                <a-select-option value="small">50人以下</a-select-option>
              </a-select>
            </div>
          </div>

          <!-- 经营能力筛选 -->
          <div class="filter-row">
            <div class="filter-group">
              <label>经营能力</label>
              <a-select v-model:value="filters.operationalCapability" placeholder="请选择" style="width: 120px">
                <a-select-option value="all">全部</a-select-option>
                <a-select-option value="excellent">优秀</a-select-option>
                <a-select-option value="good">良好</a-select-option>
                <a-select-option value="average">一般</a-select-option>
              </a-select>
            </div>
            
            <div class="filter-group">
              <label>年份</label>
              <a-select v-model:value="filters.year" placeholder="2024" style="width: 100px">
                <a-select-option value="2024">2024</a-select-option>
                <a-select-option value="2023">2023</a-select-option>
                <a-select-option value="2022">2022</a-select-option>
              </a-select>
            </div>
            
            <div class="filter-group">
              <label>营收等级</label>
              <a-select v-model:value="filters.revenueLevel" placeholder="请选择" style="width: 120px">
                <a-select-option value="all">全部</a-select-option>
                <a-select-option value="high">高</a-select-option>
                <a-select-option value="medium">中</a-select-option>
                <a-select-option value="low">低</a-select-option>
              </a-select>
            </div>
            
            <div class="filter-group">
              <label>净利润</label>
              <a-select v-model:value="filters.netProfit" placeholder="请选择" style="width: 120px">
                <a-select-option value="all">全部</a-select-option>
                <a-select-option value="positive">盈利</a-select-option>
                <a-select-option value="break-even">持平</a-select-option>
                <a-select-option value="loss">亏损</a-select-option>
              </a-select>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 数据统计和操作区域 -->
    <div class="data-section">
      <div class="container">
        <div class="data-header">
          <div class="data-info">
            <span class="data-count">共有符合条件的企业 <strong>{{ totalCount }}</strong> 个</span>
          </div>
          <div class="data-actions">
            <a-button type="primary" @click="exportData">
              <DownloadOutlined />
              导出
            </a-button>
          </div>
        </div>
      </div>
    </div>

    <!-- 企业列表 -->
    <div class="enterprise-list">
      <div class="container">
        <div class="list-container">
          <div 
            v-for="enterprise in enterpriseList" 
            :key="enterprise.id"
            class="enterprise-item"
            @click="viewEnterpriseDetail(enterprise)"
          >
            <!-- 左侧企业Logo -->
            <div class="enterprise-logo">
              <img 
                :src="enterprise.logo" 
                :alt="enterprise.name"
                @error="handleImageError"
              />
            </div>
            
            <!-- 右侧企业信息 -->
            <div class="enterprise-info">
              <!-- 企业名称和标签 -->
              <div class="enterprise-header">
                <h3 class="enterprise-name">{{ enterprise.name }}</h3>
                <div class="enterprise-tags">
                  <a-tag 
                    v-for="tag in enterprise.tags" 
                    :key="tag"
                    :color="getTagColor(tag)"
                  >
                    {{ tag }}
                  </a-tag>
                </div>
              </div>
              
              <!-- 基本信息 -->
              <div class="enterprise-basic-info">
                <div class="info-row">
                  <span class="info-label">法人：</span>
                  <span class="info-value">{{ enterprise.legalPerson }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">注册资本：</span>
                  <span class="info-value">{{ enterprise.registeredCapital }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">成立日期：</span>
                  <span class="info-value">{{ enterprise.establishmentDate }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">电话：</span>
                  <span class="info-value">{{ enterprise.phone }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">邮箱：</span>
                  <span class="info-value">{{ enterprise.email }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">官网：</span>
                  <span class="info-value">
                    <a :href="enterprise.website" target="_blank">{{ enterprise.website }}</a>
                  </span>
                </div>
                <div class="info-row">
                  <span class="info-label">统一社会信用代码：</span>
                  <span class="info-value">{{ enterprise.creditCode }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">所在地区：</span>
                  <span class="info-value">{{ enterprise.location }}</span>
                </div>
              </div>
              
              <!-- 最新动态 -->
              <div class="enterprise-dynamics">
                <div class="dynamics-header">
                  <h4>最新动态</h4>
                  <a-tabs v-model:activeKey="enterprise.activeTab" size="small">
                    <a-tab-pane key="investment" tab="企业投资" />
                    <a-tab-pane key="external" tab="对外投资" />
                  </a-tabs>
                </div>
                <div class="dynamics-content">
                  <div 
                    v-for="dynamic in enterprise.dynamics" 
                    :key="dynamic.id"
                    class="dynamic-item"
                  >
                    <span class="dynamic-date">{{ dynamic.date }}</span>
                    <span class="dynamic-content">{{ dynamic.content }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 分页 -->
        <div class="pagination-container">
          <a-pagination
            v-model:current="currentPage"
            v-model:page-size="pageSize"
            :total="totalCount"
            :show-size-changer="true"
            :show-quick-jumper="true"
            :show-total="(total, range) => `第 ${range[0]}-${range[1]} 条，共 ${total} 条`"
            @change="handlePageChange"
            @show-size-change="handlePageSizeChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import {
  SearchOutlined,
  DownloadOutlined
} from '@ant-design/icons-vue'

const router = useRouter()

// 搜索和筛选数据
const searchValue = ref('')
const filters = reactive({
  basicInfo: 'all',
  region: [],
  industry: 'all',
  nationalIndustry: 'all',
  companyType: 'all',
  innovation: 'all',
  qualification: 'all',
  patents: 'all',
  productType: 'all',
  financing: 'all',
  listing: 'all',
  registeredCapital: 'all',
  staffSize: 'all',
  operationalCapability: 'all',
  year: '2024',
  revenueLevel: 'all',
  netProfit: 'all'
})

// 分页数据
const currentPage = ref(1)
const pageSize = ref(10)
const totalCount = ref(66546253)

// 地区选项
const regionOptions = [
  {
    value: 'beijing',
    label: '北京',
    children: [
      { value: 'beijing-city', label: '北京市' }
    ]
  },
  {
    value: 'shanghai',
    label: '上海',
    children: [
      { value: 'shanghai-city', label: '上海市' }
    ]
  },
  {
    value: 'guangdong',
    label: '广东',
    children: [
      { value: 'shenzhen', label: '深圳' },
      { value: 'guangzhou', label: '广州' }
    ]
  }
]

// 企业列表数据
const enterpriseList = ref([
  {
    id: 1,
    name: '宁德时代新能源科技股份有限公司',
    logo: '/api/placeholder/60/60',
    tags: ['在营(开业)', '上市企业', '中国500强', '高新技术企业', '民营500强', '世界500强'],
    legalPerson: '曾毓群',
    registeredCapital: '232,947.00万人民币',
    establishmentDate: '2011-12-16',
    phone: '0593-2758888',
    email: 'ir@catl.com',
    website: 'https://www.catl.com',
    creditCode: '91350900MA2Y5K3X1A',
    location: '福建省宁德市',
    activeTab: 'investment',
    dynamics: [
      {
        id: 1,
        date: '2025-08-20',
        content: '宁德时代新能源科技股份有限公司在厦门市投资成立厦门时代新能动力科技有限公司'
      },
      {
        id: 2,
        date: '2025-07-15',
        content: '宁德时代与某汽车制造商签署战略合作协议，共同开发新一代动力电池技术'
      }
    ]
  },
  {
    id: 2,
    name: '立讯精密工业股份有限公司',
    logo: '/api/placeholder/60/60',
    tags: ['在营(开业)', '上市企业', '高新技术企业', '民营500强'],
    legalPerson: '王来春',
    registeredCapital: '71,000.00万人民币',
    establishmentDate: '2004-05-24',
    phone: '0755-29998888',
    email: 'ir@luxshare-ict.com',
    website: 'https://www.luxshare-ict.com',
    creditCode: '91440300708461136T',
    location: '广东省深圳市',
    activeTab: 'investment',
    dynamics: [
      {
        id: 1,
        date: '2025-08-18',
        content: '立讯精密工业股份有限公司完成对某电子制造企业的战略投资'
      }
    ]
  }
])

// 方法
const handleSearch = (value) => {
  console.log('搜索企业:', value)
  // 实现搜索逻辑
}

const exportData = () => {
  console.log('导出数据')
  // 实现导出逻辑
}

const viewEnterpriseDetail = (enterprise) => {
  console.log('查看企业详情:', enterprise)
  // 跳转到企业详情页
  router.push(`/enterprise/${enterprise.id}`)
}

const handleImageError = (event) => {
  // 防止无限循环，如果已经是占位图片就不再处理
  if (event.target.src.includes('data:image') || event.target.src.includes('placeholder')) {
    return
  }
  
  // 使用base64编码的占位图片
  event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0zMCAyMEMzMy4zMTMgMjAgMzYgMjIuNjg3IDM2IDI2QzM2IDI5LjMxMyAzMy4zMTMgMzIgMzAgMzJDMjYuNjg3IDMyIDI0IDI5LjMxMyAyNCAyNkMyNCAyMi42ODcgMjYuNjg3IDIwIDMwIDIwWiIgZmlsbD0iI0NDQ0NDQyIvPgo8cGF0aCBkPSJNMjQgNDRDMjQgNDAuNjg3IDI2LjY4NyAzOCAzMCAzOEMzMy4zMTMgMzggMzYgNDAuNjg3IDM2IDQ0VjQ2SDI0VjQ0WiIgZmlsbD0iI0NDQ0NDQyIvPgo8L3N2Zz4K'
}

const getTagColor = (tag) => {
  const colorMap = {
    '在营(开业)': 'green',
    '上市企业': 'blue',
    '中国500强': 'red',
    '高新技术企业': 'orange',
    '民营500强': 'purple',
    '世界500强': 'gold'
  }
  return colorMap[tag] || 'default'
}

const handlePageChange = (page, size) => {
  currentPage.value = page
  pageSize.value = size
  // 重新加载数据
}

const handlePageSizeChange = (current, size) => {
  currentPage.value = current
  pageSize.value = size
  // 重新加载数据
}

onMounted(() => {
  // 初始化数据
  console.log('企业库页面加载完成')
})
</script>

<style lang="scss" scoped>
.enterprise-library {
  min-height: 100vh;
  background: $bg-secondary;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 $spacing-lg;
}

// 页面头部
.page-header {
  background: $bg-gradient;
  color: $text-white;
  padding: $spacing-xxl 0;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: $spacing-xl;
}

.title-section {
  .page-title {
    font-size: $font-size-xxxl;
    font-weight: 700;
    margin-bottom: $spacing-sm;
  }
  
  .page-subtitle {
    font-size: $font-size-md;
    opacity: 0.9;
  }
}

.search-section {
  flex: 1;
  max-width: 600px;
  
  .main-search {
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

// 筛选条件区域
.filters-section {
  background: $bg-primary;
  border-bottom: 1px solid $border-light;
  padding: $spacing-lg 0;
}

.filters-container {
  .filter-row {
    display: flex;
    gap: $spacing-lg;
    margin-bottom: $spacing-md;
    flex-wrap: wrap;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .filter-group {
    display: flex;
    flex-direction: column;
    gap: $spacing-xs;
    
    label {
      font-size: $font-size-sm;
      color: $text-secondary;
      font-weight: 500;
    }
  }
}

// 数据统计区域
.data-section {
  background: $bg-primary;
  padding: $spacing-md 0;
  border-bottom: 1px solid $border-light;
}

.data-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.data-info {
  .data-count {
    font-size: $font-size-md;
    color: $text-primary;
    
    strong {
      color: $primary-color;
      font-weight: 600;
    }
  }
}

// 企业列表
.enterprise-list {
  padding: $spacing-lg 0;
}

.list-container {
  display: flex;
  flex-direction: column;
  gap: $spacing-md;
}

.enterprise-item {
  background: $bg-primary;
  border-radius: $border-radius-lg;
  padding: $spacing-lg;
  box-shadow: $box-shadow;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  gap: $spacing-lg;
  
  &:hover {
    box-shadow: $box-shadow-hover;
    transform: translateY(-2px);
  }
}

.enterprise-logo {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: $border-radius;
    border: 1px solid $border-light;
  }
}

.enterprise-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: $spacing-md;
}

.enterprise-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: $spacing-md;
  
  .enterprise-name {
    font-size: $font-size-lg;
    font-weight: 600;
    color: $text-primary;
    margin: 0;
    flex: 1;
  }
  
  .enterprise-tags {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-xs;
  }
}

.enterprise-basic-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-sm;
  
  .info-row {
    display: flex;
    align-items: center;
    gap: $spacing-xs;
    
    .info-label {
      font-size: $font-size-sm;
      color: $text-secondary;
      min-width: 80px;
    }
    
    .info-value {
      font-size: $font-size-sm;
      color: $text-primary;
      
      a {
        color: $primary-color;
        text-decoration: none;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

.enterprise-dynamics {
  .dynamics-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: $spacing-sm;
    
    h4 {
      font-size: $font-size-md;
      font-weight: 600;
      color: $text-primary;
      margin: 0;
    }
  }
  
  .dynamics-content {
    .dynamic-item {
      display: flex;
      gap: $spacing-md;
      margin-bottom: $spacing-xs;
      
      .dynamic-date {
        font-size: $font-size-xs;
        color: $text-secondary;
        min-width: 80px;
      }
      
      .dynamic-content {
        font-size: $font-size-sm;
        color: $text-primary;
        flex: 1;
      }
    }
  }
}

// 分页
.pagination-container {
  display: flex;
  justify-content: center;
  margin-top: $spacing-xl;
  padding: $spacing-lg 0;
}

// 响应式设计
@media (max-width: $breakpoint-lg) {
  .header-content {
    flex-direction: column;
    text-align: center;
    gap: $spacing-lg;
  }
  
  .search-section {
    max-width: 100%;
  }
  
  .filter-row {
    justify-content: center;
  }
  
  .enterprise-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .enterprise-basic-info {
    grid-template-columns: 1fr;
  }
}

@media (max-width: $breakpoint-md) {
  .page-title {
    font-size: $font-size-xxl !important;
  }
  
  .filter-row {
    flex-direction: column;
    gap: $spacing-md;
  }
  
  .enterprise-item {
    flex-direction: column;
  }
  
  .enterprise-logo {
    align-self: center;
  }
}
</style>
