<template>
  <b-container class="bv-example-row">
    <b-row class="mt-2">
      <b-col cols="10">
        <div class="home">
          <div>
            <ul class="list-unstyled">
              <li>
                <b-media tag="li">
                  <template #aside>
                    <b-img
                      blank
                      blank-color="#bac"
                      width="64"
                      alt="placeholder"
                    ></b-img>
                  </template>
                  <h5 class="mt-0 mb-1">
                    {{ post.title }}
                  </h5>
                  <p class="mb-0">
                    {{ post.category_id }}
                  </p>
                </b-media>
                <br>
              </li>
            </ul>
          </div>
        </div>

      </b-col>

      <b-col cols="2">
        <b-link href="/posts">发布文章</b-link>
      </b-col>

    </b-row>
  </b-container>

</template>

<script>

export default {
  name: 'indexPage',
  data() {
    return {
      post: '',
    };
  },
  created() {
    this.getapi();
  },
  methods: {

    getapi() {
      console.log(this.$route.params.id);
      this.id = this.$route.params.id;
      this.axios.get('http://localhost:1016/posts/', {
        data: {
          id: this.id,
        },
      }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
