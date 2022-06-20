<template>
  <section class="section">
      <div class="row">
          <div class="col-md-12">
              <nav aria-label="breadcrumb">
                    <div class="btn-group mb-3" role="group" aria-label="Basic example">
                        <router-link :to="{name: 'pending.boarding'}" class="btn btn-lg btn-outline-success"><i class="fas fa-calendar"></i> Boardings ({{ pendingCount.boarding||0 }})</router-link>
                        <router-link :to="{name: 'pending.grooming'}" class="btn btn-lg btn-outline-success"><i class="fas fa-list"></i> Grooming ({{ pendingCount.grooming||0 }})</router-link>
                    </div>
                </nav>
          </div>
      </div>
      <router-view></router-view>
  </section>
</template>

<script>
export default {
    data(){
        return{
            pendingCount:{},
        }
    },
    methods:{
        getPendingCount(){
            axios.get("/admin/api/get-pending-counts")
            .then(resp=>{
                return resp.data;
            }).then(data=>{
                this.pendingCount = data;
            }).catch(err=>{
                console.error(err.response.data);
            })
        }
    },
    created() {
        this.getPendingCount();
    },
}
</script>

<style>

</style>