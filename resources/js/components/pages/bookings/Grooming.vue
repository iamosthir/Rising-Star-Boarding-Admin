<template>
  <section class="section">
      <div class="row">
          <div class="col-md-12">
              <div class="card">
                  <div class="card-header d-flex justify-content-between">
                      <h4>Grooming appoinment</h4>
                      <router-link tag="button" :to="{name : 'booking.new'}" class="raise-button"><i class="fas fa-arrow-left"></i> Go back</router-link>
                  </div>
                  <div class="card-body">
                      <div class="section" v-if="is_loading">
                          <div class="row">
                              <div class="col-3 form-group">
                                  <skeleton widht="100%" height="30px"/>
                              </div>
                              <div class="col-md-12 form-group">
                                  <skeleton widht="100%" height="30px"/>
                              </div>
                              <div class="col-md-12 form-group">
                                  <skeleton widht="100%" height="30px"/>
                              </div>
                              <div class="col-md-12 form-group">
                                  <skeleton widht="100%" height="30px"/>
                              </div>
                              <div class="col-md-12 form-group">
                                  <skeleton widht="100%" height="150px"/>
                              </div>
                              <div class="col-md-6 form-group">
                                  <skeleton widht="100%" height="30px"/>
                              </div>
                              
                          </div>
                      </div>
                      <form v-if="!is_loading" @submit.prevent="makeAppointement">
                          
                          <div class="row">
                              <div class="col-md-12 form-group">
                                    <AlertError :form="form">There were some problems with your input.</AlertError>
                                </div>
                          </div>
                          <div class="row">
                              <div class="col-md-12">
                                  <h6 class="text-muted">Customer Name: <strong class="text-success">{{ customer_data.first_name + " "+customer_data.last_name }}</strong></h6>
                                    <p class="text-muted">Booking Type : <strong class="text-warning">Grooming</strong></p>
                                    <hr>
                              </div>
                          </div>
                          <fieldset>
                              <legend><strong>{{ customer_data.first_name +" "+ customer_data.last_name }}'s</strong> appoinment for grooming</legend>
                              <hr>
                              <div class="row">
                                <div class="col-md-9 form-group">
                                    <multiselect v-model="petValues" :options="petOptions"
                                    :taggable="true"
                                    :multiple="true"
                                    :close-on-select="false"
                                    @tag="addTag"
                                    track-by="id"
                                    label="name"
                                    placeholder="Select Pets"
                                    :class="{'invalid' : form.errors.has('pets')}" >
                                    </multiselect>
                                    <HasError :form="form" field="pets" />
                                </div>
                                <div class="col-md-3 form-group">
                                    <router-link :to="{name: 'customer.profile', params:{ customerId: customer_data.id } }" class="btn btn-primary w-100">Manage Pets</router-link>
                                </div>
                                <div class="col-md-4 form-group">
                                    <label for="">Appointment Date & Time</label>
                                    <input :class="{'is-invalid' : form.errors.has('date')}" type="datetime-local" class="form-control" v-model="form.date">
                                    <HasError :form="form" field="date" />
                                </div>
                                <div class="col-md-4 form-group">
                                    <label for="">Ends at</label>
                                    <input :class="{'is-invalid' : form.errors.has('end')}" v-model="form.end" type="datetime-local" class="form-control">
                                    <HasError :form="form" field="end" />
                                </div>
                                <div class="col-md-4 form-group">
                                    <label for="">Price ($)</label>
                                    <input :class="{'is-invalid' : form.errors.has('price')}" v-model="form.price" type="number" step="any" class="form-control" placeholder="Price">
                                    <HasError :form="form" field="price" />
                                </div>
                                <div class="col-md-12 form-group">
                                    <label for="">Note</label>
                                    <textarea class="form-control" rows="3" placeholder="Write..." v-model="form.note"></textarea>
                                </div>
                                
                              </div>
                          </fieldset>
                          <div class="row">
                              <div class="col-md-6 form-group">
                                  <Button :form="form" class="btn btn-primary">Schedule</Button>
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
            is_loading: true,
            customer_data: {},
            petOptions: [],
            petValues: null,
            form: new Form({
                pets: null,
                date: "",
                end: "",
                price: "",
                customer_id: this.$route.params.id,
                note: ''
            }),
        }
    },
    created(){
        this.getCustomerDetails();
    },
    methods:{
        getCustomerDetails(){
            axios.get("/admin/api/get-customer-data",{
                params:{
                    customer_id : this.$route.params.id,
                }
            }).then(resp => {
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                    this.customer_data = data.data;
                    this.petOptions = data.data.pet;
                    this.is_loading = false;
                }
                else{
                    this.$router.push({name: 'booking.new'});
                }
            });
        },
        addTag (newTag) {
            const tag = {
                name: newTag,
                code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
            }
            this.petOptions.push(tag)
            this.petValues.push(tag)
        },
        makeAppointement(){
            if(this.petValues != null)
            {
                this.form.pets = JSON.stringify(this.petValues);
            }
            this.form.post("/admin/api/make-appointment-grooming")
            .then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                    this.resetForm();
                    swal.fire({
                        title: "Success",
                        text: "Appointment was scheduled",
                        icon: "success",
                    });
                }
            }).catch(err=>{
                console.error(err.response.data);
            });
        },
        resetForm(){
            this.form.pets = null;
            this.form.date = "";
            this.form.end = "";
            this.form.price = "";
            this.petValues = null;
            this.form.note = "";
        }
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>

</style>