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

        <pagination
          :records="total"
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
      page: 1, // 默认第一页
      perPage: 10, // 每页多少条
      pageNo: 1, // 当前页
      records: '', // 总数
    };
  },
  created() {
    this.getapi();
  },
  methods: {
    getapi() {
      this.axios.post('http://localhost:1016/posts/page/list', params).then((res) => {
        const rs = res.data;
        this.post = rs.data.data;
        this.total = rs.data.total;
        console.log(rs);
      });
    },
    loadoption() {
      this.pageNo = this.page;// 让当前页等于，回调函数传回来的page的值，然后再去获取数据，在此更新页码
      // 详细：paginate 可以调用自定义事件。可以在组件上收听并运行您的回调。他会回传一个参数page，为当前页码。可以利用这个参数来进行列表内容的更新。
      const params = { pageNum: this.pageNo, pageSize: this.perPage };
      this.axios.post('http://localhost:1016/posts/page/list', params, (res) => {
        if (res.code == '200') {
          // 在此更新数据
          that.records = result.data.total;
        } else {

        }
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
