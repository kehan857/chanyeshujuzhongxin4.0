# GitHub Pages 部署指南

## 📋 部署状态

**仓库地址**: https://github.com/kehan857/chanyeshujuzhongxin3.0
**GitHub Pages URL**: https://kehan857.github.io/chanyeshujuzhongxin3.0/

## 🚀 配置步骤

### 步骤1: 检查Actions部署状态

1. 访问Actions页面: https://github.com/kehan857/chanyeshujuzhongxin3.0/actions
2. 查看 "Deploy to GitHub Pages" 工作流
3. 确认状态为绿色 ✅

### 步骤2: 配置GitHub Pages

1. 访问仓库设置: https://github.com/kehan857/chanyeshujuzhongxin3.0/settings/pages

2. 在 "Build and deployment" 部分配置：
   - **Source**: Deploy from a branch
   - **Branch**: gh-pages
   - **Folder**: / (root)

3. 点击 "Save" 保存设置

### 步骤3: 等待部署完成

- 等待2-3分钟让GitHub Pages部署完成
- 访问: https://kehan857.github.io/chanyeshujuzhongxin3.0/

### 步骤4: 验证部署

- 强制刷新浏览器: Ctrl+Shift+R (Windows) 或 Cmd+Shift+R (Mac)
- 应该看到天云产业数据中心首页

## ⚙️ 技术配置

- **Framework**: Vue 3 + Vite
- **UI Library**: Ant Design Vue
- **Build Output**: dist/
- **Base Path**: /chanyeshujuzhongxin3.0/
- **Deploy Tool**: peaceiris/actions-gh-pages@v3

## 🔧 如果遇到问题

### 问题1: Actions失败
- 检查Actions日志查看具体错误
- 确认package.json中的依赖正确安装

### 问题2: 404错误
- 确认GitHub Pages设置为从gh-pages分支部署
- 确认分支已经创建（Actions成功后会自动创建）

### 问题3: 页面空白
- 检查浏览器控制台是否有JavaScript错误
- 确认base path配置正确

## 📝 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 🎯 项目功能

- ✅ 9大库导航系统
- ✅ 企业库360度全景画像
- ✅ 响应式设计
- ✅ 天云聚合UI色调
- ✅ 完整的路由系统
