<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'

const props = withDefaults(defineProps<{
  locale?: 'en' | 'ja'
}>(), {
  locale: 'en'
})

const author = {
  avatar: 'https://avatars.githubusercontent.com/u/16436160',
  name: 'Nozomu Ikuta',
  desc:  props.locale === 'en'
    ? 'Member of UnJS / Vue.js JP Core Staff / Vite Contributor'
    : 'UnJSメンバー/ Vue.js JP コアスタッフ / Vite コントリビューター',
  sponsor: 'https://github.com/sponsors/NozomuIkuta',
  actionText: props.locale === 'en'
    ? 'Sponsor'
    : 'スポンサー',
  links: [
    { icon: 'github', link: 'https://github.com/NozomuIkuta' },
    { icon: 'twitter', link: 'https://twitter.com/NozomuIkuta' }
  ],
}
</script>

<template>
  <VPTeamMembers size="small" :members="[author]" id="author-profile" />
</template>

<style scoped>
#author-profile {
  width: 100%;
}

#author-profile :deep(.container) {
  grid-template-columns: 1fr;
  max-width: none !important;
}
</style>
