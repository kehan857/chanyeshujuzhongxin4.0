# 防爆产业数据中心

## 项目概述

防爆产业数据中心是一个以产业链为核心，深度整合企业、产品、方案、知识、人才与商业需求的一站式产业智能大脑平台。旨在打破信息孤岛，通过数据驱动与AI赋能，为销售、售前、市场及战略部门提供精准决策支持，提升商业机会转化效率与行业洞察能力。

## 技术栈

- **前端框架**: Vue 3
- **UI组件库**: Ant Design Vue 4.0
- **构建工具**: Vite
- **状态管理**: Pinia
- **路由管理**: Vue Router 4
- **样式预处理**: Sass
- **图标库**: @ant-design/icons-vue

## 项目结构

```
src/
├── components/          # 公共组件
│   └── Header.vue      # 顶部导航组件
├── views/              # 页面组件
│   ├── Home.vue        # 首页
│   └── libraries/      # 9大库页面
│       ├── EnterpriseLibrary.vue      # 企业库
│       ├── SolutionLibrary.vue        # 方案库
│       ├── KnowledgeLibrary.vue       # 知识库
│       ├── TalentLibrary.vue          # 人才库
│       ├── ProductLibrary.vue         # 产品库
│       ├── IndustryChainLibrary.vue   # 产业链库
│       ├── DemandLibrary.vue          # 需求库
│       ├── PolicyLibrary.vue          # 政策库
│       └── IndustryProblemLibrary.vue # 行业问题库
├── router/             # 路由配置
│   └── index.js
├── styles/             # 样式文件
│   ├── variables.scss  # SCSS变量
│   └── index.scss      # 全局样式
├── App.vue             # 根组件
└── main.js             # 入口文件
```

## 功能特性

### 1. 门户首页
- 产品愿景展示
- 核心问题与解决方案
- 常用功能快速入口
- 数据流可视化展示

### 2. 企业库
- 360度全景企业画像
- 企业信息检索与筛选
- 企业标签体系
- 最新动态展示

### 3. 方案库
- 结构化行业解决方案
- AI方案拆解功能
- 技术栈分析
- 成功案例展示

### 4. 知识库
- 行业标准与知识体系
- 文档分类管理
- 相关文档关联
- 适用范围标注

### 5. 人才库
- 专业人才信息管理
- 技能等级分类
- 工作经历展示
- 联系方式管理

### 6. 产品库
- 产品信息与规格管理
- 技术参数展示
- 应用场景标注
- 供应商信息

### 7. 产业链库
- 产业链关系图谱
- 上下游企业展示
- 发展趋势分析
- 典型案例

### 8. 需求库
- 商业需求与机会
- 需求类型分类
- 申报条件展示
- 联系方式管理

### 9. 政策库
- 政策法规与申报指南
- 政策优惠展示
- 申报流程指导
- 适用条件说明

### 10. 行业问题库
- 行业痛点与解决方案
- 问题严重程度分级
- 解决方案评估
- 典型案例展示

## 设计特色

### UI色调
参考天云聚合网站设计，采用深蓝紫色系作为主色调：
- 主色调: `#1A234B` (深蓝紫)
- 辅助色: `#1890FF` (蓝色)
- 强调色: `#FF6B35` (橙色)
- 背景色: 白色和浅灰色

### 设计原则
- 遵循Ant Design设计规范
- 响应式设计，支持多端适配
- 卡片式布局，信息层次清晰
- 统一的交互体验

## 安装与运行

### 环境要求
- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装依赖
```bash
npm install
```

### 开发环境运行
```bash
npm run dev
```

### 生产环境构建
```bash
npm run build
```

### 预览构建结果
```bash
npm run preview
```

## 开发指南

### 添加新页面
1. 在 `src/views/` 目录下创建新的Vue组件
2. 在 `src/router/index.js` 中添加路由配置
3. 在 `src/components/Header.vue` 中添加导航菜单项

### 样式开发
- 使用SCSS预处理器
- 遵循BEM命名规范
- 使用全局变量定义颜色和尺寸
- 响应式断点定义在 `variables.scss` 中

### 组件开发
- 使用Vue 3 Composition API
- 遵循Ant Design Vue组件规范
- 保持组件的单一职责原则
- 添加适当的TypeScript类型定义

## 部署说明

### 构建配置
项目使用Vite作为构建工具，配置文件为 `vite.config.js`。

### 部署步骤
1. 执行 `npm run build` 构建生产版本
2. 将 `dist` 目录部署到Web服务器
3. 配置服务器支持SPA路由（History模式）

### 环境变量
可以通过环境变量配置API地址等参数：
```bash
VITE_API_BASE_URL=https://api.example.com
```

## 浏览器支持

- Chrome >= 87
- Firefox >= 78
- Safari >= 14
- Edge >= 88

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 联系方式

- 项目维护者: 防爆产业数据中心团队
- 邮箱: contact@explosion-proof-data.com
- 电话: 400-999-3607

## 更新日志

### v1.0.0 (2024-01-20)
- 初始版本发布
- 实现9大库基础功能
- 完成响应式设计
- 集成Ant Design Vue组件库
