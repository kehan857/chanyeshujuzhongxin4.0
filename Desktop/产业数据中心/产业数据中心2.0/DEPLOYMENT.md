# GitHub Pages 部署指南

## 问题解决步骤

### 1. 启用 GitHub Pages

1. 进入仓库设置页面：https://github.com/kehan857/chanyeshujuzhongxin-2.0/settings/pages

2. 在 "Source" 部分选择：
   - **Source**: Deploy from a branch
   - **Branch**: gh-pages
   - **Folder**: / (root)

3. 点击 "Save" 保存设置

### 2. 检查部署状态

1. 进入 Actions 页面：https://github.com/kehan857/chanyeshujuzhongxin-2.0/actions
2. 查看 "Deploy to GitHub Pages" 工作流是否成功运行
3. 如果失败，点击查看详细错误信息

### 3. 访问网站

部署成功后，访问：https://kehan857.github.io/chanyeshujuzhongxin-2.0/

### 4. 常见问题解决

#### 问题1：404错误
- 确保选择了 "GitHub Actions" 作为部署源
- 检查 Actions 工作流是否成功运行
- 等待几分钟让部署生效

#### 问题2：页面空白
- 检查浏览器控制台是否有JavaScript错误
- 清除浏览器缓存
- 尝试无痕模式访问

#### 问题3：路由不工作
- 项目已配置SPA路由支持
- 404.html文件会自动重定向到正确的路由

### 5. 手动触发部署

如果需要手动触发部署：
1. 进入 Actions 页面
2. 选择 "Deploy to GitHub Pages" 工作流
3. 点击 "Run workflow" 按钮

### 6. 本地测试

本地开发环境：
```bash
npm run dev
```
访问：http://localhost:5000

本地构建测试：
```bash
npm run build
npm run preview
```

## 技术说明

### 部署配置
- 使用最新的 GitHub Actions 部署方式
- 自动构建 Vue 3 + Vite 项目
- 支持 SPA 路由
- 自动处理 base 路径

### 路由配置
- 开发环境：使用根路径 `/`
- 生产环境：使用 GitHub Pages 路径 `/chanyeshujuzhongxin-2.0/`

### 文件结构
```
dist/                    # 构建输出目录
├── index.html          # 主页面
├── assets/             # 静态资源
└── 404.html           # SPA路由重定向
```
