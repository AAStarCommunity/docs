import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AAStar SDK',
  description: 'Build Your Own Protocol with Account Abstraction',
  
  lang: 'en',
  ignoreDeadLinks: true, // Ignore dead links from synced SDK docs

  themeConfig: {
    logo: '/aastar-logo.png',
    
    // Enable right sidebar (TOC)
    outline: {
      level: [2, 3],
      label: 'On this page'
    },
    
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'API Reference', link: '/api/' },
      { text: 'Examples', link: '/examples/' },
      { 
        text: 'v0.16.6', 
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
          text: 'Getting Started',
          items: [
            { text: 'Overview', link: '/api/' },
            { text: 'Installation', link: '/api/@aastar/sdk#installation' },
            { text: 'Quick Start', link: '/api/@aastar/sdk#usage' }
          ]
        },
        {
          text: '@aastar/sdk (Meta Package)',
          items: [
            { text: 'Overview', link: '/api/@aastar/sdk' },
            { text: 'Node.js Tools', link: '/api/@aastar/sdk/node' }
          ]
        },
        {
          text: 'Core Modules',
          collapsed: false,
          items: [
            { text: '@aastar/core', link: '/api/@aastar/core' },
            { text: '@aastar/account', link: '/api/@aastar/account' },
            { text: '@aastar/paymaster', link: '/api/@aastar/paymaster' },
            { text: '@aastar/tokens', link: '/api/@aastar/tokens' },
            { text: '@aastar/identity', link: '/api/@aastar/identity' },
            { text: '@aastar/analytics', link: '/api/@aastar/analytics' },
            { text: '@aastar/dapp', link: '/api/@aastar/dapp' }
          ]
        },
        {
          text: 'Examples',
          items: [
            { text: 'SDK Handbooks', link: '/api/@aastar/sdk#core-scenarios' }
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
      message: 'Released under the MIT License. | Last Updated: 2026-01-15 09:16',
      copyright: 'Copyright © 2023-present AAStar Community'
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
