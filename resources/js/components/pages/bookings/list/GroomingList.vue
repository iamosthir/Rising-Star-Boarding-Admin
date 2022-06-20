<template>
  <div class="row mt-4">
      <div class="col-md-12">
          <div class="card">
              <div class="card-header">
                  <h4>Grooming - List View</h4>
              </div>
              <div class="card-body">
                  <div class="row">
                      <div class="col-sm-8 col-md-6 col-12">
                          <div class="form-group">
                                <label class="form-label">Filter By</label>
                                <div class="selectgroup w-100">
                                    <label class="selectgroup-item">
                                    <input type="radio" name="radio1" @change="getGroomingData" value="ongoing" class="selectgroup-input-radio" checked="">
                                    <span class="selectgroup-button">On Going</span>
                                    </label>
                                    <label class="selectgroup-item">
                                    <input type="radio" name="radio1" @change="getGroomingData" value="canceled" class="selectgroup-input-radio">
                                    <span class="selectgroup-button">Canceled</span>
                                    </label>
                                    <label class="selectgroup-item">
                                    <input type="radio" name="radio1" @change="getGroomingData" value="completed" class="selectgroup-input-radio">
                                    <span class="selectgroup-button">Completed</span>
                                    </label>
                                </div>
                            </div>
                      </div>

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
                                          <td>{{ grooming.price }} USD</td>
                                          <td>{{ moment(grooming.appointment_date).format("MMMM Do YYYY, h:mm:ss a") }}</td>
                                          <td>{{ moment(grooming.end_time).format("MMMM Do YYYY, h:mm:ss a") }}</td>
                                          <td>
                                              <span v-if="grooming.status=='ongoing'" class="badge badge-pill badge-warning">On Going</span>
                                              <span v-else-if="grooming.status=='completed'" class="badge badge-pill badge-success">Completed</span>
                                              <span v-if="grooming.status=='canceled'" class="badge badge-pill badge-danger">Canceled</span>
                                          </td>
                                          <td>
                                              <button @click="appointmentStatus('finish',grooming.id,i)" v-if="grooming.status=='ongoing'" class="btn btn-sm btn-success">Finish</button>
                                              <button @click="appointmentStatus('cancel',grooming.id,i)" v-if="grooming.status=='ongoing'" class="btn btn-danger btn-sm">Cancel</button>
                                              <router-link :to="{name: 'grooming.edit', params: { id: grooming.id }}" class="btn btn-sm btn-primary">Edit</router-link>
                                              <button @click="deleteGrooming(i,grooming.id)" class="btn btn-sm btn-danger"><i class="fas fa-trash"></i></button>
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
        }
    },
    created(){
        this.getGroomingData();
    },
    methods:{
        getGroomingData(page = 1){
            this.is_loading = true;
            let type = $('input[name="radio1"]:checked').val();
            axios.get("/admin/api/get-all-grooming-booking?page="+page,{
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
        appointmentStatus(status,id,index){
            axios.post("/admin/api/change-grooming-status",{
                id: id,
                status: status
            }).then(resp=>{
                return resp.data;
            }).then(data=>{
                if(data.status == "ok"){
                    swal.fire("Success",data.msg,"success");
                    this.groomings.splice(index,1);
                }
            }).catch(err=>{
                console.error(err.response.data);
            })
        },

        deleteGrooming(index,id){
            swal.fire({
                title: "Are you sure?",
                text: "Once deleted can't be restored",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(res=>{
                if(res.isConfirmed) {
                    
                    axios.post('/admin/api/delete-grooming-booking',{
                        groomingId: id,
                    }).then(resp=>{
                        return resp.data;
                    }).then(data=>{
                        if(data.status == "ok"){
                            swal.fire("Success",data.msg,"success");
                            this.groomings.splice(index,1);
                        }
                    }).catch(err=>{
                        console.error(err.response.data);
                    });

                }
            });
        }
    }
}
</script>

<style>

</style>