<template>
  <section class="section">
      <div class="row">
          <div class="col-md-12">
              <div class="card">
                  <div class="card-header">
                      <h4>{{ petData.name }}</h4>
                  </div>
                  
                  <div class="card-body">
                      <!-- Skeleton -->
                      <div class="row" v-if="is_loading">
                          <div class="col-md-2">
                              <skeleton width="100%" height="250px"/>
                          </div>
                          <div class="col-md-10">
                              <div class="row">
                                  <div class="col-md-4 form-group" v-for="(n,i) in 6" :key="i">
                                      <skeleton width="100%" height="100px"/>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-12 form-group">
                              <skeleton width="30%" height="20px"/>
                              <br>
                              <br>
                              <skeleton width="60%" height="20px"/>
                              <br>
                              <skeleton width="60%" height="20px"/>
                          </div>
                          <div class="col-md-12 form-group">
                              <skeleton width="30%" height="20px"/>
                              <br>
                              <br>
                              <skeleton width="60%" height="20px"/>
                              <br>
                              <skeleton width="60%" height="20px"/>
                          </div>
                      </div>
                      <!--  -->

                      <!-- Profile -->
                      <div class="row" v-if="!is_loading && !edit_mode">
                          <div class="col-md-12 form-group">
                              <h4 class="text-muted">Owner : <strong class="text-warning">{{ petData.customer.first_name+" "+petData.customer.last_name }}</strong></h4>
                          </div>
                          <div class="col-md-2 form-group">
                            <img v-if="petData.photo" :src="`/uploads/customer/${petData.customer_id}/${petData.photo}`" alt="" class="dog-img">
                            <img v-else :src="`/images/dog-placeholder-tall.svg`" alt="" class="dog-img">
                          </div>
                          <div class="col-md-10 form-group">
                              <div class="row">
                                  <div class="col-md-4 form-group">
                                    <strong>Pet Name</strong>
                                    <br>
                                    <p class="text-muted">{{ petData.name }}</p>
                                  </div>
                                  <div class="col-md-4 form-group">
                                    <strong>Gender</strong>
                                    <br>
                                    <p class="text-muted">{{ petData.gender }}</p>
                                  </div>
                                  <div class="col-md-4 form-group">
                                    <strong>Pet Color</strong>
                                    <br>
                                    <p class="text-muted">{{ petData.color }}</p>
                                  </div>
                                  <div class="col-md-4 form-group">
                                    <strong>Pet Breed</strong>
                                    <br>
                                    <p class="text-muted">{{ petData.breed }}</p>
                                  </div>
                                  <div class="col-md-4 form-group">
                                    <strong>Age</strong>
                                    <br>
                                    <p class="text-muted">{{ petData.age }}</p>
                                  </div>
                                  <div class="col-md-4 form-group">
                                    <strong>Rabies Exp. Date</strong>
                                    <br>
                                    <p class="text-muted">{{ petData.rabies||'N/A' }}</p>
                                  </div>
                                  <div class="col-md-4 form-group">
                                    <strong>Vaccination Record</strong>
                                    <br>
                                    <span v-if="petData.vac_record" class="text-muted">Yes <i class="fas fa-check text-success"></i> 
                                        <a :href="`/uploads/customer/${petData.customer_id}/${petData.vac_record}`" target="_blank"
                                        title="Download" class="ml-3"><i class="fas fa-download"></i></a>
                                    </span>
                                    <span v-else class="text-muted">No <i class="fas fa-times text-danger"></i>
                                    </span>
                                  </div>
                                  
                              </div>
                          </div>
                          <div class="col-md-12 form-group">
                              <strong>Feeding Instruction</strong>
                              <br>
                              <p style="white-space:pre-wrap;" class="text-muted">{{ petData.feeding }}</p>
                          </div>
                          <div class="col-md-12 form-group">
                              <strong>Medication</strong>
                              <br>
                              <p style="white-space:pre-wrap;" class="text-muted">{{ petData.medic }}</p>
                          </div>
                          <div class="col-md-12 form-group">
                              <button class="btn btn-primary" @click="edit_mode=true">Edit</button>
                          </div>
                      </div>
                      <!-- end -->

                      <!-- Edit Form -->
                      <div class="row" v-if="!is_loading && edit_mode">
                          <div class="col-md-12">
                              <form @submit.prevent="updatePet">
                                  <fieldset>
                                      <legend class="text-muted">Edit Details</legend>
                                  </fieldset>
                                  <div class="row">
                                      <div class="col-md-3 form-group">
                                          <label for="">Pet Name</label>
                                          <input :class="{'is-invalid' : form.errors.has('name')}" type="text" class="form-control" v-model="form.name">
                                          <HasError :form="form" field="name" />
                                      </div>
                                      <div class="col-md-3 form-group">
                                          <label for="">Pet Color</label>
                                          <input :class="{'is-invalid' : form.errors.has('color')}" type="text" class="form-control" v-model="form.color">
                                          <HasError :form="form" field="color" />
                                      </div>
                                      <div class="col-md-3 form-group">
                                          <label :class="{'is-invalid' : form.errors.has('breed')}" for="">Pet Breed</label>
                                          <input type="text" class="form-control" v-model="form.breed">
                                          <HasError :form="form" field="breed" />
                                      </div>
                                      <div class="col-md-3 form-group">
                                          <label for="">Age</label>
                                          <input :class="{'is-invalid' : form.errors.has('age')}" type="text" class="form-control" v-model="form.age">
                                          <HasError :form="form" field="age" />
                                      </div>
                                      <div class="col-md-6 form-group">
                                        <label for="">Gender</label>
                                        <select :class="{'is-invalid' : form.errors.has('gender')}" class="form-control" v-model="form.gender">
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                        <HasError :form="form" field="gender" />
                                    </div>
                                      <div class="col-md-4 form-group">
                                          <label for="">Rabies Exp. Date</label>
                                          <input type="date" class="form-control" v-model="form.rabies">
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
                                          <textarea style="height: 150px !important;" class="form-control" v-model="form.feeding" rows="10"></textarea>
                                      </div>
                                      <div class="col-md-12 form-group">
                                          <label for="">Medication</label>
                                          <textarea style="height: 150px !important;" class="form-control" v-model="form.medic" rows="10"></textarea>
                                      </div>
                                      <div class="col-md-12 form-group">
                                          <Button :form="form" class="btn btn-success">Update</Button>
                                          <button @click="edit_mode = false" type="button" class="btn btn-danger">Cancel Edit</button>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                      <!--   -->
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
            petData: {},
            form: new Form({
                petId: this.$route.params.petId,
                name: "",
                breed: "",
                color: "",
                age: "",
                feeding: "",
                medic: "",
                rabies: "",
                photo: "",
                vac: "",
                gender: "",
            }),
            is_loading: true,
            edit_mode: false,
        }
    },
    created(){
        this.getPetData();
    },
    methods: {
        getPetData(){
            axios.get("/admin/api/get-single-pet-data",{
                params:{
                    petId : this.$route.params.petId,
                }
            }).then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                    this.petData = data.data;
                    this.form.name = data.data.name;
                    this.form.breed = data.data.breed;
                    this.form.color = data.data.color;
                    this.form.age = data.data.age;
                    this.form.feeding = data.data.feeding;
                    this.form.medic = data.data.medic;
                    this.form.gender = data.data.gender;
                    this.is_loading = false;
                }
                else{
                    this.$router.push({name: "pets.list"});
                }
            }).catch(err=>{
                console.log(err.response.data);
                this.$router.push({name: "pets.list"});
            })
        },
        async updatePet(){
            await this.form.post("/admin/api/update-pet",{
                //
            }).then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                    swal.fire("Success",data.msg,"success");
                    this.edit_mode = false;
                    this.is_loading = true;
                    this.getPetData();
                }
            }).catch(err=>{
                console.error(err.response.data);
            })
        },
        fileChange(e){
            const file = e.target.files[0];
            let type = $(e.target).data("type");
            
            if(type == "photo"){
                if(file){
                    this.form.photo = file;
                } else{
                    this.form.photo = "";
                }
            }
            else if(type == "vac"){
                if(file){
                    this.form.vac = file;
                } else{
                    this.form.vac = "";
                }
            }
        }
    },
}
</script>

<style>

</style>