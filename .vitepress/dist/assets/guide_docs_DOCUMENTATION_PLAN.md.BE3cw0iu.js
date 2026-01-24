import{_ as a,c as i,o as n,ag as l}from"./chunks/framework.dvv-DFtf.js";const E=JSON.parse('{"title":"AAStar SDK 文档生成和发布方案","description":"","frontmatter":{},"headers":[],"relativePath":"guide/docs/DOCUMENTATION_PLAN.md","filePath":"guide/docs/DOCUMENTATION_PLAN.md","lastUpdated":null}'),e={name:"guide/docs/DOCUMENTATION_PLAN.md"};function t(p,s,h,k,r,d){return n(),i("div",null,[...s[0]||(s[0]=[l(`<h1 id="aastar-sdk-文档生成和发布方案" tabindex="-1">AAStar SDK 文档生成和发布方案 <a class="header-anchor" href="#aastar-sdk-文档生成和发布方案" aria-label="Permalink to &quot;AAStar SDK 文档生成和发布方案&quot;">​</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p>本文档定义了AAStar SDK的完整文档生成、维护和发布流程。</p><hr><h2 id="_1-技术栈选择" tabindex="-1">1. 技术栈选择 <a class="header-anchor" href="#_1-技术栈选择" aria-label="Permalink to &quot;1. 技术栈选择&quot;">​</a></h2><h3 id="推荐方案-vitepress" tabindex="-1">推荐方案: VitePress <a class="header-anchor" href="#推荐方案-vitepress" aria-label="Permalink to &quot;推荐方案: VitePress&quot;">​</a></h3><p><strong>优势</strong>:</p><ul><li>⚡ 基于Vite,构建速度极快</li><li>📝 原生Markdown支持</li><li>🎨 Vue组件集成</li><li>🔍 内置全文搜索</li><li>📱 响应式设计</li><li>🚀 零配置部署到GitHub Pages/Vercel</li></ul><p><strong>替代方案</strong>: Docusaurus (React生态)</p><hr><h2 id="_2-仓库架构" tabindex="-1">2. 仓库架构 <a class="header-anchor" href="#_2-仓库架构" aria-label="Permalink to &quot;2. 仓库架构&quot;">​</a></h2><h3 id="_2-1-sdk仓库-aastar-sdk" tabindex="-1">2.1 SDK仓库 (<code>aastar-sdk</code>) <a class="header-anchor" href="#_2-1-sdk仓库-aastar-sdk" aria-label="Permalink to &quot;2.1 SDK仓库 (\`aastar-sdk\`)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>aastar-sdk/</span></span>
<span class="line"><span>├── packages/                    # SDK源码</span></span>
<span class="line"><span>│   ├── core/</span></span>
<span class="line"><span>│   ├── account/</span></span>
<span class="line"><span>│   ├── paymaster/</span></span>
<span class="line"><span>│   └── ...</span></span>
<span class="line"><span>├── docs/                        # 文档源文件</span></span>
<span class="line"><span>│   ├── guide/                   # 手写指南</span></span>
<span class="line"><span>│   │   ├── getting-started.md</span></span>
<span class="line"><span>│   │   ├── concepts.md</span></span>
<span class="line"><span>│   │   └── use-cases/</span></span>
<span class="line"><span>│   │       ├── community-management.md</span></span>
<span class="line"><span>│   │       ├── gasless-transactions.md</span></span>
<span class="line"><span>│   │       └── operator-staking.md</span></span>
<span class="line"><span>│   ├── api/                     # 自动生成的API文档</span></span>
<span class="line"><span>│   │   ├── core.md</span></span>
<span class="line"><span>│   │   ├── account.md</span></span>
<span class="line"><span>│   │   └── ...</span></span>
<span class="line"><span>│   └── examples/                # 完整示例</span></span>
<span class="line"><span>│       ├── operator-flow.md</span></span>
<span class="line"><span>│       ├── community-flow.md</span></span>
<span class="line"><span>│       └── enduser-flow.md</span></span>
<span class="line"><span>├── scripts/</span></span>
<span class="line"><span>│   ├── generate-api-docs.ts    # API文档生成脚本</span></span>
<span class="line"><span>│   └── sync-to-docs-repo.sh    # 同步到文档仓库</span></span>
<span class="line"><span>└── package.json</span></span></code></pre></div><h3 id="_2-2-文档仓库-aastar-docs" tabindex="-1">2.2 文档仓库 (<code>aastar-docs</code>) <a class="header-anchor" href="#_2-2-文档仓库-aastar-docs" aria-label="Permalink to &quot;2.2 文档仓库 (\`aastar-docs\`)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>aastar-docs/</span></span>
<span class="line"><span>├── .vitepress/</span></span>
<span class="line"><span>│   ├── config.ts               # VitePress配置</span></span>
<span class="line"><span>│   ├── theme/                  # 自定义主题</span></span>
<span class="line"><span>│   └── components/             # Vue组件</span></span>
<span class="line"><span>├── public/                     # 静态资源</span></span>
<span class="line"><span>│   ├── logo.svg</span></span>
<span class="line"><span>│   └── images/</span></span>
<span class="line"><span>├── index.md                    # 首页</span></span>
<span class="line"><span>├── guide/                      # 从SDK repo同步</span></span>
<span class="line"><span>├── api/                        # 从SDK repo同步</span></span>
<span class="line"><span>├── examples/                   # 从SDK repo同步</span></span>
<span class="line"><span>└── package.json</span></span></code></pre></div><hr><h2 id="_3-自动化工作流" tabindex="-1">3. 自动化工作流 <a class="header-anchor" href="#_3-自动化工作流" aria-label="Permalink to &quot;3. 自动化工作流&quot;">​</a></h2><h3 id="_3-1-api文档自动生成" tabindex="-1">3.1 API文档自动生成 <a class="header-anchor" href="#_3-1-api文档自动生成" aria-label="Permalink to &quot;3.1 API文档自动生成&quot;">​</a></h3><p>使用 <strong>TypeDoc</strong> 或 <strong>API Extractor</strong> 从TypeScript源码提取API文档。</p><p><strong>脚本</strong>: <code>scripts/generate-api-docs.ts</code></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Application } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;typedoc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> generateAPIDocs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Application</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  app.options.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addReader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TypeDocReader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bootstrap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    entryPoints: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;packages/*/src/index.ts&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    out: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;docs/api&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    plugin: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;typedoc-plugin-markdown&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> project</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">convert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">generateDocs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(project, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;docs/api&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="_3-2-文档同步流程" tabindex="-1">3.2 文档同步流程 <a class="header-anchor" href="#_3-2-文档同步流程" aria-label="Permalink to &quot;3.2 文档同步流程&quot;">​</a></h3><p>文档同步使用 <code>scripts/extract-docs.sh</code> 腳本，手動調用命令為 <code>pnpm run docs:sync</code>。</p><p><strong>流程</strong>:</p><ol><li>在 <code>aastar-sdk</code> 運行 <code>pnpm run docs:generate</code> 生成最新 API 文檔。</li><li>運行 <code>pnpm run docs:sync</code> 將 <code>docs/</code> 文件夾內容同步到 <code>aastar-docs</code>。</li><li>同步過程會保持相同的目錄結構 (<code>guide/</code>, <code>api/</code>, <code>examples/</code>)。</li></ol><p><strong>Shell 腳本核心邏輯</strong>: \`\`\`bash</p><h1 id="同步-guide" tabindex="-1">同步 Guide <a class="header-anchor" href="#同步-guide" aria-label="Permalink to &quot;同步 Guide&quot;">​</a></h1><p>cp -r &quot;$SDK_REPO/docs/guide/&quot;* &quot;$DOCS_REPO/guide/&quot;</p><h1 id="同步-api" tabindex="-1">同步 API <a class="header-anchor" href="#同步-api" aria-label="Permalink to &quot;同步 API&quot;">​</a></h1><p>cp -r &quot;$SDK_REPO/docs/api/&quot;* &quot;$DOCS_REPO/api/&quot;</p><h1 id="同步-examples" tabindex="-1">同步 Examples <a class="header-anchor" href="#同步-examples" aria-label="Permalink to &quot;同步 Examples&quot;">​</a></h1><p>cp -r &quot;$SDK_REPO/docs/examples/&quot;* &quot;$DOCS_REPO/examples/&quot; \`\`\`</p><h3 id="_3-3-文档站点部署" tabindex="-1">3.3 文档站点部署 <a class="header-anchor" href="#_3-3-文档站点部署" aria-label="Permalink to &quot;3.3 文档站点部署&quot;">​</a></h3><h2 id="use-docs-repo-shell-to-deploy" tabindex="-1">Use docs repo shell to deploy. <a class="header-anchor" href="#use-docs-repo-shell-to-deploy" aria-label="Permalink to &quot;Use docs repo shell to deploy.&quot;">​</a></h2><h2 id="_4-文档结构设计" tabindex="-1">4. 文档结构设计 <a class="header-anchor" href="#_4-文档结构设计" aria-label="Permalink to &quot;4. 文档结构设计&quot;">​</a></h2><h3 id="_4-1-首页-index-md" tabindex="-1">4.1 首页 (index.md) <a class="header-anchor" href="#_4-1-首页-index-md" aria-label="Permalink to &quot;4.1 首页 (index.md)&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># AAStar SDK</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">&gt; Build Your Own Protocol (YOP) with Account Abstraction</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## Features</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 🚀 Gasless Transactions (SuperPaymaster AOA+)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 🌈 EOA Rainbow Bridge</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 🏛️ Community Management</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 🎯 Reputation System</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## Quick Start</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">Get Started →</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">/guide/getting-started</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="_4-2-指南结构" tabindex="-1">4.2 指南结构 <a class="header-anchor" href="#_4-2-指南结构" aria-label="Permalink to &quot;4.2 指南结构&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>guide/</span></span>
<span class="line"><span>├── index.md                    # 指南概览</span></span>
<span class="line"><span>├── getting-started.md          # 快速开始</span></span>
<span class="line"><span>├── concepts/</span></span>
<span class="line"><span>│   ├── account-abstraction.md</span></span>
<span class="line"><span>│   ├── superpaymaster.md</span></span>
<span class="line"><span>│   └── reputation-system.md</span></span>
<span class="line"><span>├── use-cases/</span></span>
<span class="line"><span>│   ├── community-management.md</span></span>
<span class="line"><span>│   ├── gasless-transactions.md</span></span>
<span class="line"><span>│   ├── operator-staking.md</span></span>
<span class="line"><span>│   └── rainbow-bridge.md</span></span>
<span class="line"><span>└── advanced/</span></span>
<span class="line"><span>    ├── custom-paymaster.md</span></span>
<span class="line"><span>    └── multi-chain.md</span></span></code></pre></div><h3 id="_4-3-api文档结构-按角色组织" tabindex="-1">4.3 API文档结构 (按角色组织) <a class="header-anchor" href="#_4-3-api文档结构-按角色组织" aria-label="Permalink to &quot;4.3 API文档结构 (按角色组织)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>api/</span></span>
<span class="line"><span>├── index.md                    # API概览</span></span>
<span class="line"><span>├── roles/</span></span>
<span class="line"><span>│   ├── operator.md             # Operator角色API</span></span>
<span class="line"><span>│   ├── community.md            # Community角色API</span></span>
<span class="line"><span>│   ├── enduser.md              # EndUser角色API</span></span>
<span class="line"><span>│   └── admin.md                # Admin角色API</span></span>
<span class="line"><span>├── modules/</span></span>
<span class="line"><span>│   ├── core.md                 # Core模块</span></span>
<span class="line"><span>│   ├── account.md              # Account模块</span></span>
<span class="line"><span>│   ├── paymaster.md            # Paymaster模块</span></span>
<span class="line"><span>│   ├── tokens.md               # Tokens模块</span></span>
<span class="line"><span>│   └── identity.md             # Identity模块</span></span>
<span class="line"><span>└── types/</span></span>
<span class="line"><span>    ├── common.md               # 通用类型</span></span>
<span class="line"><span>    └── errors.md               # 错误类型</span></span></code></pre></div><hr><h2 id="_5-api文档模板" tabindex="-1">5. API文档模板 <a class="header-anchor" href="#_5-api文档模板" aria-label="Permalink to &quot;5. API文档模板&quot;">​</a></h2><h3 id="_5-1-模块文档模板" tabindex="-1">5.1 模块文档模板 <a class="header-anchor" href="#_5-1-模块文档模板" aria-label="Permalink to &quot;5.1 模块文档模板&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># @aastar/core</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Core configuration and client creation utilities.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## Installation</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\`\\\`\\\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bash</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pnpm add @aastar/core</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## Exports</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">Networks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">#networks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">Contracts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">#contracts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">Clients</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">#clients</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">Constants</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">#constants</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## Networks</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### getNetwork()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Get network configuration for a supported network.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**Signature:**</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\`\\\`\\\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">typescript</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">function getNetwork(network: SupportedNetwork): NetworkConfig</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**Parameters:**</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Name | Type | Description |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|------|-------------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| network | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`SupportedNetwork\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | Network name (&#39;sepolia&#39; \\| &#39;optimism&#39; \\| &#39;anvil&#39;) |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**Returns:**</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Type | Description |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|-------------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`NetworkConfig\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | Network configuration object |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**Type Definitions:**</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\`\\\`\\\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">typescript</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">type SupportedNetwork = &#39;sepolia&#39; | &#39;optimism&#39; | &#39;optimism-sepolia&#39; | &#39;anvil&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">interface NetworkConfig {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  chainId: number;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name: string;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  rpcUrl: string;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  blockExplorer: string;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  nativeCurrency: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: string;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    symbol: string;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    decimals: number;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**Example:**</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\`\\\`\\\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">typescript</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import { getNetwork } from &#39;@aastar/core&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const network = getNetwork(&#39;sepolia&#39;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.log(network.chainId); // 11155111</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.log(network.rpcUrl);  // &#39;https://rpc.sepolia.org&#39;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**Errors:**</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Throws if network is not supported</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**See Also:**</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">getTxUrl()</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">#gettxurl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">getChainId()</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">#getchainid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="_5-2-角色文档模板" tabindex="-1">5.2 角色文档模板 <a class="header-anchor" href="#_5-2-角色文档模板" aria-label="Permalink to &quot;5.2 角色文档模板&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># Operator API</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">API reference for Paymaster operators.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## Overview</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Operators are responsible for:</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Staking GTokens</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Depositing to Paymaster</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Managing withdrawals</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Monitoring performance</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## Client Creation</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### createOperatorClient()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Create a client for Paymaster operators.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">详细文档...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## Actions</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### stake()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Stake GTokens to become an operator.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**Context:**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Use this when you want to register as a Paymaster operator.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**Prerequisites:**</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Must have GTokens</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Must approve GTokenStaking contract</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**Signature:**</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\`\\\`\\\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">typescript</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">stake(params: StakeParams): Promise&lt;Hash&gt;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**Parameters:**</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Name | Type | Description |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|------|-------------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| params.amount | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`bigint\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | Amount to stake (in wei) |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**Returns:**</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Type | Description |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|-------------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`Promise&lt;Hash&gt;\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | Transaction hash |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**Example:**</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\`\\\`\\\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">typescript</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import { createOperatorClient } from &#39;@aastar/core&#39;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import { parseEther } from &#39;viem&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const operator = createOperatorClient({...});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// Approve first</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">await operator.approveGToken({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  spender: CONTRACTS.sepolia.gTokenStaking,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  amount: parseEther(&#39;100&#39;),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// Then stake</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const txHash = await operator.stake({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  amount: parseEther(&#39;100&#39;),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\`\\\`\\\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**Errors:**</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`InsufficientBalance\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> - Not enough GTokens</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`InsufficientAllowance\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> - Need to approve first</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`MinimumStakeNotMet\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> - Amount below minimum</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**Events Emitted:**</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`Staked(operator, amount)\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**See Also:**</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">deposit()</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">#deposit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">withdraw()</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">#withdraw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><hr><h2 id="_6-实施步骤" tabindex="-1">6. 实施步骤 <a class="header-anchor" href="#_6-实施步骤" aria-label="Permalink to &quot;6. 实施步骤&quot;">​</a></h2><h3 id="phase-1-基础设施搭建-1-2天" tabindex="-1">Phase 1: 基础设施搭建 (1-2天) <a class="header-anchor" href="#phase-1-基础设施搭建-1-2天" aria-label="Permalink to &quot;Phase 1: 基础设施搭建 (1-2天)&quot;">​</a></h3><ul><li>[ ] 创建<code>aastar-docs</code>仓库</li><li>[ ] 安装VitePress并配置</li><li>[ ] 设置GitHub Actions自动部署</li><li>[ ] 配置自定义域名<code>docs.aastar.io</code></li></ul><h3 id="phase-2-api文档生成-2-3天" tabindex="-1">Phase 2: API文档生成 (2-3天) <a class="header-anchor" href="#phase-2-api文档生成-2-3天" aria-label="Permalink to &quot;Phase 2: API文档生成 (2-3天)&quot;">​</a></h3><ul><li>[ ] 安装TypeDoc和相关插件</li><li>[ ] 编写<code>generate-api-docs.ts</code>脚本</li><li>[ ] 为每个模块生成API文档</li><li>[ ] 添加类型定义和错误说明</li></ul><h3 id="phase-3-指南编写-3-5天" tabindex="-1">Phase 3: 指南编写 (3-5天) <a class="header-anchor" href="#phase-3-指南编写-3-5天" aria-label="Permalink to &quot;Phase 3: 指南编写 (3-5天)&quot;">​</a></h3><ul><li>[ ] 编写快速开始指南</li><li>[ ] 编写核心概念文档</li><li>[ ] 编写用例文档(社区管理、无Gas交易等)</li><li>[ ] 编写高级主题文档</li></ul><h3 id="phase-4-角色文档-2-3天" tabindex="-1">Phase 4: 角色文档 (2-3天) <a class="header-anchor" href="#phase-4-角色文档-2-3天" aria-label="Permalink to &quot;Phase 4: 角色文档 (2-3天)&quot;">​</a></h3><ul><li>[ ] 按角色组织API文档</li><li>[ ] 为每个角色编写完整工作流</li><li>[ ] 添加实际代码示例</li><li>[ ] 添加最佳实践</li></ul><h3 id="phase-5-自动化和优化-1-2天" tabindex="-1">Phase 5: 自动化和优化 (1-2天) <a class="header-anchor" href="#phase-5-自动化和优化-1-2天" aria-label="Permalink to &quot;Phase 5: 自动化和优化 (1-2天)&quot;">​</a></h3><ul><li>[ ] 设置自动同步workflow</li><li>[ ] 添加文档搜索功能</li><li>[ ] 优化移动端显示</li><li>[ ] 添加代码playground (可选)</li></ul><hr><h2 id="_7-维护流程" tabindex="-1">7. 维护流程 <a class="header-anchor" href="#_7-维护流程" aria-label="Permalink to &quot;7. 维护流程&quot;">​</a></h2><h3 id="日常维护" tabindex="-1">日常维护 <a class="header-anchor" href="#日常维护" aria-label="Permalink to &quot;日常维护&quot;">​</a></h3><ol><li><p><strong>代码变更时</strong>:</p><ul><li>开发者提交PR</li><li>CI自动运行<code>pnpm run docs:generate</code></li><li>检查API文档变更</li><li>合并后自动同步到docs repo</li></ul></li><li><p><strong>手动文档更新</strong>:</p><ul><li>在SDK repo的<code>docs/</code>目录编辑</li><li>提交后自动同步</li></ul></li><li><p><strong>版本发布</strong>:</p><ul><li>打tag时自动生成版本化文档</li><li>保留历史版本文档</li></ul></li></ol><h3 id="质量保证" tabindex="-1">质量保证 <a class="header-anchor" href="#质量保证" aria-label="Permalink to &quot;质量保证&quot;">​</a></h3><ul><li>[ ] 文档链接检查</li><li>[ ] 代码示例可运行性测试</li><li>[ ] TypeScript类型检查</li><li>[ ] Markdown格式检查</li></ul><hr><h2 id="_8-工具和脚本" tabindex="-1">8. 工具和脚本 <a class="header-anchor" href="#_8-工具和脚本" aria-label="Permalink to &quot;8. 工具和脚本&quot;">​</a></h2><h3 id="package-json-scripts" tabindex="-1">package.json scripts <a class="header-anchor" href="#package-json-scripts" aria-label="Permalink to &quot;package.json scripts&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:generate&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tsx scripts/generate-api-docs.ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress dev docs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress build docs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:preview&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress preview docs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:sync&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bash scripts/sync-to-docs-repo.sh&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><hr><h2 id="_9-参考资源" tabindex="-1">9. 参考资源 <a class="header-anchor" href="#_9-参考资源" aria-label="Permalink to &quot;9. 参考资源&quot;">​</a></h2><ul><li><a href="https://vitepress.dev" target="_blank" rel="noreferrer">VitePress官方文档</a></li><li><a href="https://typedoc.org" target="_blank" rel="noreferrer">TypeDoc文档</a></li><li><a href="https://viem.sh" target="_blank" rel="noreferrer">Viem文档</a> (参考其文档结构)</li><li><a href="https://docs.ethers.org" target="_blank" rel="noreferrer">Ethers.js文档</a> (参考其API组织方式)</li></ul><hr><h2 id="_11-論文數據採集指南-phd-data-collection" tabindex="-1">11. 論文數據採集指南 (PhD Data collection) <a class="header-anchor" href="#_11-論文數據採集指南-phd-data-collection" aria-label="Permalink to &quot;11. 論文數據採集指南 (PhD Data collection)&quot;">​</a></h2><p>詳細指南請參見: [paper-data-collection.md](file:///Users/jason/Dev/mycelium/my-exploration/projects/aastar-sdk/docs/paper-data-collection.md)</p><p><strong>核心要點</strong>:</p><ul><li>所有實驗必須使用 <code>aastar-sdk</code> 實作。</li><li>使用 <code>run_automated_experiment.sh</code> 進行自動化運行。</li><li>數據採集涵蓋: Gas Usage, Latency, Throughput (TPS), Cost (USD)。</li></ul>`,77)])])}const c=a(e,[["render",t]]);export{E as __pageData,c as default};
