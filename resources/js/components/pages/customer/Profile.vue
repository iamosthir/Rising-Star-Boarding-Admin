<template>
  <section class="section">
      <div class="row">
          <div class="col-md-12">
              <div class="card">
                  <div class="card-header d-flex justify-content-between">
                      <h4 class="text-muted"><span v-if="!is_loading">{{ customer_data.first_name + " " + customer_data.last_name }}</span></h4>
                      <button @click="$router.go(-1)" class="raise-button"><i class="fas fa-arrow-left"></i> Go back</button>
                  </div>
                  <!-- Skeleton -->
                  <div class="card-body" v-if="is_loading">
                    <div class="row">
                      <div class="col-md-3 mt-2" v-for="(n,i) in 12" :key="i">
                        <skeleton width="100%" height="100px"/>
                      </div>
                    </div>
                    <div class="row mt-3">
                      <div class="col-md-12 mt-2" v-for="(n,i) in 5" :key="i">
                        <skeleton width="100%" height="30px"/>
                      </div>
                    </div>
                  </div>
                  <!--  -->

                  <!-- Profile Plain View -->
                  <div v-if="!is_loading && !edit_mode" class="card-body">
                      <div class="row">
                          <div class="col-md-12 b-r mb-4 text-right">
                              <button @click="edit_mode = true" class="btn btn-success btn-sm">Edit Profile</button>
                          </div>
                          <div class="col-md-3 col-6 b-r">
                            <strong>Full Name</strong>
                            <br>
                            <p class="text-muted">{{ customer_data.first_name + " " + customer_data.last_name }}</p>
                          </div>
                          <div class="col-md-3 col-6 b-r">
                            <strong>Address 1</strong>
                            <br>
                            <p class="text-muted">{{ customer_data.address1 }}</p>
                          </div>
                          <div class="col-md-3 col-6 b-r">
                            <strong>Address 2</strong>
                            <br>
                            <p class="text-muted">{{ customer_data.address2||'N/A' }}</p>
                          </div>
                          <div class="col-md-3 col-6 b-r">
                            <strong>Email</strong>
                            <br>
                            <p class="text-muted">{{ customer_data.email }}</p>
                          </div>
                          <div class="col-md-3 col-6 b-r">
                            <strong>Cell Phone</strong>
                            <br>
                            <p class="text-muted">{{ customer_data.cell_phone }}</p>
                          </div>
                          <div class="col-md-3 col-6 b-r">
                            <strong>Home Phone</strong>
                            <br>
                            <p class="text-muted">{{ customer_data.home_phone||'N/A' }}</p>
                          </div>
                          <div class="col-md-3 col-6">
                            <strong>State</strong>
                            <br>
                            <p class="text-muted">{{ customer_data.state }}</p>
                          </div>
                          <div class="col-md-3 col-6">
                            <strong>City</strong>
                            <br>
                            <p class="text-muted">{{ customer_data.city }}</p>
                          </div>
                          <div class="col-md-3 col-6">
                            <strong>Zip Code</strong>
                            <br>
                            <p class="text-muted">{{ customer_data.zip }}</p>
                          </div>
                          <div class="col-md-3 col-6">
                            <strong>Vet Name</strong>
                            <br>
                            <p class="text-muted">{{ customer_data.vet_name||'N/A' }}</p>
                          </div>
                          <div class="col-md-3 col-6">
                            <strong>Vet Number</strong>
                            <br>
                            <p class="text-muted">{{ customer_data.vet_number||'N/A' }}</p>
                          </div>
                          <div class="col-md-3 col-6">
                            <strong>Emergency Contact Person</strong>
                            <br>
                            <p class="text-muted">{{ customer_data.emergency_person||'N/A' }}</p>
                          </div>
                          <div class="col-md-3 col-6">
                            <strong>Emergency Contact Number</strong>
                            <br>
                            <p class="text-muted">{{ customer_data.emergency_contact||'N/A' }}</p>
                          </div>
                        </div>
                        <hr>
                        <legend class="d-flex justify-content-between">
                          <span>Pets</span>
                          <button v-if="!createPetMode" @click="createPetMode = true" class="btn btn-sm btn-primary">Add pet <i class="fas fa-plus"></i></button>
                        </legend>
                        <div class="row mt-2" v-if="!createPetMode">
                            <div class="col-md-12">
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead style="background-color: antiquewhite;">
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Gender</th>
                                                <th>Age</th>
                                                <th>Breed</th>
                                                <th>Color</th>
                                                <th>Vaccination Record</th>
                                                <th>Rabies Exp. Date</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                          <tr v-if="pets.length == 0" style="background-color: rgba(0,0,0,0.05)">
                                            <td colspan="8" class="text-center text-danger">No pet registered yet</td>
                                          </tr>
                                          <tr v-else v-for="(pet,i) in pets" :key="i">
                                            <td>
                                              <img v-if="pet.photo!=null" :src="`/uploads/customer/${pet.customer_id}/${pet.photo}`" alt="" class="pet-round-thumb">
                                              <img v-else :src="`/images/dog-placeholder-tall.svg`" alt="" class="pet-round-thumb">
                                            </td>
                                            <td>{{ pet.name }}</td>
                                            <td>{{ pet.gender }}</td>
                                            <td>{{ pet.age }}</td>
                                            <td>{{ pet.breed }}</td>
                                            <td>{{ pet.color }}</td>
                                            <td>
                                              <span v-if="pet.vac_record" class="text-muted">Yes <i class="fas fa-check text-success"></i> 
                                                <a :href="`/uploads/customer/${pet.customer_id}/${pet.vac_record}`" target="_blank"
                                                 title="Download" class="ml-3"><i class="fas fa-download"></i></a>
                                              </span>
                                              <span v-else class="text-muted">No <i class="fas fa-times text-danger"></i>
                                              </span>
                                            </td>
                                            <td>{{ pet.rabies }}</td>
                                            <td>
                                              <button @click="deletePet(i,pet.id)" class="btn btn-sm btn-danger">Delete</button>
                                              <button @click="$router.push({ name: 'pets.profile', params: {petId : pet.id} })" class="btn btn-sm btn-primary">View</button>
                                            </td>
                                          </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <!-- Create pet form -->
                        <div class="row mt-2" v-if="createPetMode">
                          <div class="col-md-12">
                              <form @submit.prevent="createPet" id="petForm">
                                  <fieldset>
                                      <legend class="text-muted">Create new pet</legend>
                                  </fieldset>
                                  <div class="row">
                                      <div class="col-md-3 form-group">
                                          <label for="">Pet Name</label>
                                          <input :class="{'is-invalid' : formPet.errors.has('name')}" type="text" class="form-control" v-model="formPet.name">
                                          <HasError :form="formPet" field="name" />
                                      </div>
                                      <div class="col-md-3 form-group">
                                          <label for="">Pet Color</label>
                                          <input :class="{'is-invalid' : formPet.errors.has('color')}" type="text" class="form-control" v-model="formPet.color">
                                          <HasError :form="formPet" field="color" />
                                      </div>
                                      <div class="col-md-3 form-group">
                                          <label :class="{'is-invalid' : formPet.errors.has('breed')}" for="">Pet Breed</label>
                                          <input type="text" class="form-control" v-model="formPet.breed">
                                          <HasError :form="formPet" field="breed" />
                                      </div>
                                      <div class="col-md-3 form-group">
                                          <label for="">Age</label>
                                          <input :class="{'is-invalid' : formPet.errors.has('age')}" type="text" class="form-control" v-model="formPet.age">
                                          <HasError :form="formPet" field="age" />
                                      </div>
                                      <div class="col-md-4 form-group">
                                          <label for="">Rabies Exp. Date</label>
                                          <input type="date" class="form-control" v-model="formPet.rabies">
                                      </div>
                                      <div class="col-md-4 form-group">
                                          <label for="">Upload New Photo</label>
                                          <input type="file" class="form-control-file" data-type="photo" @change="fileChange">
                                      </div>
                                      <div class="col-md-4 form-group">
                                          <label for="">Vaccination Record (Scanned Photo)</label>
                                          <input type="file" class="form-control-file" data-type="vac" @change="fileChange">
                                      </div>
                                      <div class="col-md-12 form-group">
                                          <label for="">Feeding Instruction</label>
                                          <textarea style="height: 150px !important;" class="form-control" v-model="formPet.feeding" rows="10"></textarea>
                                      </div>
                                      <div class="col-md-12 form-group">
                                          <label for="">Medication</label>
                                          <textarea style="height: 150px !important;" class="form-control" v-model="formPet.medic" rows="10"></textarea>
                                      </div>
                                      <div class="col-md-12 form-group">
                                          <Button :form="formPet" class="btn btn-success">Create</Button>
                                          <button @click="createPetMode = false" type="button" class="btn btn-danger">Cancel</button>
                                      </div>
                                  </div>
                              </form>
                          </div>
                        </div>
                  </div>
                  <!--  -->

                  <!-- Profile Edit Form -->
                  <div v-if="!is_loading && edit_mode" class="card-body">
                    <div class="row">
                      <div class="col-md-12 b-r mb-4 text-right">
                          <button @click="edit_mode = false" class="btn btn-danger btn-sm">Cancel Edit</button>
                      </div>
                      <div class="col-md-12 mt-3">
                        <form @submit.prevent="updateCustomerProfile">
                          <fieldset>
                              <legend>Customer Information</legend>
                              <div class="row mt-2">
                                  <div class="col-md-6 form-group">
                                      <label for="">First Name</label>
                                      <input :class="{'is-invalid' : form.errors.has('first_name')}" type="text" 
                                      class="form-control" v-model="form.first_name">
                                      <HasError :form="form" field="first_name" />
                                  </div>
                                  <div class="col-md-6 form-group">
                                      <label for="">Last Name</label>
                                      <input type="text" class="form-control" v-model="form.last_name">
                                  </div>
                                  <div class="col-md-6 form-group">
                                      <label for="">Adress 1</label>
                                      <textarea :class="{'is-invalid' : form.errors.has('address1')}" rows="5" 
                                      class="form-control" v-model="form.address1"></textarea>
                                      <HasError :form="form" field="address1" />
                                  </div>
                                  <div class="col-md-6 form-group">
                                      <label for="">Adress 2</label>
                                      <textarea v-model="form.address2"  rows="5" class="form-control"></textarea>
                            
                                  </div>
                                  <div class="col-md-4 form-group">
                                      <label for="">City</label>
                                      <input :class="{'is-invalid' : form.errors.has('city')}" type="text" 
                                      class="form-control" v-model="form.city">
                                      <HasError :form="form" field="city" />
                                  </div>
                                  <div class="col-md-4 form-group">
                                      <label for="">State</label>
                                      <input :class="{'is-invalid' : form.errors.has('state')}" type="text" 
                                      class="form-control" v-model="form.state">
                                      <HasError :form="form" field="state" />
                                  </div>
                                  <div class="col-md-4 form-group">
                                      <label for="">Zip Code</label>
                                      <input :class="{'is-invalid' : form.errors.has('zip')}" type="number" 
                                      class="form-control" v-model="form.zip">
                                      <HasError :form="form" field="zip" />
                                  </div>
                                  <div class="col-md-4 form-group">
                                      <label for="">Home Phone</label>
                                      <input type="tel" class="form-control" v-model="form.home_phone">
                                  </div>
                                  <div class="col-md-4 form-group">
                                      <label for="">Cell Phone</label>
                                      <input :class="{'is-invalid' : form.errors.has('cell_phone')}" type="tel"
                                       class="form-control" v-model="form.cell_phone">
                                      <HasError :form="form" field="cell_phone" />
                                  </div>
                                  <div class="col-md-4 form-group">
                                      <label for="">Email Address</label>
                                      <input :class="{'is-invalid' : form.errors.has('email')}" type="email" 
                                      class="form-control" v-model="form.email">
                                      <HasError :form="form" field="email" />
                                  </div>
                                  <div class="col-md-6 form-group">
                                      <label for="">Vet Name</label>
                                      <input type="text" class="form-control" v-model="form.ver_name">
                                  </div>
                                  <div class="col-md-6 form-group">
                                      <label for="">Vet Number</label>
                                      <input type="text" class="form-control" v-model="form.vet_number">
                                  </div>
                                  <div class="col-md-6 form-group">
                                      <label for="">Emergency Contact Person</label>
                                      <input type="text" class="form-control" v-model="form.emergency_person">
                                  </div>
                                  <div class="col-md-6 form-group">
                                      <label for="">Emergency Contact Number</label>
                                      <input type="tel" class="form-control" v-model="form.emergency_contact">
                                  </div>
                              </div>
                          </fieldset>
                          <div class="row">
                            <div class="col-md-12 form-group">
                              <Button :form="form" class="btn btn-success">Update</Button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <!--  -->
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
            edit_mode: false,
            customer_data: {},
            pets: [],
            form: new Form({
                customer_id: this.$route.params.customerId,
                first_name : null,
                last_name: null,
                address1 : null,
                address2: null,
                city: null,
                state: null,
                zip: null,
                home_phone: null,
                cell_phone: null,
                email : null,
                vet_name: null,
                vet_number: null,
                emergency_person: null,
                emergency_contact: null,
            }),
            formPet: new Form({
                customerId: this.$route.params.customerId,
                name: "",
                breed: "",
                color: "",
                age: "",
                feeding: "",
                medic: "",
                rabies: "",
                photo: "",
                vac: "",
            }),
            createPetMode: false,
        }
    },
    created(){
      this.getCustomerData();
    },
    methods: {
        getCustomerData(){
            this.is_loading = true;
            axios.get("/admin/api/get-customer-data",{
              params:{
                customer_id: this.$route.params.customerId
              }
            })
            .then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                  this.customer_data = data.data;
                  this.pets = data.data.pet;
                  // Initialize Form
                  this.form.first_name = data.data.first_name;
                  this.form.last_name = data.data.last_name;
                  this.form.address1  = data.data.address1;
                  this.form.address2 = data.data.address2;
                  this.form.city = data.data.city;
                  this.form.state = data.data.state;
                  this.form.zip = data.data.zip;
                  this.form.home_phone = data.data.home_phone;
                  this.form.cell_phone = data.data.cell_phone;
                  this.form.email  = data.data.email;
                  this.form.vet_name = data.data.vet_name;
                  this.form.vet_number = data.data.vet_number;
                  this.form.emergency_person = data.data.emergency_person;
                  this.form.emergency_contact = data.data.emergency_contact;
                  // 
                  this.is_loading = false;
                }
                else{
                    this.$router.push({name:'customer.list'});
                }
            }).catch(err=>{
                console.error(err.response.data);
                this.$router.push({name: 'customer.list'});
            })
        },
        updateCustomerProfile(){
          this.form.post("/admin/api/update-customer-profile")
          .then(resp=>{
            return resp.data;
          }).then(data=>{
            if(data.status == "ok"){
              this.edit_mode = false;
              this.getCustomerData();
              swal.fire("Success",data.msg,"success");
            }
          }).catch(err=>{
            console.error(err.response.data);
          });
        },
        fileChange(e){
            const file = e.target.files[0];
            let type = $(e.target).data("type");
            
            if(type == "photo"){
                if(file){
                    this.formPet.photo = file;
                } else{
                    this.formPet.photo = "";
                }
            }
            else if(type == "vac"){
                if(file){
                    this.formPet.vac = file;
                } else{
                    this.formPet.vac = "";
                }
            }
        },
        async createPet(){
          await this.formPet.post("/admin/api/create-pet",{
            //
          }).then(resp=>{
            return resp.data;
          }).then(data=>{
            if(data.status == "ok"){
              swal.fire("Success","New pet created succssfully", "success");
              this.pets.push(data.data);
              // Reset Form
              $("#petForm").trigger("reset");
                this.formPet.name = "";
                this.formPet.breed = "";
                this.formPet.color = "";
                this.formPet.age = "";
                this.formPet.feeding = "";
                this.formPet.medic = "";
                this.formPet.rabies = "";
                this.formPet.photo = "";
                this.formPet.vac = "";
              // 
              this.createPetMode = false;
            }
          }).catch(err=>{
            console.error(err.response.data);
          })
        },
        deletePet(index,petId){
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
                            this.pets.splice(index,1);
                        }
                    }).catch(err=>{
                        console.error(err.response.data);
                    })
                }
            });
        }
    },
}
</script>

<style>

</style>