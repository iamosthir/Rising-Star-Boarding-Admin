<template>
  <section class="section">
      <div class="row">
          <div class="col-md-12">
              <div class="card">
                  <div class="card-header d-flex justify-content-between">
                        <h4 class="text-muted">
                            Terms & Conditions
                        </h4>
                        <router-link class="raise-button" :to="{name: 'admin-sitedata.index'}"><i class="fas fa-arrow-left"></i> Go back</router-link>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="submitForm">
                            <div class="row">
                                <div class="col-md-12 form-group">
                                    <label for="">Write your description here</label>
                                    <textarea id="content"></textarea>
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
            form: new Form({
                content: "",
            }),
        }
    },
    mounted(){
        var self = this;
        $('#content').summernote({
            dialogsInBody: true,
            height:500,
            blockquoteBreakingLevel: 0,
            lineHeights: ['0.2', '0.3', '0.4', '0.5', '0.6', '0.8', '1.0', '1.2', '1.4', '1.5', '2.0', '3.0'],
            toolbar:[
                ['style', ['style']],
                ['font', ['bold', 'underline','italic' ,'clear','fontname','fontsize']],
                ['color',['color']],
                ['para', ['ul', 'ol', 'paragraph','height']],
                ['insert', ['link']],
                ['view', ['codeview', 'help']],
                
            ],
            callbacks: {
                onChange: function(contents, $editable) {
                    self.form.content = contents;
                }
            }
        });
    },
    methods:{
        getTermsData(){
            axios.get("/admin/api/get-terms-data").then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                    this.form.content = data.data.content;
                    this.setSummernote(data.data.content);
                }
                else{
                    this.$router.go(-1);
                }
            }).catch(err=>{
                console.error(err.response.data);
                this.$router.go(-1);
            })
        },
        setSummernote(content) {
            $('#content').summernote("code",content);
        },
        submitForm(){
            this.form.post("/admin/api/update-terms").then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                    swal.fire("Data updated",data.msg,"success");
                }
            }).catch(err=>{
                console.error(err.response.data);
            })
        }
    },
    created() {
        this.getTermsData();
    },
}
</script>

<style>

</style>