# 东钢 · 个人主页（Astro + GitHub Pages）

一个零成本的个人/公司主页，技术栈：Astro 静态生成 + GitHub Pages 自动部署。

## 本地预览

```bash
npm install
npm run dev      # 打开 http://localhost:4321
```

## 上线到 GitHub Pages（自动部署）

1. **站点地址**：已在 `astro.config.mjs` 配好 —— `https://donggang23.github.io`（无需再改）。
2. **改内容**（可选）：编辑 `src/pages/index.astro` 顶部的 `profile` / `directions` /
   `principles`，换成你自己的文字。
3. **建仓库并推送**：仓库名必须是 `donggang23.github.io`，推到 `main` 分支。
   ```bash
   git init
   git add .
   git commit -m "init homepage"
   git branch -M main
   git remote add origin git@github.com:donggang23/donggang23.github.io.git
   git push -u origin main
   ```
4. **开启 Pages**：仓库 → Settings → Pages → Source 选 **GitHub Actions**。
5. 之后每次 `git push` 到 `main`，GitHub Actions 会自动构建并部署，
   几分钟后在 `https://donggang23.github.io` 生效。

## 目录结构

```
github-homepage/
├─ astro.config.mjs        # 站点/路径配置
├─ .github/workflows/      # 自动部署流水线
├─ src/pages/index.astro   # 首页（所有文案在这里改）
├─ public/favicon.svg      # 站点图标
└─ package.json
```

## 进阶

- 绑定自定义域名：买域名 → DNS 的 CNAME 指向 `donggang23.github.io` →
  Settings → Pages 填域名，GitHub 自动签发 HTTPS。
- 想加博客/更多页面：在 `src/pages/` 下加 `.astro` 文件即可。
- 想换主题色：改 `index.astro` 里 `:root` 的 CSS 变量。
