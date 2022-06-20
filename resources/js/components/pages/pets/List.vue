<template>
<section class="section">
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h6><span class="text-success">{{ pets.length }}</span>All Pets</h6>
                </div>
                <div class="card-body">

                    <div class="row">
                          
                          <div class="col-md-6">
                              <label for="">Search Customer</label>
                              <input type="search" class="form-control" placeholder="Search pets by name, or Customer email, phone or any ID"
                              v-model="searchText" v-on:input="searchPet">
                          </div>

                          <div class="col-md-12 mt-3">
                              <div class="section" v-if="is_loading">
                                  <skeleton v-for="(n,i) in 10" :key="i" width="100%" height="40px" class="mt-2" />
                              </div>
                              <!-- Normal View -->
                              <div v-if="!searchMode">
                                <div v-if="!is_loading && pets.length > 0" class="table-responsive-md">
                                    <table class="table table-hover table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Pet Name</th>
                                                <th>Owner Name</th>
                                                <th>Color</th>
                                                <th>Breed</th>
                                                <th>Age</th>
                                                <th>Gender</th>
                                                <th>Rabies Exp. Date</th>
                                                <th>Vaccine Record</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-if="pets.length == 0">
                                                <td colspan="8" class="text-center text-danger">No records found</td>
                                            </tr>
                                            <tr v-else v-for="(pet,i) in pets" :key="i">
                                                <td>
                                                <img v-if="pet.photo!=null" :src="`/uploads/customer/${pet.customer_id}/${pet.photo}`" alt="" class="pet-round-thumb">
                                                <img v-else :src="`/images/dog-placeholder-tall.svg`" alt="" class="pet-round-thumb">
                                                </td>
                                                <td>{{ pet.name }}</td>
                                                <td>{{ pet.customer.first_name +" "+pet.customer.last_name }}</td>
                                                <td>{{ pet.color }}</td>
                                                <td>{{ pet.breed }}</td>
                                                <td>{{ pet.age }}</td>
                                                <td>{{ pet.gender }}</td>
                                                <td>{{ pet.rabies||'N/A' }}</td>
                                                <td>
                                                <span v-if="pet.vac_record" class="text-muted">Yes <i class="fas fa-check text-success"></i> 
                                                    <a :href="`/uploads/customer/${pet.customer_id}/${pet.vac_record}`" target="_blank"
                                                    title="Download" class="ml-3"><i class="fas fa-download"></i></a>
                                                </span>
                                                <span v-else class="text-muted">No <i class="fas fa-times text-danger"></i>
                                                </span>
                                                </td>
                                                <td>
                                                    <button @click="deletePet(i,pet.id,'normal')" class="btn btn-sm btn-danger"><i class="fas fa-trash"></i></button>
                                                    <button @click="$router.push({ name: 'pets.profile', params:{ petId: pet.id } })" class="btn btn-sm btn-primary" title="View/Edit"><i class="fas fa-eye"></i></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                        
                                    </table>
                                </div>
                                <div class="row justify-content-center mt-4">
                                    <pagination :data="paginateData" @pagination-change-page="getPetList"></pagination>
                                </div>
                              </div>
                              <!-- End -->

                              <!-- Search Mode -->
                              <div v-if="searchMode">
                                    <p class="text-muted">Search result</p>
                                    <div v-if="!is_loading && petsSearch.length > 0" class="table-responsive-md">
                                        <table class="table table-hover table-striped">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Pet Name</th>
                                                    <th>Owner Name</th>
                                                    <th>Color</th>
                                                    <th>Breed</th>
                                                    <th>Age</th>
                                                    <th>Gender</th>
                                                    <th>Rabies Exp. Date</th>
                                                    <th>Vaccine Record</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-if="pets.length == 0">
                                                    <td colspan="8" class="text-center text-danger">No records found</td>
                                                </tr>
                                                <tr v-else v-for="(pet,i) in petsSearch" :key="i">
                                                    <td>
                                                    <img v-if="pet.photo" :src="`/uploads/customer/${pet.customer_id}/${pet.photo}`" alt="" class="pet-round-thumb">
                                                    <img v-else :src="`/images/dog-placeholder-tall.svg`" alt="" class="pet-round-thumb">
                                                    </td>
                                                    <td>{{ pet.name }}</td>
                                                    <td>{{ pet.customer.first_name +" "+pet.customer.last_name }}</td>
                                                    <td>{{ pet.color }}</td>
                                                    <td>{{ pet.breed }}</td>
                                                    <td>{{ pet.age }}</td>
                                                    <td>{{ pet.gender }}</td>
                                                    <td>{{ pet.rabies||'N/A' }}</td>
                                                    <td>
                                                    <span v-if="pet.vac_record" class="text-muted">Yes <i class="fas fa-check text-success"></i> 
                                                        <a :href="`/uploads/customer/${pet.customer_id}/${pet.vac_record}`" target="_blank"
                                                        title="Download" class="ml-3"><i class="fas fa-download"></i></a>
                                                    </span>
                                                    <span v-else class="text-muted">No <i class="fas fa-times text-danger"></i>
                                                    </span>
                                                    </td>
                                                    <td>
                                                        <button @click="deletePet(i,pet.id,'search')" class="btn btn-sm btn-danger"><i class="fas fa-trash"></i></button>
                                                        <button @click="$router.push({ name: 'pets.profile', params:{ petId: pet.id } })" class="btn btn-sm btn-primary" title="View/Edit"><i class="fas fa-eye"></i></button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            
                                        </table>
                                    </div>
                                    <div v-else class="text-center">
                                        <h4 class="text-danger">No results found</h4>
                                    </div>
                              </div>
                              <!-- End -->
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
    data() {
        return {
            is_loading: true,
            pets: [],
            paginateData: {},
            searchText: '',
            searchMode: false,
            petsSearch: [],
        }
    },
    created(){
        this.getPetList();
    },
    methods:{
        getPetList(page=1){
            this.is_loading = true;
            axios.get("/admin/api/get-pet-list?page="+page).then(resp=>{
                return resp.data;
            }).then(data=>{
                this.paginateData = data;
                this.pets = data.data;
                this.is_loading = false;
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
        searchPet(){
            if(this.searchText != '')
            {
                this.is_loading = true;
                this.searchMode = true;
            }
            else
            {
                this.is_loading = false;
                this.searchMode = false;
            }
            axios.get("/admin/api/search-pet-from-list",{
                params:{
                    searchText: this.searchText,
                }
            }).then(resp=>{
                return resp.data;
            }).then(data=>{
                this.petsSearch = data;
                this.is_loading = false;
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
        deletePet(index,petId,type){
            swal.fire({
                title: "Are you sure?",
                text: "Once deleted can't be restored",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(res=>{
                if(res.isConfirmed){
                    axios.post("/admin/api/delete-pet",{
                        petId:petId
                    }).then(resp=>{
                        return resp.data;
                    }).then(data=>{
                        if(data.status == "ok"){
                            swal.fire("Success",data.msg,"success");
                            if(type == "search"){
                                this.petsSearch.splice(index,1);
                            }
                            else if(type=="normal"){
                                this.pets.splice(index,1)
                            }
                        }
                    }).catch(err=>{
                        console.error(err.response.data);
                    })
                }
            });
        }
    }
}
</script>

<style>

</style>