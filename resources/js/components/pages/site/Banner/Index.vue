<template>
  <section class="section">
      <div class="row">
          <div class="col-md-12">
              <div class="card">
                  <div class="card-header d-flex justify-content-between">
                        <h4 class="text-muted">
                            Site Banner
                        </h4>
                        <router-link class="raise-button" :to="{name: 'admin-sitedata.index'}"><i class="fas fa-arrow-left"></i> Go back</router-link>
                    </div>
                    <div class="card-body">
                        <div class="row" v-if="is_loading">
                            <div class="col-md-6 form-group">
                                <skeleton width="100%" height="40px"/>
                            </div>
                            <div class="col-md-8 form-group">
                                <skeleton width="100%" height="150px"/>
                            </div>
                            <div class="col-md-6 form-group">
                                <skeleton width="100%" height="40px"/>
                            </div>
                        </div>

                        <div class="form-edit" v-if="!is_loading && !previewMode">
                            <form @submit.prevent="updateBanner">
                                <div class="col-md-6 form-group">
                                    <label for="">Banner Slogan</label>
                                    <input :class="{'is-invalid' : bannerData.errors.has('title')}" 
                                    type="text" class="form-control" placeholder="Banner slogan..." v-model="bannerData.title">
                                    <HasError :form="bannerData" field="title" />
                                </div>
                                <div class="col-md-8 form-group">
                                    <label for="">Small Description</label>
                                    <textarea :class="{'is-invalid' : bannerData.errors.has('desc')}"  
                                    class="form-control" maxlength="500" placeholder="Write your description..."
                                     v-model="bannerData.desc"></textarea>
                                    <div class="text-right mt-1">{{ bannerData.desc.length }}/500</div>
                                    <HasError :form="bannerData" field="desc" />
                                </div>

                                <div class="col-md-6 form-group" v-if="bannerData.img == ''">
                                    <label for="">Change Image</label>
                                    <input :class="{'is-invalid' : bannerData.errors.has('img')}" type="file" class="form-control"
                                     accept="image/*" @change="fileChange">
                                    <HasError :form="bannerData" field="img" />
                                </div>

                                <div class="col-md-6 form-group" v-else>
                                    <div class="card">
                                        <div class="card-header d-flex justify-content-between">
                                            <label for="">1 File Selected</label>
                                            <button @click="cancelFile" class="btn btn-link" title="Remove file"><i class="fas fa-times"></i></button>
                                        </div>
                                        <div class="card-body">
                                            <p class="text-muted"><strong>{{ bannerData.img.name }}</strong></p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12 form-group">
                                    <Button :form="bannerData" class="btn btn-success">Update</Button>
                                    <button @click="previewMode=true" class="btn btn-primary ml-2">Show preview</button>
                                </div>
                            </form>
                        </div>

                        <div class="preview" v-if="!is_loading && previewMode">
                            <div class="mb-3">
                                <h6 class="text-muted">Banner Preview</h6>
                            </div>
                            <div class="banner" :style="`background-image: url('${imageUrl}');`">
                                <h2>{{ bannerData.title }}</h2>
                                <p>
                                    {{ bannerData.desc }}
                                </p>
                            </div>
                            <div class="mt-3">
                                <button @click="previewMode=false" class="btn btn-danger btn-sm">Close preview <i class="fas fa-times"></i></button>
                            </div>
                        </div>
                    </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    data(){
        return{
            is_loading: true,
            bannerData: new Form({
                title: "",
                desc: "",
                img: "",
            }),
            previewMode: false,
            imageUrl: null,
            defaultImgUrl: "/images/bg.jpg",
            fileSelected: false,
        }
    },
    methods:{
        getBannerData(){
            this.is_loading = true;
            axios.get("/admin/api/site-banner-data")
            .then(resp=>{
                return resp.data;
            }).then(data=>{
                this.bannerData.title = data.slogan;
                this.bannerData.desc = data.description;
                this.img = data.banner_image;
                
                if(data.banner_image == null)
                {
                    this.imageUrl = "/images/bg.jpg";
                }
                else
                {
                    this.imageUrl = "/uploads/site/banner/"+data.banner_image;
                    this.defaultImgUrl = "/uploads/site/banner/"+data.banner_image;
                }

                this.is_loading=false;
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
        fileChange(e) {
            let file = e.target.files[0];
            if(file){
                this.bannerData.img = file;
                this.imageUrl = window.URL.createObjectURL(file);
            } 
            else{
                this.bannerData.img = '';
                this.imageUrl = this.defaultImgUrl;
            }
        },
        cancelFile(){
            this.bannerData.img = '';
            this.imageUrl = this.defaultImgUrl;
            $("input[type='file']").val("");
        },
        async updateBanner(){
            await this.bannerData.post("/admin/api/update-banner-data")
            .then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                    swal.fire("Success",data.msg,"success");
                    this.bannerData.img='';
                    this.getBannerData();
                    
                }
            }).catch(err=>{
                console.error(err.response.data);
            })
        }
    },
    created() {
        this.getBannerData();
    },
}
</script>

<style>

</style>