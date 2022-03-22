<template>
  <b-container class="bv-example-row">
    <b-row class="mt-2">
      <b-col cols="10">
        <div class="home">
          <div>
            <ul class="list-unstyled">
              <li
                v-for="item in post"
                :key="item.created_at"
                :items="post"
                :per-page="perPage"
                :current-page="currentPage"
              >
                <b-media tag="li">
                  <template #aside>
                    <b-img
                      blank
                      blank-color="#bac"
                      width="64"
                      alt="placeholder"
                    ></b-img>
                  </template>
                  <h5 class="mt-0 mb-1"><a :href="'/posts/'+ item.id">{{ item.title }}</a></h5>
                  <p class="mb-0">
                    {{ item.category_id }}
                  </p>
                </b-media>
                <br>
              </li>
            </ul>
          </div>
          <IndexPage msg="Welcome to Doucode community" />
        </div>
        <!--
        <b-table
          id="my-table"
          :items="post"
          :per-page="perPage"
          :current-page="currentPage"
          small
        ></b-table> -->

        <div class="overflow-auto">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-list"
          ></b-pagination>
          <p class="mt-3">Current Page: {{ currentPage }}</p>
        </div>

        <pagination
          :records="records"
          :per-page="perPage"
          @paginate="loadoption"
          v-model="page"
        ></pagination>

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
      post: [],
      total: '',
      // perPage: 10,
      currentPage: 1,
      page: 1,	// 默认第一页
      perPage: 20, // 每页多少条
      pageNo: 1, // 当前页
      records: 0, // 总数
    };
  },
  created() {
    this.getapi();
  },
  methods: {
    getapi() {
      this.axios.post('http://localhost:1016/posts/page/list').then((res) => {
        const rs = res.data;
        this.post = rs.data.data;
        this.total = rs.data.total;
        console.log(rs);
      });
    },
  },
  computed: {
    rows() {
      return this.total;
    },
  },
};
</script>
