<template>
  <section class="section">
      <div class="row">
          <div class="col-md-12">
              <div class="card">
                  <div class="card-header d-flex justify-content-between">
                        <h4>Create new space</h4>
                        <router-link tag="button" :to="{name : 'kennel.list'}" class="raise-button"><i class="fas fa-arrow-left"></i> Go back</router-link>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="createKennel">
                            <div class="row">
                                <div class="col-md-12 form-group">
                                      <AlertError :form="form">There were some problems with your input.</AlertError>
                                  </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 form-group">
                                    <label for="">Kennel Title</label>
                                    <input type="text" class="form-control" v-model="form.title" :class="{'is-invalid' : form.errors.has('title')}">
                                    <HasError :form="form" field="title" />
                                </div>
                                <div class="col-md-4 form-group">
                                    <label for="">Kennel Unique ID</label>
                                    <input type="text" class="form-control" v-model="form.kennel_id" :class="{'is-invalid' : form.errors.has('kennel_id')}">
                                    <HasError :form="form" field="kennel_id" />
                                </div>
                                <div class="col-md-4 form-group">
                                    <label for="">Size</label>
                                    <select class="form-control" v-model="form.size" :class="{'is-invalid':form.errors.has('size')}">
                                        <option value="" hidden>Select Size</option>
                                        <option value="small">Small</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                    </select>
                                    <HasError :form="form" field="size" />
                                </div>
                                <div class="col-md-12 form-group">
                                    <Button :form="form" class="btn btn-success">Create</Button>
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
                title: "",
                kennel_id: "",
                size: "",
            }),
        }
    },
    methods:{
        createKennel(){
            this.form.post("/admin/api/create-kennel")
            .then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                    swal.fire("Success",data.msg,"success");
                    this.form.title = "";
                    this.form.kennel_id = "";
                    this.form.size = "";
                }
            }).catch(err=>{
                console.error(err.response.data);
            })
        }
    }
}
</script>

<style>

</style>