<template>
  <h3>您好 <span v-if="userInfo">{{userInfo.name}}</span>
    <span>
      <b-img
        src="https://i.pximg.net/img-original/img/2022/01/20/00/03/17/95639580_p0.png"
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
