<template>
  <div class="row mt-4">
      <div class="col-md-12">
          <div class="card">
              <div class="card-header">
                  <h4>Grooming - Pending List</h4>
              </div>
              <div class="card-body">
                  <div class="row">
                      <div class="col-md-12" v-if="is_loading">
                           <div class="section">
                                <skeleton v-for="(n,i) in 10" :key="i" width="100%" height="40px" class="mt-2" />
                            </div>
                      </div>
                      <div class="col-md-12" v-if="!is_loading && groomings.length > 0">
                          <div class="table-responsive">
                              <table class="table table-hover table-striped">
                                  <thead>
                                      <tr>
                                          <th>Booking ID</th>
                                          <th>Customer Name</th>
                                          <th>Pets</th>
                                          <th>Price</th>
                                          <th>Appointment Date & Time</th>
                                          <th>End Time</th>
                                          <th>Booking Created At</th>
                                          <th>Status</th>
                                          <th>Action</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr v-for="(grooming,i) in groomings" :key="i">
                                          <td><strong>{{ grooming.id }}</strong></td>
                                          <td><b class="text-muted">{{ grooming.customer.first_name + " "+ grooming.customer.last_name }}</b></td>
                                          <td>
                                              <ul class="text-success">
                                                  <li v-for="(pet,i) in grooming.pets" :key="i">{{ pet.name +" - "+ pet.color}}</li>
                                              </ul>
                                          </td>
                                          <td>{{ grooming.price||0 }} USD</td>
                                          <td>{{ moment(grooming.appointment_date).format("MMMM Do YYYY, h:mm:ss a") }}</td>
                                          <td>{{ moment(grooming.end_time).format("MMMM Do YYYY, h:mm a") }}</td>
                                          <td>{{ moment(grooming.created_at).format("Do MMM YYYY h:mm a") }}</td>
                                          <td>
                                              <span v-if="grooming.status=='ongoing'" class="badge badge-pill badge-warning">On Going</span>
                                              <span v-else-if="grooming.status=='completed'" class="badge badge-pill badge-success">Completed</span>
                                              <span v-if="grooming.status=='canceled'" class="badge badge-pill badge-danger">Canceled</span>
                                              <span v-if="grooming.status=='pending'" class="badge badge-pill badge-warning">Pending</span>
                                          </td>
                                          <td>
                                              <button @click="appointmentStatus('finish',grooming.id,i,$event)" v-if="grooming.status=='ongoing'" class="btn btn-sm btn-success">
                                                  <span style="display:none;" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                  Finish</button>
                                              <router-link :to="{name: 'grooming.edit', params: { id: grooming.id }}" class="btn btn-sm btn-primary">View</router-link>
                                              <button @click="appointmentStatus('ongoing',grooming.id,i,$event)" v-if="grooming.status == 'pending'" class="btn btn-sm btn-success">
                                                  <span style="display:none;" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                  Approve</button>
                                              <button @click="appointmentStatus('cancel',grooming.id,i,$event)" v-if="grooming.status=='ongoing'||grooming.status=='pending'"
                                               class="btn btn-danger btn-sm">
                                               <span style="display:none;" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                               Cancel</button>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                      <div class="col-md-12 mt-3">
                              <div class="row justify-content-center">
                                  <pagination :data="paginateData" @pagination-change-page="getGroomingData"></pagination>
                              </div>
                          </div>

                      <div class="col-md-12" v-if="!is_loading && groomings.length == 0">
                          <h5 class="text-center text-danger">No Booking Records</h5>
                      </div>

                  </div>
              </div>
              <div class="card-footer text-center">
                  <router-link :to="{name: 'grooming.list-view'}" class="btn btn-outline-success">View All Approved Bookings</router-link>
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
</template>

<script>
export default {
    data(){
        return{
            is_loading: true,
            groomings: [],
            paginateData: {},
            moment: moment,
            emailError: false,
            emailErrorText: "",
        }
    },
    created(){
        this.getGroomingData();
    },
    methods:{
        getGroomingData(page = 1){
            this.is_loading = true;
            let type = $('input[name="radio1"]:checked').val();
            axios.get("/admin/api/get-pending-grooming-booking?page="+page,{
                params:{
                    type : type,
                }
            }).then(resp =>{
                return resp.data;
            }).then(data =>{
                this.groomings = data.data;
                this.paginateData = data;
                this.is_loading = false;
            }).catch(err=>{
                err.response.data;
            });
        },
        appointmentStatus(status,id,index,e){
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
                    this.groomings.splice(index,1);
                    $(e.target).find("span").hide();
                    $(e.target).attr("disabled",false);
                }
            }).catch(err=>{
                console.error(err.response.data);
                swal.fire("Success","This booking was approved","success");
                this.groomings.splice(index,1);
                $(e.target).find("span").hide();
                $(e.target).attr("disabled",false);
                this.emailError = true;
                this.emailErrorText = err.response.data.message;
            })

        }
    }
}
</script>

<style>

</style>