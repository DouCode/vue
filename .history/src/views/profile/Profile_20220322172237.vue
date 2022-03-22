<template>
  <h3>您好 <span v-if="userInfo">{{userInfo.name}}</span></h3>
  <span>
    <b-img
      src="https://picsum.photos/1024/400/?image=41"
      fluid
      alt="Responsive image"
    ></b-img>
  </span>
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
