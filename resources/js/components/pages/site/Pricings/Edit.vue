<template>
  <section class="section">
      <div class="row">
          <div class="col-md-12">
              <div class="card">
                  <div class="card-header d-flex justify-content-between">
                      <h4 class="text-muted">Edit package</h4>
                      <router-link :to="{name: 'admin-sitedata.pricing.list'}" class="raise-button"><i class="fas fa-arrow-left"></i> Go back</router-link>
                  </div>
                  <div class="card-body">
                      <form @submit.prevent="submitForm">
                          <div class="row">
                              <div class="col-md-6 form-group">
                                  <label for="">Package name</label>
                                  <input :class="{'is-invalid':form.errors.has('name')}" type="text" class="form-control" v-model="form.name" placeholder="Package name...">
                                  <HasError :form="form" field="name"/>
                              </div>
                              <div class="col-md-3 form-group">
                                  <label for="">Arrange Number</label>
                                  <input type="number" class="form-control" v-model="form.sortNumber">
                              </div>
                              <div class="col-md-6 form-group">
                                  <label for="">Package Pricing Info</label>
                                  <input :class="{'is-invalid':form.errors.has('name')}" class="form-control" 
                                  v-model="form.bio" placeholder="e.g: 10& / Day" maxlength="250" style="font-size: 22px; color: black;">
                                  <div class="text-right">{{ form.bio.length }}/250</div>
                                  <HasError :form="form" field="name"/>
                              </div>
                              <div class="col-md-6 form-group">

                              </div>
                              <div class="col-md-6 form-group">
                                  <label for="">Pricing Details</label>
                                  <textarea class="form-control" style="height: 450px !important; font-size:22px;" v-model="form.desc"></textarea>
                              </div>
                              <div class="col-md-4 form-group">
                                  <label for="">Preview Here</label>
                                  <div class="price-card">
                                        <div class="ribbon">{{ form.name }}</div>
                                        <div class="body">
                                            <h3 class="text-center text-white">{{ form.bio }}</h3>
                                            <p class="text-center text-white">
                                                {{ form.desc }}
                                            </p>
                                        </div>
                                        <div class="float-btn" title="Book Now">
                                            <i class="fas fa-angle-right"></i>
                                        </div>
                                    </div>
                              </div>
                              <div class="col-md-12 form-group">
                                  <Button :form="form" class="btn btn-success">Update</Button>
                              </div>
                          </div>
                      </form>
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
            form : new Form({
                pricingId: this.$route.params.id,
                name: '',
                bio: '',
                desc: '',
                sortNumber: 1,
            })
        }
    },
    mounted(){
        let d = this;
        $('#content').summernote({
            dialogsInBody: true,
            height:400,
            blockquoteBreakingLevel: 0,
            lineHeights: ['0.2', '0.3', '0.4', '0.5', '0.6', '0.8', '1.0', '1.2', '1.4', '1.5', '2.0', '3.0'],
            toolbar:[
                ['style', ['style']],
                ['font', ['bold', 'underline','italic' ,'clear','fontname','fontsize','strikethrough','superscript','subscript']],
                ['color',['color']],
                ['para', ['ul', 'ol', 'paragraph','height']],
                ['insert', ['link']],
                ['view', ['codeview', 'help']],
                
            ],
            callbacks:{
                onChange: function(content,$editable){
                    d.form.desc = content;
                }
            }
        });
    },
    methods:{
        submitForm(){
            this.form.post("/admin/api/update-pricing")
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
        getData(){
            axios.get("/admin/api/get-pricing-data",{
                params:{
                    pricingId: this.$route.params.id
                }
            }).then(resp=>{
                return resp.data;
            }).then(data=>{
                console.log(data);
                if(data.status == "ok"){
                    this.form.name = data.data.name;
                    this.form.desc = data.data.desc;
                    this.form.bio = data.data.bio;
                    this.form.sortNumber = data.data.sort_number;
                    $('#content').summernote("code",data.data.desc);
                } else{
                    this.$router.push({
                        name: "admin-sitedata.pricing.list"
                    });
                }
            }).catch(err=>{
                console.error(err.response.data);
                this.$router.push({
                    name: "admin-sitedata.pricing.list"
                });
            })
        }
    },
    created() {
        this.getData();
    },
}
</script>

<style>

</style>