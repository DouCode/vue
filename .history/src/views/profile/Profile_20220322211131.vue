<template>
  <h3>您好 <span v-if="userInfo">{{userInfo.name}}</span>
    <b-img
      v-bind:src="userInfo.head_image"
      fluid
      alt="Responsive image"
    ></b-img>
  </h3>

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
