<template>
  <h3>您好 <span v-if="userInfo">{{userInfo.name}}</span>
    <span>
      <b-img
        src=${userInfo.image}}
        fluid
        alt="Responsive image"
      ></b-img>
    </span>
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
