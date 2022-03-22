<template>
  <h3>您好 <span v-if="userInfo">{{userInfo.name}}</span></h3>
  <div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: mapState({
    userInfo: (state) => state.userModule.userInfo,
  }),
};
</script>
<style lang="scss" scoped>
</style>
