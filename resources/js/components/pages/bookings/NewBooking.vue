<template>
  <section class="section">
      <div class="row justify-content-center">
          <div class="col-md-12">
              <div class="card">
                  <div class="card-header">
                      <h4>New Booking</h4>
                  </div>
                  <div class="card-body" style="height: 100vh;">
                      <div class="row">
                          <div class="col-md-6">
                              <label for="">Search Customer</label>
                              <input type="search" class="form-control" placeholder="Search Customer by name, email, phone" 
                              v-model="searchText" v-on:input="searchCustomer">
                          </div>
                      </div>
                      <div class="row mt-3" v-if="is_loading">
                        <div class="col-md-12 mt-2">
                            <skeleton v-for="(n,i) in 10" :key="i" width="100%" height="40px" class="mt-2" />
                        </div>
                      </div>
                      <div class="row mt-3">
                          <div class="col-md-12">
                              <div v-if="!is_loading && customers.length > 0" class="table-responsive-md">
                                  <table class="table table-hover table-striped">
                                      <thead>
                                          <tr>
                                              <th>Csutomer Name</th>
                                              <th>Cell Number</th>
                                              <th>Email</th>
                                              <th>Total Pets</th>
                                              <th>Booking</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr v-for="(customer,i) in customers" :key="i">
                                              <td>{{ customer.first_name + ' '+customer.last_name }}</td>
                                              <td>{{ customer.cell_phone }}</td>
                                              <td>{{ customer.email }}</td>
                                              <td>{{ customer.pet.length }}</td>
                                              <td>
                                                  <div class="dropdown">
                                                        <button class="btn btn sm btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" 
                                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                          New booking
                                                        </button>
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            <router-link :to="{name: 'booking.boarding', params:{id:customer.id}}" class="dropdown-item" href="#">Boarding</router-link>
                                                            <router-link :to="{name: 'booking.grooming', params:{id:customer.id}}" class="dropdown-item" href="#">Grooming</router-link>
                                                        </div>
                                                    </div>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                              
                              <div class="text-center mt-5" v-if="!is_loading && customers.length == 0">
                                  <h5 class="text-muted">Search Customer</h5>
                                  <p class="text-muted"><strong>Or</strong></p>
                                  <router-link :to="{name: 'customer.create'}" class="btn btn-primary"><i class="fas fa-plus"></i> Add new customer</router-link>
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
            is_loading: false,
            customers: [],
            searchText: null,
        }
    },
    methods:{
        searchCustomer(){
            if(this.searchText != ""){
                this.is_loading = true;
                axios.get("/admin/api/search-customer",{
                    params:{
                        text: this.searchText
                    }
                }).then(resp=>{
                    return resp.data;
                }).then(data=>{
                    this.customers = data.data;
                    this.is_loading = false;
                }).catch(err=>{
                    console.error(err.response.data);
                });
            }
            else{
                this.is_loading = false;
                this.customers = [];
            }
        }
    }
}
</script>

<style>

</style>