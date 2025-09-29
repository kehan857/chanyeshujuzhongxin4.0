<template>
  <div class="product-library">
    <Header />
    
    <div class="page-header">
      <div class="container">
        <div class="header-content">
          <div class="title-section">
            <h1 class="page-title">产品库</h1>
            <p class="page-subtitle">产品信息与规格管理，提供全面的产品技术参数和选型指导</p>
          </div>
          
          <div class="search-section">
            <a-input-search
              v-model:value="searchValue"
              placeholder="输入关键词搜索产品，如：产品名称、型号、品牌、规格..."
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

    <div class="filters-section">
      <div class="container">
        <div class="filters-container">
          <div class="filter-row">
            <div class="filter-group">
              <label>产品类别</label>
              <a-select v-model:value="filters.category" placeholder="请选择" style="width: 150px">
                <a-select-option value="all">全部</a-select-option>
                <a-select-option value="hardware">硬件设备</a-select-option>
                <a-select-option value="software">软件系统</a-select-option>
                <a-select-option value="sensor">传感器</a-select-option>
                <a-select-option value="controller">控制器</a-select-option>
              </a-select>
            </div>
            
            <div class="filter-group">
              <label>品牌</label>
              <a-select v-model:value="filters.brand" placeholder="请选择" style="width: 120px">
                <a-select-option value="all">全部</a-select-option>
                <a-select-option value="siemens">西门子</a-select-option>
                <a-select-option value="schneider">施耐德</a-select-option>
                <a-select-option value="abb">ABB</a-select-option>
                <a-select-option value="honeywell">霍尼韦尔</a-select-option>
              </a-select>
            </div>
            
            <div class="filter-group">
              <label>防爆等级</label>
              <a-select v-model:value="filters.explosionProof" placeholder="请选择" style="width: 120px">
                <a-select-option value="all">全部</a-select-option>
                <a-select-option value="Exd">Exd</a-select-option>
                <a-select-option value="Exe">Exe</a-select-option>
                <a-select-option value="Exi">Exi</a-select-option>
                <a-select-option value="Exp">Exp</a-select-option>
              </a-select>
            </div>
            
            <div class="filter-group">
              <label>价格区间</label>
              <a-select v-model:value="filters.priceRange" placeholder="请选择" style="width: 120px">
                <a-select-option value="all">全部</a-select-option>
                <a-select-option value="low">1万以下</a-select-option>
                <a-select-option value="medium">1-10万</a-select-option>
                <a-select-option value="high">10万以上</a-select-option>
              </a-select>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="data-section">
      <div class="container">
        <div class="data-header">
          <div class="data-info">
            <span class="data-count">共有符合条件的产品 <strong>{{ totalCount }}</strong> 个</span>
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

    <div class="product-list">
      <div class="container">
        <div class="list-container">
          <div 
            v-for="product in productList" 
            :key="product.id"
            class="product-item"
            @click="viewProductDetail(product)"
          >
            <div class="product-image">
              <img 
                :src="product.image" 
                :alt="product.name"
                @error="handleImageError"
              />
            </div>
            
            <div class="product-info">
              <div class="product-header">
                <h3 class="product-name">{{ product.name }}</h3>
                <div class="product-tags">
                  <a-tag 
                    v-for="tag in product.tags" 
                    :key="tag"
                    :color="getTagColor(tag)"
                  >
                    {{ tag }}
                  </a-tag>
                </div>
              </div>
              
              <div class="product-basic-info">
                <div class="info-row">
                  <span class="info-label">产品型号：</span>
                  <span class="info-value">{{ product.model }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">品牌：</span>
                  <span class="info-value">{{ product.brand }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">产品类别：</span>
                  <span class="info-value">{{ product.category }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">防爆等级：</span>
                  <span class="info-value">{{ product.explosionProof }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">参考价格：</span>
                  <span class="info-value">{{ product.price }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">供应商：</span>
                  <span class="info-value">{{ product.supplier }}</span>
                </div>
              </div>
              
              <div class="product-description">
                <h4>产品描述</h4>
                <p>{{ product.description }}</p>
              </div>
              
              <div class="product-specifications">
                <h4>技术规格</h4>
                <div class="specs-grid">
                  <div 
                    v-for="spec in product.specifications" 
                    :key="spec.name"
                    class="spec-item"
                  >
                    <span class="spec-name">{{ spec.name }}：</span>
                    <span class="spec-value">{{ spec.value }}</span>
                  </div>
                </div>
              </div>
              
              <div class="product-applications">
                <h4>应用场景</h4>
                <div class="applications-list">
                  <a-tag 
                    v-for="app in product.applications" 
                    :key="app"
                    class="app-tag"
                  >
                    {{ app }}
                  </a-tag>
                </div>
              </div>
            </div>
          </div>
        </div>
        
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

const searchValue = ref('')
const filters = reactive({
  category: 'all',
  brand: 'all',
  explosionProof: 'all',
  priceRange: 'all'
})

const currentPage = ref(1)
const pageSize = ref(10)
const totalCount = ref(25800)

const productList = ref([
  {
    id: 1,
    name: '防爆型压力变送器',
    image: '/api/placeholder/120/120',
    tags: ['防爆设备', '压力测量', '工业级'],
    model: 'PT-2000-Ex',
    brand: '霍尼韦尔',
    category: '传感器',
    explosionProof: 'Exd IIC T6',
    price: '8,500元',
    supplier: '霍尼韦尔中国',
    description: '高精度防爆型压力变送器，适用于危险环境中的压力测量，具有优异的稳定性和可靠性。',
    specifications: [
      { name: '测量范围', value: '0-100MPa' },
      { name: '精度', value: '±0.1%FS' },
      { name: '输出信号', value: '4-20mA' },
      { name: '工作温度', value: '-40°C~+85°C' },
      { name: '防护等级', value: 'IP65' }
    ],
    applications: ['石油化工', '天然气', '煤矿', '制药', '食品加工']
  }
])

const handleSearch = (value) => {
  console.log('搜索产品:', value)
}

const exportData = () => {
  console.log('导出产品数据')
}

const viewProductDetail = (product) => {
  console.log('查看产品详情:', product)
}

const handleImageError = (event) => {
  // 防止无限循环，如果已经是占位图片就不再处理
  if (event.target.src.includes('data:image') || event.target.src.includes('placeholder')) {
    return
  }
  
  // 使用base64编码的占位图片
  event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik02MCA0MEM2Ni42MjcgNDAgNzIgNDUuMzcyIDcyIDUyQzcyIDU4LjYyNyA2Ni42MjcgNjQgNjAgNjRDNTMuMzcyIDY0IDQ4IDU4LjYyNyA0OCA1MkM0OCA0NS4zNzIgNTMuMzcyIDQwIDYwIDQwWiIgZmlsbD0iI0NDQ0NDQyIvPgo8cGF0aCBkPSJNNDggODhDNDggODEuMzcyIDUzLjM3MiA3NiA2MCA3NkM2Ni42MjcgNzYgNzIgODEuMzcyIDcyIDg4VjkySDQ4Vjg4WiIgZmlsbD0iI0NDQ0NDQyIvPgo8L3N2Zz4K'
}

const getTagColor = (tag) => {
  const colorMap = {
    '防爆设备': 'red',
    '压力测量': 'blue',
    '工业级': 'green',
    '温度测量': 'orange',
    '流量测量': 'purple'
  }
  return colorMap[tag] || 'default'
}

const handlePageChange = (page, size) => {
  currentPage.value = page
  pageSize.value = size
}

const handlePageSizeChange = (current, size) => {
  currentPage.value = current
  pageSize.value = size
}

onMounted(() => {
  console.log('产品库页面加载完成')
})
</script>

<style lang="scss" scoped>
.product-library {
  min-height: 100vh;
  background: $bg-secondary;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 $spacing-lg;
}

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

.filters-section {
  background: $bg-primary;
  border-bottom: 1px solid $border-light;
  padding: $spacing-lg 0;
}

.filters-container {
  .filter-row {
    display: flex;
    gap: $spacing-lg;
    flex-wrap: wrap;
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

.product-list {
  padding: $spacing-lg 0;
}

.list-container {
  display: flex;
  flex-direction: column;
  gap: $spacing-lg;
}

.product-item {
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

.product-image {
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: $border-radius;
    border: 1px solid $border-light;
  }
}

.product-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: $spacing-md;
}

.product-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: $spacing-md;
  
  .product-name {
    font-size: $font-size-lg;
    font-weight: 600;
    color: $text-primary;
    margin: 0;
    flex: 1;
  }
  
  .product-tags {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-xs;
  }
}

.product-basic-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
    }
  }
}

.product-description {
  h4 {
    font-size: $font-size-md;
    font-weight: 600;
    color: $text-primary;
    margin-bottom: $spacing-sm;
  }
  
  p {
    color: $text-secondary;
    line-height: 1.6;
  }
}

.product-specifications {
  h4 {
    font-size: $font-size-md;
    font-weight: 600;
    color: $text-primary;
    margin-bottom: $spacing-sm;
  }
  
  .specs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: $spacing-sm;
  }
  
  .spec-item {
    display: flex;
    gap: $spacing-xs;
    
    .spec-name {
      font-size: $font-size-sm;
      color: $text-secondary;
      min-width: 80px;
    }
    
    .spec-value {
      font-size: $font-size-sm;
      color: $text-primary;
    }
  }
}

.product-applications {
  h4 {
    font-size: $font-size-md;
    font-weight: 600;
    color: $text-primary;
    margin-bottom: $spacing-sm;
  }
  
  .applications-list {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-xs;
  }
  
  .app-tag {
    margin: 0;
  }
}

.pagination-container {
  display: flex;
  justify-content: center;
  margin-top: $spacing-xl;
  padding: $spacing-lg 0;
}

@media (max-width: $breakpoint-lg) {
  .header-content {
    flex-direction: column;
    text-align: center;
    gap: $spacing-lg;
  }
  
  .search-section {
    max-width: 100%;
  }
  
  .product-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .product-basic-info {
    grid-template-columns: 1fr;
  }
  
  .specs-grid {
    grid-template-columns: 1fr !important;
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
  
  .product-item {
    flex-direction: column;
  }
  
  .product-image {
    align-self: center;
  }
}
</style>
