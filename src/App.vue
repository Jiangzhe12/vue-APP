<template>
  <div id="app">
    <commpon-header></commpon-header>
      <div id="contain">
        <router-view/>
      </div>
    <commpon-footer></commpon-footer>
  </div>
</template>

<script>
import CommponHeader from '@/components/CommponHeader'
import CommponFooter from '@/components/CommponFooter'

export default {
  components: {
    CommponHeader,
    CommponFooter
  }
}
</script>

<style lang="scss">
#contain{
  margin-top: 1rem;
}
</style>
