<template>
  <section class="section">
      <div class="row">
          <div class="col-md-12">
              <div class="card">
                  <div class="card-header d-flex justify-content-between">
                      <h4>Customer List</h4>
                      <router-link :to="{name: 'customer.create'}" class="btn btn-sm btn-primary">Create new customer <i class="fas fa-plus"></i></router-link>
                  </div>
                  <div class="card-body">
                      <div class="row">
                          <div class="col-md-12">
                              <h6>Total <span class="text-success">{{ total_customer }}</span> Customers</h6>
                          </div>
                        <div class="col-md-6 mt-3">
                            <label for="">Search Customer</label>
                            <input type="search" class="form-control" placeholder="Search Customer by name, email, phone" 
                            v-model="searchText" v-on:input="searchCustomer">
                        </div>
                          <div class="col-md-12 mt-3">
                              <div class="section" v-if="is_loading">
                                  <skeleton v-for="(n,i) in 10" :key="i" width="100%" height="40px" class="mt-2" />
                              </div>

                              <div v-if="!is_loading && customers.length > 0 && !searchMode" class="table-responsive-md">
                                  <table class="table table-hover table-striped">
                                      <thead>
                                          <tr>
                                              <th>Csutomer Name</th>
                                              <th>Cell Number</th>
                                              <th>Email</th>
                                              <th>Total Pets</th>
                                              <th>Booking</th>
                                              <th>Action</th>
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
                                              <td>
                                                  <router-link :to="{name: 'customer.profile', params:{customerId:customer.id}}" class="btn btn-success btn-sm">View</router-link>
                                                  <button @click="deleteCustomer(customer.id,i)" class="btn btn-sm btn-warning">Delete</button>
                                                  
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                                  <div class="row justify-content-center mt-4">
                                    <pagination :data="paginateData" @pagination-change-page="getCustomerList"></pagination>
                                </div>
                              </div>


                              <div v-if="!is_loading && searchCustomers.length > 0 && searchMode" class="table-responsive-md">
                                  <table class="table table-hover table-striped">
                                      <thead>
                                          <tr>
                                              <th>Csutomer Name</th>
                                              <th>Cell Number</th>
                                              <th>Email</th>
                                              <th>Total Pets</th>
                                              <th>Booking</th>
                                              <th>Action</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr v-for="(customer,i) in searchCustomers" :key="i">
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
                                              <td>
                                                  <router-link :to="{name: 'customer.profile', params:{customerId:customer.id}}" class="btn btn-success btn-sm">View</router-link>
                                                  <button @click="deleteCustomer(customer.id,i)" class="btn btn-sm btn-warning">Delete</button>
                                                  
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                                  <div class="row justify-content-center mt-4">
                                    <pagination :data="searchPaginate" @pagination-change-page="searchCustomer"></pagination>
                                </div>
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
            paginateData: {},
            customers: [],
            total_customer: 0,
            searchText: "",
            searchMode: false,
            searchCustomers: [],
            searchPaginate:{}
        }
    },
    created(){
        this.getCustomerList();
    },
    methods:{
        getCustomerList(page  = 1){
            this.is_loading = true;
            axios.get("/admin/api/customer-list?page="+page).then(resp =>{
                return resp.data;
            }).then(data=>{
                this.total_customer = data.total;
                this.paginateData = data.customer;
                this.customers = data.customer.data;
                this.is_loading = false;
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
        deleteCustomer(customer_id,index){
            // Swal
            swal.fire({
                title: "Are you sure?",
                text: "Once deleted can't be restored",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(res => {
                if(res.isConfirmed){
                    axios.post("/admin/api/delete-customer",{
                        customer_id : customer_id,
                    }).then(resp=>{
                        return resp.data;
                    }).then(data=>{
                        console.log(data);
                        if(data.status=="ok"){
                            this.customers.splice(index,1);
                            swal.fire({
                                title: "Success",
                                icon: "success",
                                text: data.msg
                            });
                        }else{
                            swal.fire({
                                title : "Failed",
                                text: "Internal Server Error",
                                icon: "error"
                            });
                        }
                    }).catch(err=>{
                        console.error(err.response.data);
                    });
                }
            })

            // end
            
        },
        searchCustomer(page = 1){
            if(this.searchText != "")
            {
                this.searchMode = true;
                this.is_loading = true;
                axios.get("/admin/api/search-customer?page="+page,{
                    params:{
                        text: this.searchText
                    }
                }).then(resp=>{
                    return resp.data;
                }).then(data=>{
                    this.searchCustomers = data.data;
                    this.searchPaginate = data;
                    this.is_loading = false;
                }).catch(err=>{
                    console.error(err.response.data);
                });
            }
            else
            {
                this.searchMode = false;
            }
        }
    }
}
</script>

<style>

</style>