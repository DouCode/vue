<template>
  <div class="register">
    <b-row class="mt-5">
      <b-col md="8">
        <b-form>
          <b-form-group label="文章标题">
            <b-form-input
              v-model="$v.post.title.$model "
              type="text"
              placeholder="文章标题"
              :state="validateState('title')"
            ></b-form-input>
            <b-form-invalid-feedback :state="validateState('title')">
              标题不为空
            </b-form-invalid-feedback>
          </b-form-group>
          <b-form-group label="文章内容">
            <b-form-textarea
              id="textarea"
              v-model="$v.post.content.$model"
              placeholder="文章内容"
              rows="12"
              max-rows="6"
              type="text"
              :state="validateState('content')"
            ></b-form-textarea>
            <b-form-invalid-feedback :state="validateState('content')">
              内容不为空
            </b-form-invalid-feedback>
          </b-form-group>
          <!-- <b-form-group label="头像">
            <b-form-input
              v-model="$v.post.head_image.$model "
              type="text"
              placeholder="头像"
            ></b-form-input>
          </b-form-group> -->

          <b-form-group label="文章分类">
            <b-form-input
              v-model="$v.post.category_id.$model "
              type="number"
              placeholder="文章分类"
              :state="validateState('category_id')"
            >
            </b-form-input>
          </b-form-group>

          <b-form-group>
            <b-button
              @click="publish"
              variant="outline-primary"
            >发布</b-button>
          </b-form-group>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { required } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      post: {
        category_id: '',
        title: '',
        head_image: '',
        content: '',
      },
    };
  },
  validations: {
    post: {
      category_id: {
        required,
      },
      title: {
        required,
      },
      head_image: {

      },
      content: {
        required,
      },
    },
  },
  methods: {
    ...mapActions('userModule', { userpost: 'posts' }),
    validateState(name) {
      // 这里是es6 解构赋值
      const { $dirty, $error } = this.$v.post[name];
      return $dirty ? !$error : null;
    },
    publish() {
      // 验证数据
      this.$v.post.$touch();
      if (this.$v.post.$anyError) {
        return;
      }
      // 请求
      this.userpost(this.post).then(() => {
        // 跳转主页
        this.$router.replace({ name: 'home' });
      }).catch((err) => {
        this.$bvToast.toast(err.response.data.msg, {
          title: '数据验证错误',
          variant: 'danger',
          solid: true,
        });
      });
      console.log('post');
    },
    getapi() {
      this.pageNo = this.page;// 让当前页等于，回调函数传回来的page的值，然后再去获取数据，在此更新页码
      // 详细：paginate 可以调用自定义事件。可以在组件上收听并运行您的回调。他会回传一个参数page，为当前页码。可以利用这个参数来进行列表内容的更新。
      // const params = { pageNum: this.pageNo, pageSize: this.perPage };
      this.axios.get('http://localhost:1016/posts/page/list', {
        params: {
          pageNum: this.pageNo,
          pageSize: this.perPage,
        },
      }).then((res) => {
        const rs = res.data;
        this.post = rs.data.data;
        this.total = rs.data.total;
        console.log(res.data.data);
      });
    },
  },
};
</script>

<style scoped>
</style>
