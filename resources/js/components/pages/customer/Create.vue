<template>
  <section class="section">
      <div class="row">
          <div class="col-md-12">
              <div class="card">
                  <div class="card-header d-flex justify-content-between">
                      <h4>Create new customer</h4>
                      <router-link tag="button" :to="{name : 'customer.list'}" class="raise-button"><i class="fas fa-arrow-left"></i> Go back</router-link>
                  </div>
                  <div class="card-body">
                      <form action="#" @submit.prevent="createCustomer">
                          <!-- Customer -->
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
                                  <div class="col-md-6 form-group">
                                        <label for="">Booking Type</label>
                                        <select class="form-control" v-model="bookingType">
                                            <option value="boarding">Boarding</option>
                                            <option value="grooming">Grooming</option>
                                        </select>
                                    </div>
                              </div>
                          </fieldset>

                          <!-- Pet -->
                          <fieldset>
                              <legend>Pet Information</legend>
                              <div class="row mt-2">
                                  <div class="col-md-12">
                                      <ul class="nav nav-pills" id="myTab2" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link active" id="pet-tab1" data-toggle="tab" href="#pet1" role="tab" aria-controls="home" aria-selected="true">Pet 1</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="pet-tab2" data-toggle="tab" href="#pet2" role="tab" aria-controls="home" aria-selected="true">Pet 2</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="pet-tab3" data-toggle="tab" href="#pet3" role="tab" aria-controls="home" aria-selected="true">Pet 3</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="pet-tab4" data-toggle="tab" href="#pet4" role="tab" aria-controls="home" aria-selected="true">Pet 4</a>
                                            </li>
                                        </ul>
                                        <div class="tab-content tab-bordered" id="myTab3Content">
                                            <div class="tab-pane fade show active" id="pet1" role="tabpanel" aria-labelledby="Pet 1">
                                                <div class="row">
                                                    <div class="col-md-4 form-group">
                                                        <label for="">Pet 1 Name</label>
                                                        <input v-model="form.pet1.name" type="text" class="form-control">
                                                    </div>
                                                    <div class="col-md-4 form-group">
                                                        <label for="">Pet 1 Breed</label>
                                                        <input v-model="form.pet1.breed" type="text" class="form-control">
                                                    </div>
                                                    <div class="col-md-4 form-group">
                                                        <label for="">Pet 1 Color</label>
                                                        <input v-model="form.pet1.color" type="text" class="form-control">
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label for="">Pet 1 Age</label>
                                                        <input v-model="form.pet1.age" type="text" class="form-control">
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label for="">Gender</label>
                                                        <select class="form-control" v-model="form.pet1.gender">
                                                            <option value="Male">Male</option>
                                                            <option value="Female">Female</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label for="">Feeding Instruction</label>
                                                        <textarea v-model="form.pet1.feeding" rows="5" class="form-control"></textarea>
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label for="">Medications</label>
                                                        <textarea v-model="form.pet1.medic" rows="5" class="form-control"></textarea>
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label for=""> Rabies Expiration</label>
                                                        <input v-model="form.pet1.rabies" type="date" class="form-control">
                                                    </div>
                                                    <div class="col-md-6"></div>
                                                    <div class="col-md-6 form-group">
                                                        <label for="">Pet Photograph (Max : 1 MB) <small>(Optional)</small></label>
                                                        <input @change="fileHandle" data-pet="1" data-type="photo" type="file" class="form-control-file">
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label for="">Vaccination Record (scanned or photo. Max : 1 MB) <small>(Optional)</small></label>
                                                        <input @change="fileHandle" data-pet="1" data-type="vac_record" type="file" class="form-control-file">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="tab-pane fade" id="pet2" role="tabpanel" aria-labelledby="Pet 2">
                                                <div class="row">
                                                    <div class="col-md-4 form-group">
                                                        <label for="">Pet 2 Name</label>
                                                        <input v-model="form.pet2.name" type="text" class="form-control">
                                                    </div>
                                                    <div class="col-md-4 form-group">
                                                        <label for="">Pet 2 Breed</label>
                                                        <input v-model="form.pet2.breed" type="text" class="form-control">
                                                    </div>
                                                    <div class="col-md-4 form-group">
                                                        <label for="">Pet 2 Color</label>
                                                        <input v-model="form.pet2.color" type="text" class="form-control">
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label for="">Pet 2 Age</label>
                                                        <input v-model="form.pet2.age" type="text" class="form-control">
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label for="">Gender</label>
                                                        <select class="form-control" v-model="form.pet2.gender">
                                                            <option value="Male">Male</option>
                                                            <option value="Female">Female</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label for="">Feeding Instruction</label>
                                                        <textarea v-model="form.pet2.feeding" rows="5" class="form-control"></textarea>
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label for="">Medications</label>
                                                        <textarea v-model="form.pet1.medic" rows="5" class="form-control"></textarea>
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label for=""> Rabies Expiration</label>
                                                        <input v-model="form.pet2.rabies" type="date" class="form-control">
                                                    </div>
                                                    <div class="col-md-6"></div>
                                                    <div class="col-md-6 form-group">
                                                        <label for="">Pet Photograph (Max : 1 MB) <small>(Optional)</small></label>
                                                        <input @change="fileHandle" data-pet="2" data-type="photo" type="file" class="form-control-file">
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label for="">Vaccination Record (scanned or photo. Max : 1 MB) <small>(Optional)</small></label>
                                                        <input @change="fileHandle" data-pet="2" data-type="vac_record" type="file" class="form-control-file">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="tab-pane fade" id="pet3" role="tabpanel" aria-labelledby="Pet 3">
                                                <div class="row">
                                                    <div class="col-md-4 form-group">
                                                        <label for="">Pet 3 Name</label>
                                                        <input v-model="form.pet3.name" type="text" class="form-control">
                                                    </div>
                                                    <div class="col-md-4 form-group">
                                                        <label for="">Pet 3 Breed</label>
                                                        <input v-model="form.pet3.breed" type="text" class="form-control">
                                                    </div>
                                                    <div class="col-md-4 form-group">
                                                        <label for="">Pet 3 Color</label>
                                                        <input v-model="form.pet3.color" type="text" class="form-control">
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label for="">Pet 3 Age</label>
                                                        <input v-model="form.pet3.age" type="text" class="form-control">
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label for="">Gender</label>
                                                        <select class="form-control" v-model="form.pet3.gender">
                                                            <option value="Male">Male</option>
                                                            <option value="Female">Female</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label for="">Feeding Instruction</label>
                                                        <textarea v-model="form.pet3.feeding" rows="5" class="form-control"></textarea>
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label for="">Medications</label>
                                                        <textarea v-model="form.pet3.medic" rows="5" class="form-control"></textarea>
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label for=""> Rabies Expiration</label>
                                                        <input v-model="form.pet3.rabies" type="date" class="form-control">
                                                    </div>
                                                    <div class="col-md-6"></div>
                                                    <div class="col-md-6 form-group">
                                                        <label for="">Pet Photograph (Max : 1 MB) <small>(Optional)</small></label>
                                                        <input @change="fileHandle" data-pet="3" data-type="photo" type="file" class="form-control-file">
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label for="">Vaccination Record (scanned or photo. Max : 1 MB) <small>(Optional)</small></label>
                                                        <input @change="fileHandle" data-pet="3" data-type="vac_record" type="file" class="form-control-file">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="tab-pane fade" id="pet4" role="tabpanel" aria-labelledby="Pet 4">
                                                <div class="row">
                                                    <div class="col-md-4 form-group">
                                                        <label for="">Pet 4 Name</label>
                                                        <input v-model="form.pet4.name" type="text" class="form-control">
                                                    </div>
                                                    <div class="col-md-4 form-group">
                                                        <label for="">Pet 4 Breed</label>
                                                        <input v-model="form.pet4.breed" type="text" class="form-control">
                                                    </div>
                                                    <div class="col-md-4 form-group">
                                                        <label for="">Pet 4 Color</label>
                                                        <input v-model="form.pet4.color" type="text" class="form-control">
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label for="">Pet 4 Age</label>
                                                        <input v-model="form.pet4.age" type="text" class="form-control">
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label for="">Gender</label>
                                                        <select class="form-control" v-model="form.pet4.gender">
                                                            <option value="Male">Male</option>
                                                            <option value="Female">Female</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label for="">Feeding Instruction</label>
                                                        <textarea v-model="form.pet4.feeding" rows="5" class="form-control"></textarea>
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label for="">Medications</label>
                                                        <textarea v-model="form.pet4.medic" rows="5" class="form-control"></textarea>
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label for=""> Rabies Expiration</label>
                                                        <input v-model="form.pet4.rabies" type="date" class="form-control">
                                                    </div>
                                                    <div class="col-md-6"></div>
                                                    <div class="col-md-6 form-group">
                                                        <label for="">Pet Photograph (Max : 1 MB) <small>(Optional)</small></label>
                                                        <input @change="fileHandle" data-pet="4" data-type="photo" type="file" class="form-control-file">
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label for="">Vaccination Record (scanned or photo. Max : 1 MB) <small>(Optional)</small></label>
                                                        <input @change="fileHandle" data-pet="4" data-type="" type="file" class="form-control-file">
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                  </div>
                              </div>
                          </fieldset>
                          <fieldset>
                              <div class="row mt-4">
                                  <div class="col-md-12 form-group">
                                      <Button :form="form" class="btn btn-success">Create</Button>
                                  </div>
                                  <div class="col-md-12 form-group" v-if="form.progress">
                                      <progress class="w-100" :value="form.progress.percentage" max="100"></progress>
                                      <label for="">{{ form.progress.percentage }}%</label>
                                  </div>
                                  <!-- <div v-if="form.progress">Progress: {{ form.progress.percentage }}%</div> -->
                                  <div class="col-md-12 form-group">
                                      <AlertError :form="form">There were some problems with your input.</AlertError>
                                  </div>
                              </div>
                          </fieldset>
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
            form : new Form({
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
                pet1_photo: null,
                pet1_vac_record: null,
                pet2_photo: null,
                pet2_vac_record: null,
                pet3_photo: null,
                pet3_vac_record: null,
                pet4_photo: null,
                pet4_vac_record: null,
                pet1: {
                    name: null,
                    breed: null,
                    color: null,
                    age: null,
                    feeding: null,
                    medic: null,
                    rabies: null,
                    gender:'Male',
                },
                pet2: {
                    name: null,
                    breed: null,
                    color: null,
                    age: null,
                    feeding: null,
                    medic: null,
                    rabies: null,
                    gender:'Male',
                },
                pet3: {
                    name: null,
                    breed: null,
                    color: null,
                    age: null,
                    feeding: null,
                    medic: null,
                    rabies: null,
                    gender:'Male',
                },
                pet4: {
                    name: null,
                    breed: null,
                    color: null,
                    age: null,
                    feeding: null,
                    medic: null,
                    rabies: null,
                    gender:'Male',
                    
                },
            }),
            bookingType: "boarding",
        }
    },
    methods:{
        async createCustomer(){
            const resp = await this.form.post("/admin/api/create-customer",{
                // 
            }).then(resp => {
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                    this.$router.push({name: `booking.${this.bookingType}`, params: {id: data.customer_id}});
                }
                else{
                    swal.fire({
                        title : "Failed",
                        text: "Internal Server Error",
                        icon: "error"
                    });
                }
            }).catch(err=>{
                console.error(err.response.data);
            });
        },
        fileHandle(e){
            const file = e.target.files[0];
            if(file){
                let pet = $(e.target).data("pet");
                let type = $(e.target).data("type");
                switch(pet){
                    case 1:
                        if(type=="photo"){
                            this.form.pet1_photo = file;
                        } else{
                            this.form.pet1_vac_record = file;
                        }
                    break;
                    case 2:
                        if(type=="photo"){
                            this.form.pet2_photo = file;
                        } else{
                            this.form.pet2_vac_record = file;
                        }
                    break;
                    case 3:
                        if(type=="photo"){
                            this.form.pet3_photo = file;
                        } else{
                            this.form.pet3_vac_record = file;
                        }
                    break;
                    case 4:
                        if(type=="photo"){
                            this.form.pet4_photo = file;
                        } else{
                            this.form.pet4_vac_record = file;
                        }
                    break;
                }
            }
        }
    }
}
</script>

<style>

</style>