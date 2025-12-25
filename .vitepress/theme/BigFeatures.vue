<script setup lang="ts">
const features = [
  {
    title: 'Easy to Use',
    details: 'Simple and intuitive API design makes integration straightforward for developers of all levels.',
    src: '/easy.svg',
    alt: 'Easy to Use'
  },
  {
    title: 'Seamless Integration',
    details: 'Works seamlessly with existing Web3 infrastructure and popular frameworks.',
    src: '/integration.svg',
    alt: 'Seamless Integration'
  },
  {
    title: 'Open Source',
    details: 'Fully open-source and community-driven development for transparency and collaboration.',
    src: '/open.svg',
    alt: 'Open Source'
  }
]
</script>

<template>
  <div class="big-features-container">
    <div class="big-features-grid">
      <div v-for="feature in features" :key="feature.title" class="big-feature-card">
        <div class="big-feature-image">
          <img :src="feature.src" :alt="feature.alt" />
        </div>
        <div class="big-feature-content">
          <h2 class="big-feature-title">{{ feature.title }}</h2>
          <p class="big-feature-details">{{ feature.details }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.big-features-container {
  padding: 48px 24px;
  max-width: 1152px;
  margin: 0 auto;
}

.big-features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.big-feature-card {
  display: flex;
  flex-direction: column;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 32px;
  height: 100%;
  transition: border-color 0.25s, background-color 0.25s;
  border: 1px solid var(--vp-c-bg-soft);
}

.big-feature-card:hover {
  border-color: var(--vp-c-brand-1);
}

.big-feature-image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  min-height: 240px;
}

.big-feature-image img {
  width: 100%;
  max-width: 280px;
  height: auto;
  object-fit: contain;
}

.big-feature-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--vp-c-text-1);
}

.big-feature-details {
  font-size: 16px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .big-feature-image {
    min-height: 200px;
  }
  .big-feature-image img {
    max-width: 240px;
  }
}
</style>
