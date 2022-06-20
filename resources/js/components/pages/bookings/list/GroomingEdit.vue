<template>
  <section class="section">
      <div class="row">
          <div class="col-md-12">
              <div class="card">
                  <div class="card-header d-flex justify-content-between">
                      <h4>Grooming appoinment</h4>
                      <router-link tag="button" :to="{name : 'grooming.list-view'}" class="raise-button"><i class="fas fa-arrow-left"></i> Go back</router-link>
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
                      <form v-if="!is_loading" @submit.prevent="updateAppointement">
                          
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
                                    <label for="">Change Appointment Date & Time (<strong class="text-muted">{{ moment(form.date).format('DD MMM YYYY hh:mm A') }}</strong>)</label>
                                    <input :class="{'is-invalid' : form.errors.has('date')}" type="datetime-local" class="form-control" v-model="form.date">
                                    <HasError :form="form" field="date" />
                                </div>
                                <div class="col-md-4 form-group">
                                    <label for="">Appointment Duration (<strong class="text-muted"> {{ timeDiff }} </strong>)</label>
                                    <select class="form-control" :class="{'is-invalid' : form.errors.has('end')}" v-model="form.end">
                                        <option value="" hidden>Select Duration</option>
                                        <option value="30">30 min</option>
                                        <option value="60">1 hour</option>
                                        <option value="90">1 hour and a half</option>
                                        <option value="120">2 hour</option>
                                        <option value="150">2 hour and a half</option>
                                        <option value="180">3 hour</option>
                                        <option value="210">3 hour and a half</option>
                                        <option value="240">4 hour</option>
                                    </select>
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
                                  <Button :form="form" class="btn btn-primary">Update Schedule</Button>
                              </div>
                              <div class="col-md-12 form-group">
                                  <button @click="appointmentStatus('finish',grooming_data.id,$event)" v-if="grooming_data.status=='ongoing'" class="btn btn-sm btn-success">
                                    <span style="display:none;" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    Finish</button>
                                <button @click="appointmentStatus('ongoing',grooming_data.id,$event)" v-if="grooming_data.status == 'pending'" class="btn btn-sm btn-success">
                                    <span style="display:none;" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    Approve</button>
                                <button @click="appointmentStatus('cancel',grooming_data.id,$event)" v-if="grooming_data.status=='ongoing'||grooming_data.status=='pending'"
                                class="btn btn-danger btn-sm">
                                <span style="display:none;" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Cancel</button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>

        <div class="col-12" v-if="emailError">
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <h4 class="alert-heading">Warning!</h4><button @click="emailError=false;emailErrorText='';" type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                <p>This booking was approved successfully but there were some problem with the server</p>
                <p class="ml-3"><strong>Possible Soulutions :</strong></p>
                <ul>
                <li>Try to set a default email account from <router-link :to="{name: 'admin-email'}">Email Setup</router-link></li>
                <li>Try to add a new email</li>
                <li>Check your email server configuration</li>
                <li>Check your email credentials</li>
                <li>Contact with developer for more support</li>
                </ul>
                <hr>
                <p class="mb-0"><strong>ERROR_DETAILS</strong></p>
                <p>{{ emailErrorText }}</p>
            </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
    data(){
        return{
            moment: moment,
            is_loading: true,
            customer_data: {},
            grooming_data:{},
            petOptions: [],
            petValues: null,
            form: new Form({
                groomingId : this.$route.params.id,
                pets: null,
                date: "",
                end: "",
                price: "",
                customer_id: this.$route.params.id,
                note: ''
            }),
            emailError: false,
            emailErrorText: "",
        }
    },
    created(){
        this.getGroomingData();
    },
    methods:{
        getGroomingData(){
            axios.get("/admin/api/get-grooming-data",{
                params:{
                    groomingId: this.$route.params.id,
                }
            }).then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status=="ok"){
                    this.grooming_data = data.grooming_data;
                    this.customer_data = data.customer_data;
                    this.petOptions = data.customer_data.pet;
                    this.petValues = data.grooming_data.pets;
                    this.form.date = moment(data.grooming_data.appointment_date).format("YYYY-MM-DDTHH:mm");
                    
                    if(data.grooming_data.end_time != "")
                    {
                        var a = this.moment(data.grooming_data.appointment_date);
                        var b = this.moment(data.grooming_data.end_time);
                        this.form.end = b.diff(a,"minutes");
                    }

                    this.form.price = data.grooming_data.price;
                    this.form.note = data.grooming_data.note;
                    this.is_loading= false;
                } else{
                    this.$router.push({name:'grooming.list-view'});
                }
            }).catch(err=>{
                console.error(err.response.data);
                this.$router.push({name:'grooming.list-view'});
            })
        },
        addTag (newTag) {
            const tag = {
                name: newTag,
                code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
            }
            this.petOptions.push(tag)
            this.petValues.push(tag)
        },
        updateAppointement(){
            if(this.petValues != null)
            {
                this.form.pets = JSON.stringify(this.petValues);
            }
            this.form.post("/admin/api/update-appointment-grooming")
            .then(resp=>{
                return resp.data;
            }).then(data=>{
                console.log(data);
                if(data.status == "ok"){
                    swal.fire({
                        title: "Success",
                        text: data.msg,
                        icon: "success",
                    });
                }
            }).catch(err=>{
                console.error(err.response.data);
            });
        },
        appointmentStatus(status,id,e){
            $(e.target).find("span").show();
            $(e.target).attr("disabled",true);
            axios.post("/admin/api/change-grooming-status",{
                id: id,
                status: status
            }).then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                    swal.fire("Success",data.msg,"success");
                    this.grooming_data.status = status;
                    $(e.target).find("span").hide();
                    $(e.target).attr("disabled",false);
                }
            }).catch(err=>{
                console.error(err.response.data);
                swal.fire("Success","This booking was approved","success");
                $(e.target).find("span").hide();
                $(e.target).attr("disabled",false);
                this.emailError = true;
                this.emailErrorText = err.response.data.message;
            })
        },
        newEndTime(e){
            this.form.end = e.target.value;
        }
    },
    computed:{
        timeDiff(){

            let timeText = "";
            switch(this.form.end){
                case "30" :
                    timeText = "30 minutes"
                break;

                case "60" :
                    timeText = "1 hour"
                break;

                case "90" :
                    timeText = "1 hour and a half"
                break;

                case "120" :
                    timeText = "2 hour"
                break;

                case "150" :
                    timeText = "2 hour and a half"
                break;

                case "180" :
                    timeText = "3 hour"
                break;

                case "210" :
                    timeText = "3 hour and a half"
                break;

                case "240" :
                    timeText = "4 hour"
                break;

                default:
                    timeText = "-"
                break;
            }
            return timeText;
        }
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>

</style>