<template>
  <router-view />
</template>

<script lang="ts" setup>
import { useKeysStore } from '@/stores'
const keyStore = useKeysStore()
keyStore.readKeys()
</script>

<style lang="scss">
@import '@/styles/index.scss';
</style>
