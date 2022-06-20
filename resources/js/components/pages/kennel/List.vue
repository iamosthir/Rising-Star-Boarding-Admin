<template>
  <section class="section">
      <div class="row">
          <div class="col-md-12">
              <div class="card">
                  <div class="card-header d-flex justify-content-between">
                      <h4>Kennel Spaces</h4>
                      <router-link :to="{name: 'kennel.create'}" class="btn btn-sm btn-primary">Create new space <i class="fas fa-plus"></i></router-link>
                  </div>
                  <div class="card-body">
                        <div class="row">
                          <div class="col-md-12">
                              <h6>Total <span class="text-success">{{ kennels.length }}</span> Kennels</h6>
                          </div>
                          <div class="col-md-12 mt-3">
                              <div class="section" v-if="is_loading">
                                  <skeleton v-for="(n,i) in 10" :key="i" width="100%" height="40px" class="mt-2" />
                              </div>

                              <div v-if="!is_loading && kennels.length > 0" class="table-responsive-md">
                                  <table class="table table-hover table-striped">
                                      <thead>
                                          <tr>
                                              <th>#</th>
                                              <th>Title</th>
                                              <th>UID</th>
                                              <th>Size</th>
                                              <th>Action</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr v-for="(kennel,i) in kennels" :key="i">
                                              <td>{{ i+1 }}</td>
                                              <td class="text-muted"><strong>{{ kennel.title }}</strong></td>
                                              <td>{{ kennel.unique_id }}</td>
                                              <td>{{ kennel.size }}</td>
                                              <td>
                                                  <button @click="deleteKennel(kennel.id,i)" class="btn btn-sm btn-danger">Delete</button>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
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
            kennels: [],
        }
    },
    created(){
        this.getKennels();
    },
    methods:{
        getKennels(){
            axios.get("/admin/api/list-all-kennels")
            .then(resp=>{
                return resp.data;
            }).then(data=>{
                this.kennels = data;
                this.is_loading = false;
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
        deleteKennel(kennelId,index){
            swal.fire({
                title: "Are you sure?",
                text: "This will delete the boarding booking informations also from database. Once deleted, can't be restored!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(res=>{
                if(res.isConfirmed){
                    axios.post("/admin/api/delete-kennel",{
                        kennelId: kennelId,
                    }).then(resp=>{
                        return resp.data;
                    }).then(data=>{
                        if(data.status == "ok"){
                            this.kennels.splice(index,1)
                            swal.fire("Success","Kennel was deleted","success");
                        }
                    }).catch(err=>{
                        console.error(err.response.data);
                    })
                }
            })
        }
    }
}
</script>

<style>

</style>