import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AAStar SDK',
  description: 'Build Your Own Protocol with Account Abstraction',
  
  ignoreDeadLinks: true, // Ignore dead links from synced SDK docs
  
  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/'
    }
  },

  themeConfig: {
    logo: '/aastar-logo.png',
    
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'API Reference', link: '/api/' },
      { text: 'Examples', link: '/examples/' },
      { 
        text: 'v0.14.0', 
        items: [
          { text: 'Changelog', link: '/changelog' },
          { text: 'GitHub', link: 'https://github.com/AAStarCommunity/aastar-sdk' }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Quick Start', link: '/guide/quick-start' }
          ]
        },
        {
          text: 'Core Concepts',
          items: [
            { text: 'Account Abstraction', link: '/guide/concepts/account-abstraction' },
            { text: 'SuperPaymaster (AOA+)', link: '/guide/concepts/superpaymaster' },
            { text: 'EOA Rainbow Bridge', link: '/guide/concepts/rainbow-bridge' },
            { text: 'Reputation System', link: '/guide/concepts/reputation' }
          ]
        },
        {
          text: 'Use Cases',
          items: [
            { text: 'Community Management', link: '/guide/use-cases/community-management' },
            { text: 'Gasless Transactions', link: '/guide/use-cases/gasless-transactions' },
            { text: 'Operator Staking', link: '/guide/use-cases/operator-staking' },
            { text: 'Build Your Own Protocol', link: '/guide/use-cases/yop' }
          ]
        }
      ],
      
      '/zh/guide/': [
        {
          text: '快速入门',
          items: [
            { text: '开始使用', link: '/zh/guide/getting-started' },
            { text: '安裝', link: '/zh/guide/installation' },
            { text: '快速開始', link: '/zh/guide/quick-start' }
          ]
        },
        {
          text: '核心概念',
          items: [
            { text: '賬戶抽象', link: '/zh/guide/concepts/account-abstraction' },
            { text: 'SuperPaymaster (AOA+)', link: '/zh/guide/concepts/superpaymaster' },
            { text: 'EOA Rainbow Bridge', link: '/zh/guide/concepts/rainbow-bridge' },
            { text: '聲譽系統', link: '/zh/guide/concepts/reputation' }
          ]
        }
      ],

      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Overview', link: '/api/' },
            { text: 'Operator API', link: '/api/roles/operator' },
            { text: 'Community API', link: '/api/roles/community' },
            { text: 'End User API', link: '/api/roles/enduser' },
            { text: 'Admin API', link: '/api/roles/admin' }
          ]
        },
        {
          text: 'Modules',
          items: [
            { text: 'Core', link: '/api/modules/core' },
            { text: 'Account', link: '/api/modules/account' },
            { text: 'Paymaster', link: '/api/modules/paymaster' },
            { text: 'Tokens', link: '/api/modules/tokens' },
            { text: 'Identity', link: '/api/modules/identity' },
            { text: 'DApp', link: '/api/modules/dapp' }
          ]
        }
      ],
      
      '/examples/': [
        {
          text: 'Complete Examples',
          items: [
            { text: 'Overview', link: '/examples/' },
            { text: 'Operator Flow', link: '/examples/operator-flow' },
            { text: 'Community Flow', link: '/examples/community-flow' },
            { text: 'End User Flow', link: '/examples/enduser-flow' },
            { text: 'Multi-Chain Setup', link: '/examples/multi-chain' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AAStarCommunity/aastar-sdk' },
      { icon: 'discord', link: 'https://discord.gg/aastar' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present AAStar Community'
    },

    search: {
      provider: 'local'
    }
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:site_name', content: 'AAStar SDK' }],
    ['meta', { name: 'og:image', content: 'https://docs.aastar.io/og-image.png' }]
  ]
})
