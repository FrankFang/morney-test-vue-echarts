<template>
  <Layout class-prefix="layout">
    <NumberPad/>
    <Types/>
    <Notes/>
    <Tags :data-source.sync="tags"/>
  </Layout>
</template>

<script>
  import NumberPad from '@/components/Money/NumberPad.vue'
  import Types from '@/components/Money/Types.vue'
  import Notes from '@/components/Money/Notes.vue'
  import Tags from '@/components/Money/Tags.vue'

  export default {
    name: 'Money',
    components: {Tags, Notes, Types, NumberPad},
    data() {
      return {
        tags: ['衣', '食', '住', '行', '彩票']
      }
    }
  }
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>

