import DefaultTheme from 'vitepress/theme'
import BigFeatures from './BigFeatures.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('BigFeatures', BigFeatures)
  }
}
