<template>
  <section class="section">
      <div class="row">
          <div class="col-md-12">
              <div class="card">
                  <div class="card-header d-flex justify-content-between">
                        <h4 class="text-muted">
                            About Us
                        </h4>
                        <router-link class="raise-button" :to="{name: 'admin-sitedata.index'}"><i class="fas fa-arrow-left"></i> Go back</router-link>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="submitForm">
                            <div class="row">
                                <div class="col-md-4 form-group">
                                    <label for="">Write your description here</label>
                                    <textarea v-model="form.content" class="form-control" style="height: 450px !important; font-size: 22px;"></textarea>
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
            })
        }
    },
    mounted(){

    },
    methods:{
        submitForm(){
            this.form.post("/admin/api/update-about-us").then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                    swal.fire("Success",data.msg,"success");
                }
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
        getAboutData(){
            axios.get("/admin/api/get-about-us")
            .then(resp=>{
                return resp.data;
            }).then(data=>{
                this.form.content = data.content;
            }).catch(err=>{
                console.error(err.response.data);
            });
        }
    },
    created() {
        this.getAboutData();
    },
}
</script>

<style>

</style>