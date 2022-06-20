<template>
  <div class="row justify-content-center">
      <div class="col-md-8">
          <div class="card">
              <div class="card-header d-flex justify-content-between">
                  <h4 class="text-muted">
                      SEO Tools
                  </h4>
                  <div>
                      <button title="Refresh" class="btn"><i class="fas fa-sync"></i></button>
                  </div>
              </div>
              <div class="card-body" v-if="is_loading">
                  <div class="row">
                      <div class="form-group col-md-6">
                            <skeleton width="100%" height="40px" />
                        </div>
                        <div class="form-group col-md-6">
                            <skeleton width="100%" height="40px" />
                        </div>
                        <div class="form-group col-md-6">
                            <skeleton width="100%" height="150px" />
                        </div>
                        <div class="form-group col-md-6">
                            <skeleton width="100%" height="150px" />
                        </div>
                        <div class="form-group col-md-6">
                            <skeleton width="100%" height="40px" />
                        </div>
                        <div class="form-group col-md-6">
                            <skeleton width="100%" height="40px" />
                        </div>
                  </div>
              </div>
              <div class="card-body" v-if="!is_loading">
                  <form @submit.prevent="seoUpdate">
                      <div class="row">
                          <div class="col-md-6 form-group">
                              <label for="">Site Title <span class="text-danger">*</span></label>
                              <input :class="{'is-invalid':form.errors.has('title')}"
                               type="text" class="form-control" placeholder="Site title..." v-model="form.title" maxlength="70">
                              <div class="text-right">{{ form.title?form.title.length:0 }}/70</div>
                          </div>
                          <div class="col-md-6 form-group">
                              <label for="">Author</label>
                              <input type="text" class="form-control" placeholder="Author name..." v-model="form.author" maxlength="70">
                              <div class="text-right">{{ form.author?form.author.length:0 }}/70</div>
                          </div>
                          <div class="col-md-6 form-group">
                              <label for="">Site Description <span class="text-danger">*</span></label>
                              <textarea :class="{'is-invalid' :form.errors.has('desc')}" class="form-control" v-model="form.desc" style="height: 150px !important;" 
                              maxlength="150" placeholder="Site description"></textarea>
                              <div class="text-right">{{ form.desc?form.desc.length:0 }}/150</div>
                          </div>
                          <div class="col-md-6 form-group">
                              <label for="">Search Keywords (Separate with commas) <span class="text-danger">*</span></label>
                              <textarea :class="{'is-invalid' :form.errors.has('srch_keyword')}" class="form-control" v-model="form.srch_keyword" style="height: 150px !important;" 
                              maxlength="150" placeholder="keyword1,keyword2,keyword3"></textarea>
                          </div>
                          <div class="col-md-6 form-group">
                              <label for="">Allow robots to index your website?</label>
                              <select class="form-control" v-model="form.robot_web">
                                <option value="" hidden>Select option</option>
                                <option value="index">Yes</option>
                                <option value="noindex">No</option>
                              </select>
                          </div>
                          <div class="col-md-6 form-group">
                            <label>Allow robots to follow all links?</label>
                            <select name="robotsLinks" class="form-control" v-model="form.robot_link">
                                <option value="" hidden>Select option</option>
                                <option value="follow">Yes</option>
                                <option value="nofollow">No</option>
                            </select>
                        </div>
                        <div class="col-md-6 form-group">
                            <label>What is your site primary language?</label>

                            <select name="language" class="form-control" v-model="form.lang">
                                <option value="" hidden>Select option</option>
                                <option value="English">English</option>
                                <option value="French">French</option>
                                <option value="Spanish">Spanish</option>
                                <option value="Russian">Russian</option>
                                <option value="Arabic">Arabic</option>
                                <option value="Japanese">Japanese</option>
                                <option value="Korean">Korean</option>
                                <option value="Hindi">Hindi</option>
                                <option value="Portuguese">Portuguese</option>
                            </select>
                        </div>
                        <div class="col-md-12 form-group">
                            <Button class="btn btn-primary" :form="form">Optimize</Button>
                        </div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            form: new Form({
                title: "",
                desc: "",
                srch_keyword: "",
                robot_web: "",
                robot_link: "",
                lang: "",
                author: "",
            }),
            seoData: {},
            is_loading: true,
        }
    },
    methods:{
        seoUpdate(){
            this.form.post("/admin/api/update-seo")
            .then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                    swal.fire("Success",data.msg,"success");
                }
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
        getSeo(){
            axios.get('/admin/api/get-seo').then(resp=>{
                console.log(resp.data);
                this.form.title = resp.data.title;
                this.form.desc = resp.data.desc;
                this.form.srch_keyword = resp.data.keywords;
                this.form.robot_web = resp.data.robot_website;
                this.form.robot_link = resp.data.robot_link;
                this.form.lang = resp.data.lang;
                this.form.author = resp.data.author;
                this.is_loading = false;
            }).catch(err=>{
                console.error(err.response.data);
            });
        }
    },
    created(){
        this.getSeo();
    }
}
</script>

<style>

</style>