<template>
  <section class="section">
      <div class="row">
          <div class="col-md-12">
              <div class="card">
                  <div class="card-header d-flex justify-content-between">
                      <h4 class="text-muted">Pricing Packages</h4>
                          <router-link :to="{name: 'admin-site-data'}" class="raise-button"><i class="fas fa-arrow-left"></i> Go back</router-link>
                  </div>
                  <div class="card-body">
                      <router-link :to="{name: 'admin-sitedata.create-pricing'}" class="btn btn-sm btn-primary mb-4"><i class="fas fa-plus"></i> Add new package</router-link>
                      <div class="row" v-if="is_loading">
                          <div class="col-md-12" v-for="n in 10" :key="n">
                              <skeleton width="100%" height="40px"/>
                          </div>
                      </div>
                      <div class="table-responsive" v-if="!is_loading">
                          <table class="table table-hover">
                              <thead>
                                  <tr>
                                      <th>#</th>
                                      <th>Package Name</th>
                                      <th>Arrange Number</th>
                                      <th>Action</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr v-for="(price,i) in pricings" :key="i" class="arrange">
                                      <td>{{ i+1 }}</td>
                                      <td>{{ price.name }}</td>
                                      <td>{{ price.sort_number }}</td>
                                      <td>
                                          <router-link :to="{name: 'admin-sitedata.edit-pricing', params:{id: price.id}}" class="btn btn-sm btn-primary">Edit</router-link>
                                          <button @click="deletePrice(price.id,i)" class="btn btn-sm btn-danger">Delete</button>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
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
            pricings: [],
        }
    },
    methods:{
        getPricings(){
            axios.get("/admin/api/get-pricings")
            .then(resp=>{
                return resp.data;
            }).then(data=>{
                this.pricings = data;
                this.is_loading = false;
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
        deletePrice(pricingId,index){
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
                    axios.post("/admin/api/delete-pricing",{
                        pricingId: pricingId
                    }).then(resp=>{
                        return resp.data;
                    }).then(data=>{
                        if(data.status=="ok"){
                            swal.fire("Success",data.msg,"success");
                            this.pricings.splice(index,1);
                        }
                    });
                }
            });
        }
    },
    created() {
        this.getPricings();
    },
}
</script>

<style>

</style>